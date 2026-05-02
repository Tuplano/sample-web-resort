import mongoose, { type InferSchemaType } from 'mongoose'

import {
  activitiesSeed,
  weeklyActivitiesSeed,
} from '@/features/activities/activities.seed'
import { connectToMongo } from '@/lib/mongodb'
import type { Activity, WeeklyActivity } from '@/types/activities'

const { Schema, model, models } = mongoose

const activitySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'activities',
    timestamps: true,
  },
)

const weeklyActivitySchema = new Schema(
  {
    day: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    tone: {
      type: String,
      enum: ['blue', 'green', 'sand', 'stone'],
      required: true,
    },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'weekly_activities',
    timestamps: true,
  },
)

type ActivityDocument = InferSchemaType<typeof activitySchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

type WeeklyActivityDocument = InferSchemaType<typeof weeklyActivitySchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const ActivityModel =
  models.Activity || model<ActivityDocument>('Activity', activitySchema)

const WeeklyActivityModel =
  models.WeeklyActivity ||
  model<WeeklyActivityDocument>('WeeklyActivity', weeklyActivitySchema)

function toActivity(doc: ActivityDocument): Activity {
  return {
    id: doc._id.toString(),
    name: doc.name,
    description: doc.description,
    category: doc.category,
    duration: doc.duration,
    image: doc.image,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function toWeeklyActivity(doc: WeeklyActivityDocument): WeeklyActivity {
  return {
    id: doc._id.toString(),
    day: doc.day,
    time: doc.time,
    name: doc.name,
    tone: doc.tone,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function sortByOrder<T extends { sortOrder?: number; name?: string; day?: string }>(
  items: T[],
) {
  return [...items].sort((left, right) => {
    const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    return (left.name ?? left.day ?? '').localeCompare(right.name ?? right.day ?? '')
  })
}

async function ensureSeedData() {
  const [activityCount, weeklyCount] = await Promise.all([
    ActivityModel.countDocuments(),
    WeeklyActivityModel.countDocuments(),
  ])

  const writes: Promise<unknown>[] = []

  if (activityCount === 0) {
    writes.push(ActivityModel.insertMany(activitiesSeed))
  }

  if (weeklyCount === 0) {
    writes.push(WeeklyActivityModel.insertMany(weeklyActivitiesSeed))
  }

  if (writes.length > 0) {
    await Promise.all(writes)
  }
}

export async function getActivitiesContent() {
  const connection = await connectToMongo()

  if (!connection) {
    return {
      activities: sortByOrder(activitiesSeed),
      weeklyActivities: sortByOrder(weeklyActivitiesSeed),
    }
  }

  await ensureSeedData()

  const [activities, weeklyActivities] = await Promise.all([
    ActivityModel.find().sort({ sortOrder: 1, name: 1 }).lean<ActivityDocument[]>(),
    WeeklyActivityModel.find()
      .sort({ sortOrder: 1, day: 1 })
      .lean<WeeklyActivityDocument[]>(),
  ])

  return {
    activities: sortByOrder(activities.map(toActivity)),
    weeklyActivities: sortByOrder(weeklyActivities.map(toWeeklyActivity)),
  }
}
