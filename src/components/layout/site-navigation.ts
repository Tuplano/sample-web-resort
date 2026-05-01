export type SiteNavKey =
  | 'home'
  | 'accommodations'
  | 'amenities'
  | 'activities'
  | 'gallery'
  | 'dining'

export const siteNavigationItems: Array<{
  key: SiteNavKey
  label: string
  href: string
}> = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'accommodations', label: 'Accommodations', href: '/accommodations' },
  { key: 'amenities', label: 'Amenities', href: '/amenities' },
  { key: 'activities', label: 'Activities', href: '/activities' },
  { key: 'gallery', label: 'Gallery', href: '/#gallery' },
  { key: 'dining', label: 'Dining', href: '/#dining' },
]
