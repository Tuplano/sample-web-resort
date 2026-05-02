import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getActivities } from '@/features/activities/activities.functions'
import { ActivitiesPage } from '@/features/activities/pages/ActivitiesPage'

export const Route = createFileRoute('/activities')({
  loader: () => getActivities(),
  component: ActivitiesRoute,
})

function ActivitiesRoute() {
  const { activities, weeklyActivities } = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="activities" />
      <ActivitiesPage
        activities={activities}
        weeklyActivities={weeklyActivities}
      />
      <SiteFooter />
    </main>
  )
}
