export type WeeklyActivityDay =
  | 'Mon'
  | 'Tue'
  | 'Wed'
  | 'Thu'
  | 'Fri'
  | 'Sat'
  | 'Sun'

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
  day: WeeklyActivityDay
  time: string
  name: string
  tone: 'blue' | 'green' | 'sand' | 'stone'
  createdAt?: string
  updatedAt?: string
}
