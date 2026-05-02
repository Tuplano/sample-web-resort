import { z } from 'zod'

export const diningHighlightInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z.string().trim().min(1, 'Description is required'),
  label: z.string().trim().min(1, 'Label is required'),
  sortOrder: z.number().int().nonnegative().optional(),
})

export const menuItemInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  price: z.number().nonnegative(),
  description: z.string().trim().min(1, 'Description is required'),
  category: z.enum(['appetizers', 'mains', 'desserts']),
  sortOrder: z.number().int().nonnegative().optional(),
})

export type DiningHighlightInput = z.infer<typeof diningHighlightInputSchema>
export type MenuItemInput = z.infer<typeof menuItemInputSchema>
