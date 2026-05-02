import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { getAccommodations } from '@/features/accommodations/accommodations.functions'
import { HomePage } from '@/features/home/pages/HomePage'

export const Route = createFileRoute('/')({
  loader: () => getAccommodations(),
  component: Home,
})

function Home() {
  const accommodations = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="home" />
      <HomePage accommodations={accommodations} />
      <SiteFooter />
    </main>
  )
}
