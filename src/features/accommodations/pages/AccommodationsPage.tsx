import { useState } from 'react'

import type { Accommodation } from '@/types/home'
import { AccommodationListingCard } from '@/features/accommodations/components/AccommodationListingCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SortOption = 'featured' | 'name-asc' | 'price-low' | 'price-high'

function parsePrice(price?: string) {
  if (!price) {
    return Number.MAX_SAFE_INTEGER
  }

  const numericPrice = Number(price.replace(/[^0-9.]/g, ''))

  return Number.isFinite(numericPrice) ? numericPrice : Number.MAX_SAFE_INTEGER
}

export function AccommodationsPage({
  accommodations,
}: {
  accommodations: Accommodation[]
}) {
  const [selectedTag, setSelectedTag] = useState('All')
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const availableTags = [
    'All',
    ...new Set(
      accommodations.flatMap((accommodation) => accommodation.tags ?? []),
    ),
  ]

  const filteredAccommodations = accommodations.filter((accommodation) =>
    selectedTag === 'All'
      ? true
      : (accommodation.tags ?? []).includes(selectedTag),
  )

  const sortedAccommodations = [...filteredAccommodations].sort((left, right) => {
    if (sortBy === 'name-asc') {
      return left.name.localeCompare(right.name)
    }

    if (sortBy === 'price-low') {
      return parsePrice(left.price) - parsePrice(right.price)
    }

    if (sortBy === 'price-high') {
      return parsePrice(right.price) - parsePrice(left.price)
    }

    const leftOrder = left.sortOrder ?? Number.MAX_SAFE_INTEGER
    const rightOrder = right.sortOrder ?? Number.MAX_SAFE_INTEGER

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder
    }

    if (Boolean(left.featured) !== Boolean(right.featured)) {
      return left.featured ? -1 : 1
    }

    return left.name.localeCompare(right.name)
  })

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
            {availableTags.map((filter) => (
              <button
                className={`h-7 rounded-full border px-4 text-[11px] transition-colors ${
                  selectedTag === filter
                    ? 'border-[#07342f] bg-[#07342f] text-white'
                    : 'border-[#9ca59e] bg-transparent text-[#24302a] hover:border-[#07342f] hover:bg-[#07342f] hover:text-white'
                }`}
                key={filter}
                onClick={() => setSelectedTag(filter)}
                type="button"
              >
                {filter === 'All' ? 'All Accommodations' : filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-[11px] uppercase text-[#3d453f]">Sort By:</span>
            <Select
              onValueChange={(value) => setSortBy(value as SortOption)}
              value={sortBy}
            >
              <SelectTrigger className="w-[170px] border-[#c9c3b7] bg-[#fffdf8] text-[#1b211d]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured order</SelectItem>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price low to high</SelectItem>
                <SelectItem value="price-high">Price high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {sortedAccommodations.map((accommodation) => (
            <AccommodationListingCard
              accommodation={accommodation}
              key={accommodation.id ?? accommodation.name}
            />
          ))}
        </div>
        {sortedAccommodations.length === 0 ? (
          <div className="border border-dashed border-[#d8d3c8] bg-[#fbfaf7] px-6 py-12 text-center text-[13px] text-[#626962]">
            No accommodations match this filter yet.
          </div>
        ) : null}
      </section>

    </>
  )
}
