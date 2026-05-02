import mongoose, { type InferSchemaType } from 'mongoose'

import { amenitiesSeed } from '@/features/amenities/amenities.seed'
import { connectToMongo } from '@/lib/mongodb'
import type { Amenity } from '@/types/amenities'

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

async function ensureSeedData() {
  const existingCount = await AmenityModel.countDocuments()

  if (existingCount > 0) {
    return
  }

  await AmenityModel.insertMany(amenitiesSeed)
}

export async function listAmenities() {
  const connection = await connectToMongo()

  if (!connection) {
    return sortAmenities(amenitiesSeed)
  }

  await ensureSeedData()

  const documents = await AmenityModel.find()
    .sort({ sortOrder: 1, name: 1 })
    .lean<AmenityDocument[]>()

  return sortAmenities(documents.map(toAmenity))
}
