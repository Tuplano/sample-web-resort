import { createServerFn } from '@tanstack/react-start'

import {
  accommodationInputSchema,
  featuredAccommodationInputSchema,
} from '@/features/accommodations/accommodations.schemas'

export const getAccommodations = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { listAccommodations } = await import(
      '@/features/accommodations/accommodations.server'
    )

    return listAccommodations()
  },
)

export const addAccommodation = createServerFn({ method: 'POST' })
  .inputValidator(accommodationInputSchema)
  .handler(async ({ data }) => {
    const { createAccommodation } = await import(
      '@/features/accommodations/accommodations.server'
    )

    return createAccommodation(data)
  })

export const featureAccommodation = createServerFn({ method: 'POST' })
  .inputValidator(featuredAccommodationInputSchema)
  .handler(async ({ data }) => {
    const { setFeaturedAccommodation } = await import(
      '@/features/accommodations/accommodations.server'
    )

    return setFeaturedAccommodation(data.id)
  })
