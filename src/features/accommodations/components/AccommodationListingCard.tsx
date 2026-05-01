import { ArrowUpRight, BedDouble, Ruler, Users } from 'lucide-react'

import type { Accommodation } from '@/types/home'

export function AccommodationListingCard({
  accommodation,
}: {
  accommodation: Accommodation
}) {
  if (accommodation.featured) {
    return <FeaturedAccommodationCard accommodation={accommodation} />
  }

  return (
    <article className="overflow-hidden rounded-[8px] border border-[#dfddd5] bg-[#fffdf8]">
      <img
        alt=""
        className="aspect-[1.65/1] w-full object-cover"
        src={accommodation.image}
      />
      <div className="p-8">
        <TagList tags={accommodation.tags ?? []} />
        <h2 className="mt-5 font-serif text-[30px] leading-tight text-[#1b211d]">
          {accommodation.name}
        </h2>
        <p className="mt-5 min-h-[66px] text-[13px] leading-6 text-[#626962]">
          {accommodation.description}
        </p>
        <AmenityRow accommodation={accommodation} className="mt-7" />
      </div>
      <div className="flex items-end justify-between border-t border-[#e6e3dc] px-8 py-6">
        <p className="font-serif text-[30px] leading-none text-[#111713]">
          {accommodation.price}
          <span className="font-sans text-[14px] text-[#3d453f]">
            {accommodation.priceSuffix}
          </span>
        </p>
        <a
          className="inline-flex h-8 items-center justify-center rounded-full border border-[#8d9890] px-6 text-[11px] text-[#20302a] transition-colors hover:border-[#07342f] hover:bg-[#07342f] hover:text-white"
          href="#booking"
        >
          Book Now
        </a>
      </div>
    </article>
  )
}

function FeaturedAccommodationCard({ accommodation }: { accommodation: Accommodation }) {
  return (
    <article className="grid overflow-hidden rounded-[8px] border border-[#dfddd5] bg-[#fffdf8] lg:grid-cols-[2fr_1fr]">
      <img
        alt=""
        className="h-full min-h-[360px] w-full object-cover"
        src={accommodation.image}
      />
      <div className="flex flex-col p-8 lg:p-10">
        <TagList tags={accommodation.tags ?? []} />
        <h2 className="mt-5 font-serif text-[42px] leading-[0.98] text-[#1b211d]">
          {accommodation.name}
        </h2>
        <p className="mt-8 text-[13px] leading-6 text-[#626962]">
          {accommodation.description}
        </p>
        <AmenityRow accommodation={accommodation} className="mt-9" />
        <div className="mt-8 border-t border-[#e6e3dc] pt-7">
          <p className="text-[12px] text-[#626962]">Starting from</p>
          <div className="mt-1 flex items-end justify-between gap-6">
            <p className="font-serif text-[34px] leading-none text-[#111713]">
              {accommodation.price}
              <span className="block font-sans text-[25px]">
                {accommodation.priceSuffix}
              </span>
            </p>
            <a
              className="inline-flex size-[58px] items-center justify-center rounded-full bg-[#07342f] text-center text-[10px] font-semibold leading-3 text-white transition-colors hover:bg-[#0e433c]"
              href="#booking"
            >
              Book
              <br />
              Now
            </a>
          </div>
        </div>
      </div>
    </article>
  )
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
  return (
    <article className="overflow-hidden rounded-[8px] border border-[#dfddd5] bg-[#fffdf8]">
      <img
        alt=""
        className="aspect-[2.15/1] w-full object-cover"
        src={accommodation.image}
      />
      <div className="p-7">
        <h2 className="font-serif text-[24px] leading-tight text-[#1b211d]">
          {accommodation.name}
        </h2>
        <p className="mt-5 min-h-[58px] text-[13px] leading-6 text-[#626962]">
          {accommodation.description}
        </p>
        <div className="mt-7 flex items-end justify-between gap-5">
          <p className="font-serif text-[22px] leading-none text-[#111713]">
            {accommodation.price}
            <span className="font-sans text-[12px] text-[#3d453f]">
              {accommodation.priceSuffix}
            </span>
          </p>
          <a
            className="inline-flex items-center gap-2 text-[11px] text-[#20302a] transition-colors hover:text-[#07342f]"
            href="#booking"
          >
            Book Now
            <ArrowUpRight aria-hidden="true" size={13} strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </article>
  )
}
