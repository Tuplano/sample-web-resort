import mongoose, { type InferSchemaType } from 'mongoose'

const { Schema, model, models } = mongoose

import { requireMongoConnection } from '@/lib/mongodb'
import type { Accommodation } from '@/types/home'
import type { AccommodationInput } from '@/features/accommodations/accommodations.schemas'

const accommodationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    image: { type: String, required: true, trim: true },
    size: { type: String, enum: ['large', 'compact'], required: true },
    tags: [{ type: String, trim: true }],
    guests: { type: String, trim: true },
    area: { type: String, trim: true },
    beds: { type: String, trim: true },
    price: { type: String, trim: true },
    priceSuffix: { type: String, trim: true },
    featured: { type: Boolean, default: false },
    sortOrder: { type: Number, default: 0 },
  },
  {
    collection: 'accommodations',
    timestamps: true,
  },
)

type AccommodationDocument = InferSchemaType<typeof accommodationSchema> & {
  _id: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const AccommodationModel =
  models.Accommodation ||
  model<AccommodationDocument>('Accommodation', accommodationSchema)

function toAccommodation(doc: AccommodationDocument): Accommodation {
  return {
    id: doc._id.toString(),
    name: doc.name,
    description: doc.description ?? undefined,
    image: doc.image,
    size: doc.size,
    tags: doc.tags,
    guests: doc.guests ?? undefined,
    area: doc.area ?? undefined,
    beds: doc.beds ?? undefined,
    price: doc.price ?? undefined,
    priceSuffix: doc.priceSuffix ?? undefined,
    featured: doc.featured,
    sortOrder: doc.sortOrder,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }
}

function sortAccommodations(items: Accommodation[]) {
  return [...items].sort((left, right) => {
    const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    if (Boolean(left.featured) !== Boolean(right.featured)) {
      return left.featured ? -1 : 1
    }

    return left.name.localeCompare(right.name)
  })
}

export async function listAccommodations() {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to load accommodations.',
  )

  const documents = await AccommodationModel.find()
    .sort({ featured: -1, sortOrder: 1, name: 1 })
    .lean<AccommodationDocument[]>()

  return sortAccommodations(documents.map(toAccommodation))
}

export async function createAccommodation(accommodation: Accommodation) {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to create accommodations.',
  )

  const created = await AccommodationModel.create(accommodation)

  return toAccommodation(created.toObject() as AccommodationDocument)
}

export async function setFeaturedAccommodation(id: string) {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to manage featured accommodations.',
  )

  const updated = await AccommodationModel.findByIdAndUpdate(
    id,
    { $set: { featured: true } },
    { new: true },
  )

  if (!updated) {
    throw new Error('Accommodation not found.')
  }

  return toAccommodation(updated.toObject() as AccommodationDocument)
}

export async function replaceAccommodations(items: AccommodationInput[]) {
  await requireMongoConnection(
    'MongoDB is not configured. Add MONGODB_URI to manage accommodations.',
  )

  const normalizedItems = items.map((item, index) => ({
    ...item,
    tags: item.tags?.filter(Boolean) ?? [],
    sortOrder: item.sortOrder ?? index + 1,
    featured: item.featured ?? false,
  }))

  await AccommodationModel.deleteMany({})

  if (normalizedItems.length === 0) {
    return []
  }

  const created = await AccommodationModel.insertMany(normalizedItems)

  return sortAccommodations(
    created.map((document) =>
      toAccommodation(document.toObject() as AccommodationDocument),
    ),
  )
}
