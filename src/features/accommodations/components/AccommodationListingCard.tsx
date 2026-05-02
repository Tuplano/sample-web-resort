import { ArrowUpRight, BedDouble, Ruler, Users } from 'lucide-react'

import type { Accommodation } from '@/types/home'

export function AccommodationListingCard({
  accommodation,
}: {
  accommodation: Accommodation
}) {
  return <StandardAccommodationCard accommodation={accommodation} />
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          className="rounded-full bg-[#e6e7df] px-3 py-1 text-[10px] text-[#4f5b54]"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function AmenityRow({
  accommodation,
  className,
}: {
  accommodation: Accommodation
  className?: string
}) {
  const amenities = [
    { icon: Users, label: accommodation.guests },
    { icon: Ruler, label: accommodation.area },
    { icon: BedDouble, label: accommodation.beds },
  ].filter((amenity) => Boolean(amenity.label))

  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-[#48514b] ${className ?? ''}`}>
      {amenities.map(({ icon: Icon, label }) => (
        <span className="inline-flex items-center gap-2" key={label}>
          <Icon aria-hidden="true" size={14} strokeWidth={1.7} />
          {label}
        </span>
      ))}
    </div>
  )
}

export function CompactAccommodationCard({
  accommodation,
}: {
  accommodation: Accommodation
}) {
  return <StandardAccommodationCard accommodation={accommodation} />
}

function StandardAccommodationCard({
  accommodation,
}: {
  accommodation: Accommodation
}) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-[#dfddd5] bg-[#fffdf8]">
      <img
        alt=""
        className="aspect-[1.65/1] w-full object-cover"
        src={accommodation.image}
      />
      <div className="flex flex-col">
        <CardBody
          accommodation={accommodation}
          descriptionClassName="min-h-[66px]"
          titleClassName="text-[30px]"
        />
        <CardFooter accommodation={accommodation} />
      </div>
    </article>
  )
}

function CardBody({
  accommodation,
  bodyClassName,
  descriptionClassName,
  titleClassName,
}: {
  accommodation: Accommodation
  bodyClassName?: string
  descriptionClassName?: string
  titleClassName?: string
}) {
  return (
    <div className={bodyClassName ?? 'p-8'}>
      <TagList tags={accommodation.tags ?? []} />
      <h2
        className={`mt-5 font-serif leading-tight text-[#1b211d] ${titleClassName ?? 'text-[30px]'}`}
      >
        {accommodation.name}
      </h2>
      <p
        className={`mt-5 text-[13px] leading-6 text-[#626962] ${descriptionClassName ?? ''}`}
      >
        {accommodation.description}
      </p>
      <AmenityRow accommodation={accommodation} className="mt-7" />
    </div>
  )
}

function CardFooter({
  accommodation,
  footerClassName,
  priceClassName,
  priceSuffixClassName,
}: {
  accommodation: Accommodation
  footerClassName?: string
  priceClassName?: string
  priceSuffixClassName?: string
}) {
  return (
    <div
      className={`flex items-end justify-between gap-5 border-t border-[#e6e3dc] ${footerClassName ?? 'px-8 py-6'}`}
    >
      <p
        className={`font-serif leading-none text-[#111713] ${priceClassName ?? 'text-[30px]'}`}
      >
        {accommodation.price}
        <span
          className={`font-sans text-[#3d453f] ${priceSuffixClassName ?? 'text-[14px]'}`}
        >
          {accommodation.priceSuffix}
        </span>
      </p>
      <a
        className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-[#8d9890] px-5 text-[11px] text-[#20302a] transition-colors hover:border-[#07342f] hover:bg-[#07342f] hover:text-white"
        href="#booking"
      >
        Book Now
        <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
      </a>
    </div>
  )
}
