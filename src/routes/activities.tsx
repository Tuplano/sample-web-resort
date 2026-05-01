import { createFileRoute } from '@tanstack/react-router'

import { ActivitiesPage } from '@/features/activities/pages/ActivitiesPage'

export const Route = createFileRoute('/activities')({
  component: ActivitiesRoute,
})

function ActivitiesRoute() {
  return <ActivitiesPage />
}
