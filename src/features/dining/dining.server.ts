import mongoose, { type InferSchemaType } from 'mongoose'

import {
  diningHighlightsSeed,
  diningMenuSeed,
} from '@/features/dining/dining.seed'
import { connectToMongo } from '@/lib/mongodb'
import type { DiningHighlight, MenuItem } from '@/types/dining'

const { Schema, model, models } = mongoose

const diningHighlightSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'dining_highlights',
    timestamps: true,
  },
)

const menuItemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ['appetizers', 'mains', 'desserts'],
      required: true,
    },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'menu_items',
    timestamps: true,
  },
)

type DiningHighlightDocument = InferSchemaType<typeof diningHighlightSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

type MenuItemDocument = InferSchemaType<typeof menuItemSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const DiningHighlightModel =
  models.DiningHighlight ||
  model<DiningHighlightDocument>('DiningHighlight', diningHighlightSchema)

const MenuItemModel =
  models.MenuItem || model<MenuItemDocument>('MenuItem', menuItemSchema)

function toDiningHighlight(doc: DiningHighlightDocument): DiningHighlight {
  return {
    id: doc._id.toString(),
    name: doc.name,
    description: doc.description,
    label: doc.label,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function toMenuItem(doc: MenuItemDocument): MenuItem {
  return {
    id: doc._id.toString(),
    name: doc.name,
    price: doc.price,
    description: doc.description,
    category: doc.category,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function sortByOrder<T extends { sortOrder?: number; name: string }>(items: T[]) {
  return [...items].sort((left, right) => {
    const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    return left.name.localeCompare(right.name)
  })
}

async function ensureSeedData() {
  const [highlightCount, menuCount] = await Promise.all([
    DiningHighlightModel.countDocuments(),
    MenuItemModel.countDocuments(),
  ])

  const writes: Promise<unknown>[] = []

  if (highlightCount === 0) {
    writes.push(DiningHighlightModel.insertMany(diningHighlightsSeed))
  }

  if (menuCount === 0) {
    writes.push(MenuItemModel.insertMany(diningMenuSeed))
  }

  if (writes.length > 0) {
    await Promise.all(writes)
  }
}

export async function getDiningPageContent() {
  const connection = await connectToMongo()

  if (!connection) {
    return {
      highlights: sortByOrder(diningHighlightsSeed),
    }
  }

  await ensureSeedData()

  const highlights = await DiningHighlightModel.find()
    .sort({ sortOrder: 1, name: 1 })
    .lean<DiningHighlightDocument[]>()

  return {
    highlights: sortByOrder(highlights.map(toDiningHighlight)),
  }
}

export async function getDiningMenuContent() {
  const connection = await connectToMongo()

  if (!connection) {
    return {
      menuItems: sortByOrder(diningMenuSeed),
    }
  }

  await ensureSeedData()

  const menuItems = await MenuItemModel.find()
    .sort({ category: 1, sortOrder: 1, name: 1 })
    .lean<MenuItemDocument[]>()

  return {
    menuItems: sortByOrder(menuItems.map(toMenuItem)),
  }
}
