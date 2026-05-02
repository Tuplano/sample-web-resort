import mongoose, { type InferSchemaType } from 'mongoose'

import { requireMongoConnection } from '@/lib/mongodb'
import type {
  Activity,
  WeeklyActivity,
  WeeklyActivityDay,
} from '@/types/activities'
import type {
  ActivityInput,
  WeeklyActivityInput,
} from '@/features/activities/activities.schemas'
import { weeklyActivityDays } from '@/features/activities/activities.schemas'

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
    day: doc.day as WeeklyActivityDay,
    time: doc.time,
    name: doc.name,
    tone: doc.tone,
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

const weeklyActivityDayOrder = new Map<WeeklyActivityDay, number>(
  weeklyActivityDays.map((day, index) => [day, index]),
)

function sortWeeklyActivities(items: WeeklyActivity[]) {
  return [...items].sort((left, right) => {
    const leftDay = weeklyActivityDayOrder.get(left.day) ?? Number.MAX_SAFE_INTEGER
    const rightDay =
      weeklyActivityDayOrder.get(right.day) ?? Number.MAX_SAFE_INTEGER

    if (leftDay !== rightDay) {
      return leftDay - rightDay
    }

    if (left.time !== right.time) {
      return left.time.localeCompare(right.time)
    }

    return left.name.localeCompare(right.name)
  })
}

export async function getActivitiesContent() {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to load activities.',
  )

  const [activities, weeklyActivities] = await Promise.all([
    ActivityModel.find().sort({ sortOrder: 1, name: 1 }).lean<ActivityDocument[]>(),
    WeeklyActivityModel.find()
      .sort({ day: 1, time: 1, name: 1 })
      .lean<WeeklyActivityDocument[]>(),
  ])

  return {
    activities: sortByOrder(activities.map(toActivity)),
    weeklyActivities: sortWeeklyActivities(weeklyActivities.map(toWeeklyActivity)),
  }
}

export async function replaceActivitiesContent({
  activities,
  weeklyActivities,
}: {
  activities: ActivityInput[]
  weeklyActivities: WeeklyActivityInput[]
}) {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to manage activities.',
  )

  const normalizedActivities = activities.map((item, index) => ({
    ...item,
    sortOrder: item.sortOrder ?? index + 1,
  }))

  await Promise.all([
    ActivityModel.deleteMany({}),
    WeeklyActivityModel.deleteMany({}),
  ])

  const [createdActivities, createdWeeklyActivities] = await Promise.all([
    normalizedActivities.length > 0
      ? ActivityModel.insertMany(normalizedActivities)
      : Promise.resolve([]),
    weeklyActivities.length > 0
      ? WeeklyActivityModel.insertMany(weeklyActivities)
      : Promise.resolve([]),
  ])

  return {
    activities: sortByOrder(
      createdActivities.map((document) =>
        toActivity(document.toObject() as ActivityDocument),
      ),
    ),
    weeklyActivities: sortWeeklyActivities(
      createdWeeklyActivities.map((document) =>
        toWeeklyActivity(document.toObject() as WeeklyActivityDocument),
      ),
    ),
  }
}
