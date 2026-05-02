import { z } from 'zod'

import { accommodationInputSchema } from '@/features/accommodations/accommodations.schemas'
import { activityInputSchema, weeklyActivityInputSchema } from '@/features/activities/activities.schemas'
import { amenityInputSchema } from '@/features/amenities/amenities.schemas'
import { diningHighlightInputSchema, menuItemInputSchema } from '@/features/dining/dining.schemas'

export const adminContentSchema = z.object({
  accommodations: z.array(accommodationInputSchema),
  amenities: z.array(amenityInputSchema),
  activities: z.array(activityInputSchema),
  weeklyActivities: z.array(weeklyActivityInputSchema),
  diningHighlights: z.array(diningHighlightInputSchema),
  menuItems: z.array(menuItemInputSchema),
})

export type AdminContentInput = z.infer<typeof adminContentSchema>
