import { z } from 'zod'

export const accommodationInputSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  description: z.string().trim().optional(),
  image: z.url('Image must be a valid URL'),
  size: z.enum(['large', 'compact']),
  tags: z.array(z.string().trim().min(1)).optional(),
  guests: z.string().trim().optional(),
  area: z.string().trim().optional(),
  beds: z.string().trim().optional(),
  price: z.string().trim().optional(),
  priceSuffix: z.string().trim().optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().nonnegative().optional(),
})

export const featuredAccommodationInputSchema = z.object({
  id: z.string().trim().min(1, 'Accommodation id is required'),
})

export type AccommodationInput = z.infer<typeof accommodationInputSchema>
