import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ReservationPage } from '@/features/reservation/pages/ReservationPage'

export const Route = createFileRoute('/reservation')({
  component: ReservationRoute,
})

function ReservationRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader />
      <ReservationPage />
      <SiteFooter />
    </main>
  )
}
