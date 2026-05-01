import type { Amenity } from '@/types/amenities'

export function AmenityTile({ amenity }: { amenity: Amenity }) {
  const tileClassName =
    amenity.layout === 'wide'
      ? 'lg:col-span-2'
      : amenity.layout === 'tall'
        ? 'lg:row-span-2'
        : ''

  const imageClassName =
    amenity.layout === 'tall'
      ? 'min-h-[520px] lg:min-h-full'
      : amenity.layout === 'wide'
        ? 'min-h-[260px]'
        : 'min-h-[260px]'

  return (
    <article
      className={`group relative overflow-hidden rounded-[8px] bg-[#18322d] text-white ${tileClassName}`}
    >
      <img
        alt=""
        className={`h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-95 ${imageClassName}`}
        src={amenity.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061c18]/78 via-[#061c18]/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <span className="inline-flex rounded-full bg-white/90 px-4 py-1 text-[12px] text-[#18322d]">
          {amenity.category}
        </span>
        <h2 className="mt-5 font-serif text-[30px] leading-tight md:text-[38px]">
          {amenity.name}
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-7 text-white/95">
          {amenity.description}
        </p>
      </div>
    </article>
  )
}
