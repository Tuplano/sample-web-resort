import type { Accommodation } from '@/types/home'

export const accommodationSeed: Accommodation[] = [
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
    sortOrder: 1,
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
    sortOrder: 2,
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
    sortOrder: 3,
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
    sortOrder: 4,
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
    sortOrder: 5,
  },
]
