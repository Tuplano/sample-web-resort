import { createFileRoute } from '@tanstack/react-router'

import { getDiningMenu } from '@/features/dining/dining.functions'
import { DiningMenuPage } from '@/features/dining/pages/DiningMenuPage'

export const Route = createFileRoute('/dining/menu')({
  loader: () => getDiningMenu(),
  component: DiningMenuRoute,
})

function DiningMenuRoute() {
  const { menuItems } = Route.useLoaderData()

  return <DiningMenuPage menuItems={menuItems} />
}
