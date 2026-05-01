import { ChefHat, Droplets, Leaf } from 'lucide-react'

import type { DiningHighlight } from '@/types/dining'

const icons = [ChefHat, Droplets, Leaf]

export function DiningExperienceGrid({
  highlights,
}: {
  highlights: DiningHighlight[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_0.95fr]">
      <article className="relative min-h-[440px] overflow-hidden rounded-[8px] bg-[#1b211d] text-white">
        <img
          alt="Chef plating an elegant resort tasting menu"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1500&q=84"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 max-w-xl p-8">
          <ChefHat aria-hidden="true" size={20} strokeWidth={1.6} />
          <h2 className="mt-4 font-serif text-[34px] leading-tight">
            Signature Tasting Menus
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-white/95">
            Seasonal courses tailored to the day’s catch, coastal farms, and
            the quiet rhythm of evening service.
          </p>
        </div>
      </article>

      <div className="grid gap-6">
        {highlights.map((highlight, index) => {
          const Icon = icons[index] ?? ChefHat

          return (
            <article
              className="rounded-[8px] border border-[#e1ded5] bg-[#fffdf8] p-9"
              key={highlight.name}
            >
              <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
              <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-[#5f675f]">
                {highlight.label}
              </p>
              <h3 className="mt-4 font-serif text-[25px] leading-tight text-[#1b211d]">
                {highlight.name}
              </h3>
              <p className="mt-4 text-[13px] leading-6 text-[#626962]">
                {highlight.description}
              </p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
