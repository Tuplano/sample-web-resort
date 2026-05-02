import { createFileRoute } from '@tanstack/react-router'

import { getDiningHighlights } from '@/features/dining/dining.functions'
import { DiningPage } from '@/features/dining/pages/DiningPage'

export const Route = createFileRoute('/dining/')({
  loader: () => getDiningHighlights(),
  component: DiningIndexRoute,
})

function DiningIndexRoute() {
  const { highlights } = Route.useLoaderData()

  return <DiningPage diningHighlights={highlights} />
}
