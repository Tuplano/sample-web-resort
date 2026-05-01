import { ChevronDown } from 'lucide-react'

import type { FaqItem } from '@/types/contact'

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
      <div className="text-center">
        <h2 className="font-serif text-[34px] leading-tight md:text-[40px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[13px] text-[#697069]">
          Details to help you prepare for your sanctuary experience.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-3xl">
        {items.map((item) => (
          <button
            className="flex w-full items-center justify-between border-b border-[#d8d4ca] py-6 text-left font-serif text-[25px] leading-tight text-[#1b211d]"
            key={item.question}
            type="button"
          >
            {item.question}
            <ChevronDown aria-hidden="true" size={16} strokeWidth={1.7} />
          </button>
        ))}
      </div>
    </section>
  )
}
