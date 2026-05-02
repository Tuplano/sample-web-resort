import type { Activity, WeeklyActivity } from '@/types/activities'

export const activityFilters = [
  'All Activities',
  'Water Sports',
  'Land Adventures',
  'Cultural Tours',
  'Wellness',
] as const

export const activitiesSeed: Activity[] = [
  {
    name: 'Guided Reef Snorkeling',
    description:
      'Explore the vibrant biodiversity of our private house reef with expert marine biologists.',
    category: 'Water',
    duration: '3 Hours',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=84',
    sortOrder: 1,
  },
  {
    name: 'Sunset Yacht Charter',
    description:
      'A private sailing experience complete with champagne and chef-prepared hors d’oeuvres.',
    category: 'Leisure',
    duration: '4 Hours',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84',
    sortOrder: 2,
  },
  {
    name: 'Island Hiking Trails',
    description:
      'Discover hidden waterfalls and panoramic vistas on a guided trek through the island interior.',
    category: 'Land',
    duration: 'Half Day',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=84',
    sortOrder: 3,
  },
]

export const weeklyActivitiesSeed: WeeklyActivity[] = [
  { day: 'Mon', time: '07:00 AM', name: 'Sunrise Yoga', tone: 'blue', sortOrder: 1 },
  { day: 'Tue', time: '10:00 AM', name: 'Coral Planting', tone: 'green', sortOrder: 2 },
  { day: 'Wed', time: '07:00 AM', name: 'Sunrise Yoga', tone: 'blue', sortOrder: 3 },
  { day: 'Thu', time: '04:00 PM', name: 'Sunset Tai Chi', tone: 'sand', sortOrder: 4 },
  { day: 'Fri', time: '07:00 AM', name: 'Sunrise Yoga', tone: 'blue', sortOrder: 5 },
  { day: 'Sat', time: '11:00 AM', name: 'Beach Bonfire', tone: 'stone', sortOrder: 6 },
  { day: 'Sun', time: '06:00 PM', name: 'Guided Meditation', tone: 'blue', sortOrder: 7 },
]
