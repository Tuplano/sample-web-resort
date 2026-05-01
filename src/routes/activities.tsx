import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ActivitiesPage } from '@/features/activities/pages/ActivitiesPage'

export const Route = createFileRoute('/activities')({
  component: ActivitiesRoute,
})

function ActivitiesRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="activities" />
      <ActivitiesPage />
      <SiteFooter />
    </main>
  )
}
