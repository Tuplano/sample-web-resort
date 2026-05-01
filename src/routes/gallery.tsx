import { createFileRoute } from '@tanstack/react-router'

import { GalleryPage } from '@/features/gallery/pages/GalleryPage'

export const Route = createFileRoute('/gallery')({
  component: GalleryRoute,
})

function GalleryRoute() {
  return <GalleryPage />
}
