import { ArrowUpRight } from 'lucide-react'

import type { Accommodation } from '@/types/home'

export function AccommodationCard({ accommodation }: { accommodation: Accommodation }) {
  const isLarge = accommodation.size === 'large'

  return (
    <article className="group relative min-h-[220px] overflow-hidden rounded-[8px] bg-[#1b211d] text-white lg:min-h-[320px]">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-95"
        src={accommodation.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-end p-7 lg:min-h-[320px]">
        <h3 className="font-serif text-[28px] leading-tight">{accommodation.name}</h3>
        {isLarge && accommodation.description ? (
          <p className="mt-2 max-w-md text-[13px] leading-5 text-white/95">
            {accommodation.description}
          </p>
        ) : null}
      </div>
      {isLarge ? (
        <a
          aria-label="View Ocean View Suite"
          className="absolute bottom-7 right-7 inline-flex size-11 items-center justify-center rounded-full bg-white/35 text-white backdrop-blur-sm transition-colors hover:bg-white/45"
          href="#booking"
        >
          <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
        </a>
      ) : null}
    </article>
  )
}
