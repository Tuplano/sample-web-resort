import { createServerFn } from '@tanstack/react-start'

export const getAmenities = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { listAmenities } = await import('@/features/amenities/amenities.server')

    return listAmenities()
  },
)
