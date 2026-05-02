export interface Amenity {
  id?: string
  name: string
  description: string
  category: string
  image: string
  layout: 'wide' | 'tall' | 'standard'
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}
