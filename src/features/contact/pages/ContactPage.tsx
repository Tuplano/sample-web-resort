import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import type { FaqItem } from '@/types/contact'
import { ContactSection } from '@/features/contact/components/ContactSection'
import { FaqList } from '@/features/contact/components/FaqList'

const faqItems: FaqItem[] = [
  { question: 'What time is check-in and check-out?' },
  { question: 'Is transportation provided from the airport?' },
  { question: 'Do I need to book spa treatments in advance?' },
]

export function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader />
      <ContactSection />
      <FaqList items={faqItems} />
      <SiteFooter />
    </main>
  )
}
