import type { GalleryImage } from '@/types/gallery'
import { GalleryExperience } from '@/features/gallery/components/GalleryExperience'

const galleryImages: {
  pool: GalleryImage
  dining: GalleryImage
  spa: GalleryImage
  artwork: GalleryImage
  beach: GalleryImage
  island: GalleryImage
} = {
  pool: {
    title: 'Infinity pool overlooking the ocean',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=84',
  },
  dining: {
    title: 'Oceanfront dining table at sunset',
    image:
      'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=900&q=84',
  },
  spa: {
    title: 'Warm spa bathroom with palms',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=84',
  },
  artwork: {
    title: 'Minimal coastal artwork above water',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84',
  },
  beach: {
    title: 'White sand beach and turquoise water',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1300&q=84',
  },
  island: {
    title: 'Aerial map view of Lumina Coast island',
    image:
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=84',
  },
}

export function GalleryPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-16 text-center md:px-10 lg:px-20 lg:pt-20">
        <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#5f675f]">
          Visual Journey
        </p>
        <h1 className="font-serif text-[46px] leading-none md:text-[62px]">
          The Lumina Experience
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-[#4f5751]">
          Step into our sanctuary through a curated visual narrative of
          tranquility, coastal elegance, and restored wonder.
        </p>
      </section>

      <GalleryExperience images={galleryImages} />
    </>
  )
}
