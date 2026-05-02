import { z } from 'zod'

export const activityInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z.string().trim().min(1, 'Description is required'),
  category: z.string().trim().min(1, 'Category is required'),
  duration: z.string().trim().min(1, 'Duration is required'),
  image: z.url('Image must be a valid URL'),
  sortOrder: z.number().int().nonnegative().optional(),
})

export const weeklyActivityInputSchema = z.object({
  day: z.string().trim().min(1, 'Day is required'),
  time: z.string().trim().min(1, 'Time is required'),
  name: z.string().trim().min(1, 'Name is required'),
  tone: z.enum(['blue', 'green', 'sand', 'stone']),
  sortOrder: z.number().int().nonnegative().optional(),
})

export type ActivityInput = z.infer<typeof activityInputSchema>
export type WeeklyActivityInput = z.infer<typeof weeklyActivityInputSchema>
