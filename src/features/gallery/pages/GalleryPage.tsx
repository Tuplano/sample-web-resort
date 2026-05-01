import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import type { GalleryImage } from '@/types/gallery'
import { GalleryMosaic } from '@/features/gallery/components/GalleryMosaic'

const galleryImages: GalleryImage[] = [
  {
    title: 'Infinity pool overlooking the ocean',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=84',
    layout: 'large',
  },
  {
    title: 'Minimal coastal artwork above water',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84',
    layout: 'small',
  },
  {
    title: 'Warm spa bathroom with palms',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=84',
    layout: 'small',
  },
  {
    title: 'Oceanfront dining table at sunset',
    image:
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=900&q=84',
    layout: 'small',
  },
  {
    title: 'White sand beach and turquoise water',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=84',
    layout: 'wide',
  },
]

export function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="gallery" />

      <section className="px-6 pb-16 pt-20 text-center md:px-10 lg:px-20 lg:pt-24">
        <h1 className="font-serif text-[46px] leading-none md:text-[62px]">
          A Glimpse of Serenity
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-[#4f5751]">
          Immerse yourself in the understated luxury of Lumina Coast. Every space
          is thoughtfully designed to harmonize with the coastal environment,
          offering a sanctuary of calm and restoration.
        </p>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-20 lg:pb-24">
        <GalleryMosaic images={galleryImages} />
      </section>

      <SiteFooter />
    </main>
  )
}
