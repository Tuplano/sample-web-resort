import { createFileRoute } from '@tanstack/react-router'

import { AccommodationsPage } from '@/features/accommodations/pages/AccommodationsPage'

export const Route = createFileRoute('/accommodations')({
  component: AccommodationsRoute,
})

function AccommodationsRoute() {
  return <AccommodationsPage />
}
