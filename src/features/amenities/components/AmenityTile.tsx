import type { Amenity } from '@/types/amenities'

export function AmenityTile({ amenity }: { amenity: Amenity }) {
  const tileClassName =
    amenity.layout === 'wide-full'
      ? 'lg:col-span-3'
      : amenity.layout === 'wide'
        ? 'lg:col-span-2'
      : amenity.layout === 'tall'
        ? 'lg:row-span-2'
        : ''

  const tileHeightClassName =
    amenity.layout === 'tall'
      ? 'min-h-[680px] lg:h-full'
      : amenity.layout === 'wide-full'
        ? 'min-h-[440px] lg:h-[440px]'
        : 'min-h-[360px] lg:h-[360px]'

  return (
    <article
      className={`group relative overflow-hidden rounded-[8px] bg-[#18322d] text-white ${tileClassName} ${tileHeightClassName}`}
    >
      <img
        alt=""
        className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-95"
        src={amenity.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061c18]/78 via-[#061c18]/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-10 lg:p-11">
        <span className="inline-flex rounded-full bg-white/90 px-4 py-1 text-[12px] text-[#18322d]">
          {amenity.category}
        </span>
        <h2 className="mt-5 font-serif text-[30px] leading-tight md:text-[38px]">
          {amenity.name}
        </h2>
        <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/95">
          {amenity.description}
        </p>
      </div>
    </article>
  )
}
