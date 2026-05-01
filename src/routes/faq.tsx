import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { FaqPage } from '@/features/faq/pages/FaqPage'

export const Route = createFileRoute('/faq')({
  component: FaqRoute,
})

function FaqRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader />
      <FaqPage />
      <SiteFooter />
    </main>
  )
}
