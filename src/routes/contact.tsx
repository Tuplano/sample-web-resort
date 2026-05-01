import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { ContactPage } from '@/features/contact/pages/ContactPage'

export const Route = createFileRoute('/contact')({
  component: ContactRoute,
})

function ContactRoute() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader />
      <ContactPage />
      <SiteFooter />
    </main>
  )
}
