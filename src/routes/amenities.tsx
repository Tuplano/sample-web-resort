import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getAmenities } from '@/features/amenities/amenities.functions'
import { AmenitiesPage } from '@/features/amenities/pages/AmenitiesPage'

export const Route = createFileRoute('/amenities')({
  loader: () => getAmenities(),
  component: AmenitiesRoute,
})

function AmenitiesRoute() {
  const amenities = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="amenities" />
      <AmenitiesPage amenities={amenities} />
      <SiteFooter />
    </main>
  )
}
