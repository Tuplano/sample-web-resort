export interface Accommodation {
  name: string
  description?: string
  image: string
  size: 'large' | 'compact'
  tags?: string[]
  guests?: string
  area?: string
  beds?: string
  price?: string
  priceSuffix?: string
  featured?: boolean
}
