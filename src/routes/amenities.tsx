import { createFileRoute } from '@tanstack/react-router'

import { AmenitiesPage } from '@/features/amenities/pages/AmenitiesPage'

export const Route = createFileRoute('/amenities')({
  component: AmenitiesRoute,
})

function AmenitiesRoute() {
  return <AmenitiesPage />
}
