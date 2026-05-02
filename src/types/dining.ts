export interface DiningHighlight {
  id?: string
  name: string
  description: string
  label: string
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface MenuItem {
  id?: string
  name: string
  price: number
  description: string
  category: 'appetizers' | 'mains' | 'desserts'
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}
