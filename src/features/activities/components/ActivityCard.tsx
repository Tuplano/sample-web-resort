import { Clock } from 'lucide-react'

import type { Activity } from '@/types/activities'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="overflow-hidden rounded-[4px] border border-[#e2ded5] bg-[#fffdf8] shadow-[0_8px_24px_rgba(44,42,34,0.06)]">
      <div className="relative">
        <img
          alt=""
          className="aspect-[1.55/1] w-full object-cover"
          src={activity.image}
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
