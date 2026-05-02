export interface Accommodation {
  id?: string
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
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}
