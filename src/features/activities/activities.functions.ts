import { createServerFn } from '@tanstack/react-start'

export const getActivities = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { getActivitiesContent } = await import(
      '@/features/activities/activities.server'
    )

    return getActivitiesContent()
  },
)
