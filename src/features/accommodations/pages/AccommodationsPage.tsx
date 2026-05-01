import { ChevronDown } from 'lucide-react'

import type { Accommodation } from '@/types/home'
import {
  AccommodationListingCard,
  CompactAccommodationCard,
} from '@/features/accommodations/components/AccommodationListingCard'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Dining', href: '/#dining' },
]

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
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <header className="flex h-[72px] items-center border-b border-[#e5e2da] bg-[#fbfaf6] px-6 md:px-10">
        <a className="font-serif text-[13px] tracking-[0.24em]" href="/">
          LUMINA COAST
        </a>
        <nav className="mx-auto hidden items-center gap-9 text-[12px] text-[#48514b] md:flex">
          {navigationItems.map((item) => (
            <a
              className={`border-b py-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d] ${
                item.label === 'Accommodations'
                  ? 'border-[#1b211d] text-[#1b211d]'
                  : 'border-transparent'
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="ml-auto inline-flex h-8 items-center justify-center rounded-full bg-[#07342f] px-5 text-[10px] font-semibold text-white transition-colors hover:bg-[#0e433c] md:ml-0"
          href="#booking"
        >
          Book Now
        </a>
      </header>

      <section className="px-6 pb-14 pt-28 text-center md:px-10">
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
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 border-b border-[#dfddd5] pb-9 md:flex-row md:items-center md:justify-between">
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

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
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

      <footer className="mt-24 border-t border-[#e1dfd7] bg-[#fbfaf7]" id="booking">
        <div className="grid gap-12 px-6 py-20 md:grid-cols-[1.4fr_0.7fr_0.7fr] md:px-10 lg:px-20">
          <div>
            <h2 className="font-serif text-[13px] tracking-[0.18em]">LUMINA COAST</h2>
            <p className="mt-7 max-w-[340px] text-[13px] leading-7 text-[#697069]">
              A coastal sanctuary dedicated to refined relaxation, understated
              luxury, and the restorative power of nature.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold">Explore</h3>
            <div className="mt-6 flex flex-col gap-4 text-[13px] text-[#525a54]">
              {['About', 'Contact', 'Careers'].map((link) => (
                <a className="transition-colors hover:text-[#1b211d]" href="/" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold">Legal</h3>
            <div className="mt-6 flex flex-col gap-4 text-[13px] text-[#525a54]">
              {['Privacy Policy', 'Sustainability'].map((link) => (
                <a className="transition-colors hover:text-[#1b211d]" href="/" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-[#e1dfd7] px-6 py-8 text-center text-[10px] uppercase text-[#767c75]">
          © 2024 Lumina Coast Resort &amp; Spa. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
