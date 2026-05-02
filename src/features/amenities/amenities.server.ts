import mongoose, { type InferSchemaType } from 'mongoose'

import { requireMongoConnection } from '@/lib/mongodb'
import type { Amenity } from '@/types/amenities'
import type { AmenityInput } from '@/features/amenities/amenities.schemas'

const { Schema, model, models } = mongoose

const amenitySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    layout: {
      type: String,
      enum: ['wide', 'tall', 'standard'],
      required: true,
    },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'amenities',
    timestamps: true,
  },
)

type AmenityDocument = InferSchemaType<typeof amenitySchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const AmenityModel =
  models.Amenity || model<AmenityDocument>('Amenity', amenitySchema)

function toAmenity(doc: AmenityDocument): Amenity {
  return {
    id: doc._id.toString(),
    name: doc.name,
    description: doc.description,
    category: doc.category,
    image: doc.image,
    layout: doc.layout,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function sortAmenities(items: Amenity[]) {
  return [...items].sort((left, right) => {
    const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    return left.name.localeCompare(right.name)
  })
}

export async function listAmenities() {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to load amenities.',
  )

  const documents = await AmenityModel.find()
    .sort({ sortOrder: 1, name: 1 })
    .lean<AmenityDocument[]>()

  return sortAmenities(documents.map(toAmenity))
}

export async function replaceAmenities(items: AmenityInput[]) {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to manage amenities.',
  )

  const normalizedItems = items.map((item, index) => ({
    ...item,
    sortOrder: item.sortOrder ?? index + 1,
  }))

  await AmenityModel.deleteMany({})

  if (normalizedItems.length === 0) {
    return []
  }

  const created = await AmenityModel.insertMany(normalizedItems)

  return sortAmenities(
    created.map((document) => toAmenity(document.toObject() as AmenityDocument)),
  )
}
