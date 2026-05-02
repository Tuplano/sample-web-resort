import { createServerFn } from '@tanstack/react-start'

import { adminContentSchema } from '@/features/admin/content.schemas'

async function loadAdminContent() {
  const [
    { listAccommodations },
    { listAmenities },
    { getActivitiesContent },
    { getDiningPageContent, getDiningMenuContent },
  ] = await Promise.all([
    import('@/features/accommodations/accommodations.server'),
    import('@/features/amenities/amenities.server'),
    import('@/features/activities/activities.server'),
    import('@/features/dining/dining.server'),
  ])

  const [accommodations, amenities, activitiesContent, diningContent, diningMenu] =
    await Promise.all([
      listAccommodations(),
      listAmenities(),
      getActivitiesContent(),
      getDiningPageContent(),
      getDiningMenuContent(),
    ])

  return {
    accommodations,
    amenities,
    activities: activitiesContent.activities,
    weeklyActivities: activitiesContent.weeklyActivities,
    diningHighlights: diningContent.highlights,
    menuItems: diningMenu.menuItems,
  }
}

export const getAdminContent = createServerFn({ method: 'GET' }).handler(
  async () => loadAdminContent(),
)

export const saveAdminContent = createServerFn({ method: 'POST' })
  .inputValidator(adminContentSchema)
  .handler(async ({ data }) => {
    const [
      { replaceAccommodations },
      { replaceAmenities },
      { replaceActivitiesContent },
      { replaceDiningContent },
    ] = await Promise.all([
      import('@/features/accommodations/accommodations.server'),
      import('@/features/amenities/amenities.server'),
      import('@/features/activities/activities.server'),
      import('@/features/dining/dining.server'),
    ])

    await Promise.all([
      replaceAccommodations(data.accommodations),
      replaceAmenities(data.amenities),
      replaceActivitiesContent({
        activities: data.activities,
        weeklyActivities: data.weeklyActivities,
      }),
      replaceDiningContent({
        highlights: data.diningHighlights,
        menuItems: data.menuItems,
      }),
    ])

    return loadAdminContent()
  })
