import { createFileRoute } from '@tanstack/react-router'

import { DiningMenuPage } from '@/features/dining/pages/DiningMenuPage'

export const Route = createFileRoute('/dining/menu')({
  component: DiningMenuRoute,
})

function DiningMenuRoute() {
  return <DiningMenuPage />
}
