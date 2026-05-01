import { ChevronDown } from 'lucide-react'

import type { FaqItem } from '@/types/faq'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          className="rounded-[8px] border border-[#d8d4ca] bg-[#fffdf8] p-6"
          key={item.question}
        >
          <button
            className="flex w-full items-center justify-between gap-6 text-left font-serif text-[18px] text-[#1b211d]"
            type="button"
          >
            {item.question}
            <ChevronDown aria-hidden="true" size={16} strokeWidth={1.7} />
          </button>
          {item.answer ? (
            <p className="mt-7 text-[13px] leading-6 text-[#626962]">{item.answer}</p>
          ) : null}
        </article>
      ))}
    </div>
  )
}
