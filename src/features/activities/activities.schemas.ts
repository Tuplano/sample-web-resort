import { z } from 'zod'

export const weeklyActivityDays = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
] as const

export const activityInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z.string().trim().min(1, 'Description is required'),
  category: z.string().trim().min(1, 'Category is required'),
  duration: z.string().trim().min(1, 'Duration is required'),
  image: z.url('Image must be a valid URL'),
  sortOrder: z.number().int().nonnegative().optional(),
})

export const weeklyActivityInputSchema = z.object({
  day: z.enum(weeklyActivityDays),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must use HH:MM'),
  name: z.string().trim().min(1, 'Name is required'),
  tone: z.enum(['blue', 'green', 'sand', 'stone']),
})

export type ActivityInput = z.infer<typeof activityInputSchema>
export type WeeklyActivityInput = z.infer<typeof weeklyActivityInputSchema>
