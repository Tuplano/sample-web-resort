import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  Compass,
  Leaf,
  Square,
  Users,
  Utensils,
} from 'lucide-react'

import type { ReservationAddon, ReservationField } from '@/types/reservation'

const fields: ReservationField[] = [
  {
    label: 'Check-in',
    value: '05/15/2024',
    icon: CalendarDays,
    trailing: CalendarDays,
  },
  {
    label: 'Check-out',
    value: '05/22/2024',
    icon: CalendarDays,
    trailing: CalendarDays,
  },
  {
    label: 'Guests',
    value: '2 Adults, 0 Children',
    icon: Users,
    trailing: ChevronDown,
  },
  {
    label: 'Room Type',
    value: 'Oceanfront Villa',
    icon: BedDouble,
    trailing: ChevronDown,
  },
]

const addons: ReservationAddon[] = [
  {
    name: 'Spa & Wellness',
    description: 'Pre-book treatments at Serenity Spa',
    icon: Leaf,
  },
  {
    name: 'Dining Experiences',
    description: 'Reserve a table at The Azure Table',
    icon: Utensils,
  },
  {
    name: 'Curated Adventures',
    description: 'Private Island Picnic or Sunset Yacht Charter',
    icon: Compass,
  },
]

export function ReservationForm() {
  return (
    <form>
      <div className="grid gap-8 md:grid-cols-2">
        {fields.map((field) => (
          <ReservationInput field={field} key={field.label} />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em]">
          Enhance Your Stay
        </h2>
        <div className="mt-4 space-y-4">
          {addons.map((addon) => (
            <label
              className="flex items-center gap-5 rounded-[8px] border border-[#d4d0c6] bg-[#fbfaf6] p-5"
              key={addon.name}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#e8ece6] text-[#163d36]">
                <addon.icon aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className="flex-1">
                <span className="block text-[16px] font-medium text-[#1b211d]">
                  {addon.name}
                </span>
                <span className="mt-1 block text-[14px] text-[#626962]">
                  {addon.description}
                </span>
              </span>
              <input className="sr-only" type="checkbox" />
              <Square aria-hidden="true" size={20} strokeWidth={1.4} />
            </label>
          ))}
        </div>
      </section>

      <label className="mt-12 block">
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
          Special Requests
        </span>
        <textarea
          className="mt-4 min-h-[150px] w-full resize-none border border-[#c9c5bb] bg-transparent p-5 text-[14px] outline-none placeholder:text-[#777d77]"
          placeholder="Any dietary requirements, arrival time, or special occasions?"
        />
      </label>

      <button
        className="mt-14 inline-flex h-14 items-center justify-center rounded-full bg-[#07342f] px-9 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0e433c]"
        type="button"
      >
        Proceed to Payment
      </button>
    </form>
  )
}

function ReservationInput({ field }: { field: ReservationField }) {
  const Icon = field.icon
  const TrailingIcon = field.trailing

  return (
    <label className="block">
      <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
        {field.label}
      </span>
      <span className="mt-2 flex h-14 items-center border border-[#c9c5bb] px-5 text-[16px]">
        <Icon aria-hidden="true" className="mr-4 text-[#48514b]" size={20} strokeWidth={1.6} />
        {field.value}
        {TrailingIcon ? (
          <TrailingIcon
            aria-hidden="true"
            className="ml-auto text-[#1b211d]"
            size={17}
            strokeWidth={1.8}
          />
        ) : null}
      </span>
    </label>
  )
}
