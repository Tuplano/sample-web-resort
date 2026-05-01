import { createFileRoute } from '@tanstack/react-router'

import { DiningPage } from '@/features/dining/pages/DiningPage'

export const Route = createFileRoute('/dining/')({
  component: DiningIndexRoute,
})

function DiningIndexRoute() {
  return <DiningPage />
}
