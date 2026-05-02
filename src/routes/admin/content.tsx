import { createFileRoute } from '@tanstack/react-router'

import { getAdminContent } from '@/features/admin/content.functions'
import { ContentAdminPage } from '@/features/admin/pages/ContentAdminPage'

export const Route = createFileRoute('/admin/content')({
  loader: () => getAdminContent(),
  component: ContentAdminRoute,
})

function ContentAdminRoute() {
  const initialContent = Route.useLoaderData()

  return <ContentAdminPage initialContent={initialContent} />
}
