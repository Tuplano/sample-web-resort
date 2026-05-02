export interface Activity {
  id?: string
  name: string
  description: string
  category: string
  duration: string
  image: string
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface WeeklyActivity {
  id?: string
  day: string
  time: string
  name: string
  tone: 'blue' | 'green' | 'sand' | 'stone'
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}
