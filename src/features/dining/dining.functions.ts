import { createServerFn } from '@tanstack/react-start'

export const getDiningHighlights = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { getDiningPageContent } = await import('@/features/dining/dining.server')

    return getDiningPageContent()
  },
)

export const getDiningMenu = createServerFn({ method: 'GET' }).handler(
  async () => {
    const { getDiningMenuContent } = await import('@/features/dining/dining.server')

    return getDiningMenuContent()
  },
)
