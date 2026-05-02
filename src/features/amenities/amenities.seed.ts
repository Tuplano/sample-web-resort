import type { Amenity } from '@/types/amenities'

export const amenitiesSeed: Amenity[] = [
  {
    name: 'Cascading Infinity Pool',
    description:
      'Multi-tiered pools offering uninterrupted views of the coastline, complete with private cabanas and dedicated attendant service.',
    category: 'Poolside',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1500&q=84',
    layout: 'wide',
    sortOrder: 1,
  },
  {
    name: 'Private Beach',
    description:
      'Exclusive access to a secluded pristine coastline, outfitted with premium loungers and complimentary water service.',
    category: 'Beachfront',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=84',
    layout: 'tall',
    sortOrder: 2,
  },
  {
    name: 'State-of-the-Art Gym',
    description:
      'Light-filled training spaces with modern equipment and garden views for unhurried daily movement.',
    category: 'Wellness',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=84',
    layout: 'standard',
    sortOrder: 3,
  },
  {
    name: "Lumina Kids' Club",
    description:
      'Calm, imaginative spaces for younger guests, designed for creative play and attentive family care.',
    category: 'Family',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=84',
    layout: 'standard',
    sortOrder: 4,
  },
]
