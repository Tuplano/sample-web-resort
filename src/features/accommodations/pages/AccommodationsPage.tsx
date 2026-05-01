import { ChevronDown } from 'lucide-react'

import type { Accommodation } from '@/types/home'
import {
  AccommodationListingCard,
  CompactAccommodationCard,
} from '@/features/accommodations/components/AccommodationListingCard'

const accommodations: Accommodation[] = [
  {
    name: 'Ocean View Suite',
    description:
      'A sprawling sanctuary featuring panoramic vistas of the coastline. Experience ultimate comfort with a separate living area, deep soaking tub, and a private furnished balcony to watch the sunset.',
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1500&q=84',
    size: 'large',
    tags: ['Ocean View', 'Suite'],
    guests: 'Up to 3 Guests',
    area: '850 sq ft',
    beds: '1 King Bed',
    price: '$1,200',
    priceSuffix: '/night',
    featured: true,
  },
  {
    name: 'Private Pool Villa',
    description:
      'The epitome of seclusion. This detached villa offers absolute privacy with its own infinity plunge pool, lush courtyard garden, and dedicated butler service.',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1100&q=84',
    size: 'compact',
    tags: ['Premium', 'Villa'],
    guests: '2 Guests',
    area: '1,200 sq ft',
    price: '$2,500',
    priceSuffix: '/nt',
  },
  {
    name: 'Family Villa',
    description:
      'Generous space designed for connection. Features two distinct bedrooms, a large shared living area, and a private terrace opening directly into our botanical gardens.',
    image:
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1100&q=84',
    size: 'compact',
    tags: ['Garden View', 'Villa'],
    guests: 'Up to 5 Guests',
    area: '1,050 sq ft',
    price: '$800',
    priceSuffix: '/nt',
  },
  {
    name: 'Deluxe Room',
    description:
      'Elevated comfort with partial ocean views from a private balcony, featuring bespoke furnishings and a spa-like bathroom.',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=84',
    size: 'compact',
    price: '$450',
    priceSuffix: '/nt',
  },
  {
    name: 'Standard Room',
    description:
      'A beautifully appointed retreat offering tranquil garden views, premium linens, and all essential modern amenities for a restorative stay.',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=84',
    size: 'compact',
    price: '$250',
    priceSuffix: '/nt',
  },
]

export function AccommodationsPage() {
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
