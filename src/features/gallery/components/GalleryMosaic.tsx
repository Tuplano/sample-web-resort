import type { GalleryImage } from '@/types/gallery'

export function GalleryMosaic({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <img
        alt={images[0]?.title ?? ''}
        className="h-full min-h-[420px] w-full rounded-[8px] object-cover"
        src={images[0]?.image}
      />
      <div className="grid gap-6">
        {images.slice(1, 3).map((image) => (
          <img
            alt={image.title}
            className="h-full min-h-[198px] w-full rounded-[8px] object-cover"
            key={image.title}
            src={image.image}
          />
        ))}
      </div>
      <img
        alt={images[3]?.title ?? ''}
        className="min-h-[220px] w-full rounded-[8px] object-cover"
        src={images[3]?.image}
      />
      <img
        alt={images[4]?.title ?? ''}
        className="min-h-[220px] w-full rounded-[8px] object-cover lg:col-span-1"
        src={images[4]?.image}
      />
    </div>
  )
}
