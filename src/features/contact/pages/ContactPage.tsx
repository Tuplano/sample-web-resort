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
    <>
      <ContactSection />
      <FaqList items={faqItems} />
    </>
  )
}
