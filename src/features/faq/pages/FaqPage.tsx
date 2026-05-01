import type { FaqSection } from '@/types/faq'
import { FaqAccordion } from '@/features/faq/components/FaqAccordion'

const categories = ['Reservations', 'Amenities', 'Transportation', 'Spa & Wellness']

const faqSections: FaqSection[] = [
  {
    title: 'Reservations',
    items: [
      {
        question: 'What time is check-in and check-out?',
        answer:
          'Check-in is available from 3:00 PM onwards, and we request that guests check out by 11:00 AM. Early check-in or late check-out may be available upon request and is subject to availability.',
      },
      {
        question: 'What is your cancellation policy?',
      },
    ],
  },
  {
    title: 'Transportation',
    items: [
      {
        question: 'Is airport transportation provided?',
        answer:
          'Yes, Lumina Coast offers complimentary luxury shuttle service from the International Airport for all guests. Private chauffeur services are also available for an additional fee. Please contact our concierge at least 48 hours before arrival to arrange your pickup.',
      },
      {
        question: 'Do you offer on-site parking?',
      },
    ],
  },
  {
    title: 'Amenities & Spa',
    items: [
      {
        question: 'Do I need to book spa treatments in advance?',
        answer:
          'To ensure you receive your preferred time and therapist, we highly recommend booking spa treatments at least 24 hours in advance. Weekend appointments tend to fill up quickly.',
      },
      {
        question: 'What are the gym hours?',
      },
    ],
  },
]

export function FaqPage() {
  return (
    <>
      <section
        className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 37, 32, 0.18), rgba(18, 37, 32, 0.44)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=84')",
        }}
      >
        <div className="max-w-3xl">
          <p className="font-serif text-[15px]">Guest Information &amp; FAQ</p>
          <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-6 text-white/95">
            Everything you need to know for a seamless and restorative stay at
            Lumina Coast Resort &amp; Spa.
          </p>
        </div>
      </section>

      <section className="grid gap-12 px-6 py-20 md:px-10 lg:grid-cols-[230px_1fr] lg:px-20 lg:py-24">
        <aside>
          <h2 className="text-[11px] uppercase tracking-[0.12em] text-[#626962]">
            Categories
          </h2>
          <nav className="mt-7 flex gap-3 overflow-x-auto lg:block lg:space-y-4">
            {categories.map((category, index) => (
              <a
                className={`flex h-11 min-w-max items-center justify-between rounded-[6px] px-4 text-[12px] transition-colors lg:w-full ${
                  index === 0
                    ? 'bg-[#07342f] text-white'
                    : 'text-[#626962] hover:bg-[#efede7] hover:text-[#1b211d]'
                }`}
                href={`#${category.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`}
                key={category}
              >
                {category}
                {index === 0 ? <span aria-hidden="true">→</span> : null}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-16">
          {faqSections.map((section) => (
            <section
              id={section.title.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}
              key={section.title}
            >
              <h2 className="border-b border-[#d8d4ca] pb-5 font-serif text-[18px]">
                {section.title}
              </h2>
              <div className="mt-7">
                <FaqAccordion items={section.items} />
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_85%_50%,rgba(198,229,213,0.55),transparent_28%),#efede7] px-6 py-24 text-center md:px-10 lg:px-20">
        <h2 className="font-serif text-[18px]">Still have questions?</h2>
        <p className="mx-auto mt-7 max-w-xl text-[13px] leading-6 text-[#626962]">
          Our dedicated concierge team is available 24/7 to assist you with any
          inquiries or special requests to make your stay extraordinary.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#07342f] px-9 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0e433c]"
            href="/contact"
          >
            Contact Our Concierge
          </a>
          <button
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#8f9891] px-9 text-[12px] uppercase tracking-[0.08em] text-[#303832] transition-colors hover:border-[#07342f] hover:text-[#07342f]"
            type="button"
          >
            Live Chat
          </button>
        </div>
      </section>
    </>
  )
}
