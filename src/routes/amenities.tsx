import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { AmenitiesPage } from '@/features/amenities/pages/AmenitiesPage'

export const Route = createFileRoute('/amenities')({
  component: AmenitiesRoute,
})

function AmenitiesRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="amenities" />
      <AmenitiesPage />
      <SiteFooter />
    </main>
  )
}
