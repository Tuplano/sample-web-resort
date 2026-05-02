import { useState } from 'react'
import { Clock } from 'lucide-react'

import type { Activity } from '@/types/activities'

const ACTIVITY_IMAGE_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 780'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%2307342f'/%3E%3Cstop offset='1' stop-color='%231f5b52'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='780' fill='url(%23g)'/%3E%3Ccircle cx='912' cy='178' r='108' fill='rgba(255,255,255,0.08)'/%3E%3Ccircle cx='230' cy='628' r='156' fill='rgba(255,255,255,0.06)'/%3E%3Ctext x='96' y='390' fill='white' font-family='Georgia, serif' font-size='74'%3ECurated Activity%3C/text%3E%3C/svg%3E"

export function ActivityCard({ activity }: { activity: Activity }) {
  const [imageSrc, setImageSrc] = useState(activity.image)

  return (
    <article className="overflow-hidden rounded-[4px] border border-[#e2ded5] bg-[#fffdf8] shadow-[0_8px_24px_rgba(44,42,34,0.06)]">
      <div className="relative">
        <img
          alt={activity.name}
          className="aspect-[1.55/1] w-full object-cover"
          onError={() => setImageSrc(ACTIVITY_IMAGE_FALLBACK)}
          src={imageSrc}
        />
        <span className="absolute left-3 top-3 bg-white px-3 py-1 text-[10px] uppercase text-[#24413b]">
          {activity.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="font-serif text-[25px] leading-tight text-[#1b211d]">
          {activity.name}
        </h2>
        <p className="mt-4 min-h-[58px] text-[13px] leading-6 text-[#626962]">
          {activity.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-4 text-[10px] uppercase text-[#5f675f]">
          <span className="inline-flex items-center gap-2 normal-case">
            <Clock aria-hidden="true" size={13} strokeWidth={1.7} />
            {activity.duration}
          </span>
          <a className="transition-colors hover:text-[#07342f]" href="#booking">
            Book Experience
          </a>
        </div>
      </div>
    </article>
  )
}
