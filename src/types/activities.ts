export interface Activity {
  name: string
  description: string
  category: string
  duration: string
  image: string
}

export interface WeeklyActivity {
  day: string
  time: string
  name: string
  tone: 'blue' | 'green' | 'sand' | 'stone'
}
