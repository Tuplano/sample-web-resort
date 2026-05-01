import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { GalleryPage } from '@/features/gallery/pages/GalleryPage'

export const Route = createFileRoute('/gallery')({
  component: GalleryRoute,
})

function GalleryRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="gallery" />
      <GalleryPage />
      <SiteFooter />
    </main>
  )
}
