import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getAccommodations } from '@/features/accommodations/accommodations.functions'
import { AccommodationsPage } from '@/features/accommodations/pages/AccommodationsPage'

export const Route = createFileRoute('/accommodations')({
  loader: () => getAccommodations(),
  component: AccommodationsRoute,
})

function AccommodationsRoute() {
  const accommodations = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="accommodations" />
      <AccommodationsPage accommodations={accommodations} />
      <SiteFooter />
    </main>
  )
}
