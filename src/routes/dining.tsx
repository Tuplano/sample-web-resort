import { Outlet, createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export const Route = createFileRoute('/dining')({
  component: DiningRoute,
})

function DiningRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="dining" />
      <Outlet />
      <SiteFooter />
    </main>
  )
}
