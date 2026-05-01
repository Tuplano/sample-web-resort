import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { AccommodationsPage } from '@/features/accommodations/pages/AccommodationsPage'

export const Route = createFileRoute('/accommodations')({
  component: AccommodationsRoute,
})

function AccommodationsRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="accommodations" />
      <AccommodationsPage />
      <SiteFooter />
    </main>
  )
}
