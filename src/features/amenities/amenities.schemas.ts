import { z } from 'zod'

export const amenityInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z.string().trim().min(1, 'Description is required'),
  category: z.string().trim().min(1, 'Category is required'),
  image: z.url('Image must be a valid URL'),
  layout: z.enum(['wide', 'wide-full', 'tall', 'standard']),
  sortOrder: z.number().int().nonnegative().optional(),
})

export type AmenityInput = z.infer<typeof amenityInputSchema>
