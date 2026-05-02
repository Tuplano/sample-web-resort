import { ChevronDown } from 'lucide-react'

import type { Accommodation } from '@/types/home'
import {
  AccommodationListingCard,
  CompactAccommodationCard,
} from '@/features/accommodations/components/AccommodationListingCard'

export function AccommodationsPage({
  accommodations,
}: {
  accommodations: Accommodation[]
}) {
  const featuredAccommodation = accommodations.find(
    (accommodation) => accommodation.featured,
  )
  const standardAccommodations = accommodations.filter(
    (accommodation) => !accommodation.featured,
  )
  const primaryAccommodations = standardAccommodations.slice(0, 2)
  const compactAccommodations = standardAccommodations.slice(2)

  return (
    <>
      <section className="px-6 pb-12 pt-20 text-center md:px-10 lg:pt-24">
        <h1 className="font-serif text-[46px] leading-none md:text-[62px]">
          Sanctuaries of Serenity
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-[#4f5751]">
          Discover our thoughtfully curated spaces, designed to blend seamless
          luxury with the natural beauty of the coast. Each accommodation offers
          a private retreat for restoration and relaxation.
        </p>
      </section>

      <section className="px-6 md:px-10" aria-label="Accommodation filters">
        <div className="flex flex-col gap-5 border-b border-[#dfddd5] pb-9 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex flex-wrap gap-3">
            {['All Accommodations', 'Ocean View', 'Garden View'].map((filter) => (
              <button
                className="h-7 rounded-full border border-[#9ca59e] bg-transparent px-4 text-[11px] text-[#24302a] transition-colors hover:border-[#07342f] hover:bg-[#07342f] hover:text-white"
                key={filter}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <button
            className="inline-flex h-8 items-center gap-4 self-start text-[11px] uppercase text-[#3d453f] md:self-auto"
            type="button"
          >
            Sort By:
            <span className="normal-case text-[#1b211d]">Featured</span>
            <ChevronDown aria-hidden="true" size={14} strokeWidth={1.7} />
          </button>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-20 lg:py-20">
        {featuredAccommodation ? (
          <AccommodationListingCard accommodation={featuredAccommodation} />
        ) : null}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {primaryAccommodations.map((accommodation) => (
            <AccommodationListingCard
              accommodation={accommodation}
              key={accommodation.name}
            />
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {compactAccommodations.map((accommodation) => (
            <CompactAccommodationCard
              accommodation={accommodation}
              key={accommodation.name}
            />
          ))}
        </div>
      </section>

    </>
  )
}
