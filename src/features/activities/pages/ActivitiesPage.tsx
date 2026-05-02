import type { Activity, WeeklyActivity } from '@/types/activities'
import { ActivityCard } from '@/features/activities/components/ActivityCard'
import { WeeklyRhythm } from '@/features/activities/components/WeeklyRhythm'

const activityFilters = [
  'All Activities',
  'Water Sports',
  'Land Adventures',
  'Cultural Tours',
  'Wellness',
]

export function ActivitiesPage({
  activities,
  weeklyActivities,
}: {
  activities: Activity[]
  weeklyActivities: WeeklyActivity[]
}) {
  return (
    <>
      <section
        className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center px-6 text-center text-white lg:min-h-[460px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 35, 31, 0.2), rgba(10, 35, 31, 0.64)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="mt-8 max-w-3xl">
          <h1 className="font-serif text-[42px] leading-none md:text-[54px]">
            Curated Adventures
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[13px] leading-6 text-white/95">
            Discover the raw beauty of the coast through bespoke experiences
            designed to ignite your spirit and soothe your soul.
          </p>
          <a
            className="mt-7 inline-flex h-10 items-center justify-center bg-[#07342f] px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
            href="#activities"
          >
            Explore Below
          </a>
        </div>
      </section>

      <section className="border-b border-[#e4e1d8] bg-[#fbfaf7]" aria-label="Activity filters">
        <div className="flex justify-center gap-10 overflow-x-auto px-6 py-5 text-[10px] uppercase text-[#7a8079] md:px-10 lg:px-20">
          {activityFilters.map((filter) => (
            <button
              className="shrink-0 border-b border-transparent pb-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d] first:border-[#1b211d] first:text-[#1b211d]"
              key={filter}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24" id="activities">
        <div className="grid gap-8 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity.name} />
          ))}
        </div>
      </section>

      <section className="bg-[#efede7] px-6 py-20 md:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="relative max-w-[560px]">
            <img
              alt="Beach picnic setup beside turquoise water"
              className="aspect-[1.2/1] w-full rounded-[6px] object-cover"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=84"
            />
            <div className="absolute -bottom-10 left-[42%] flex gap-4">
              <img
                alt=""
                className="size-28 rounded-[4px] border-4 border-[#efede7] object-cover shadow-[0_8px_24px_rgba(34,31,25,0.18)]"
                src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=420&q=84"
              />
              <img
                alt=""
                className="size-28 rounded-[4px] border-4 border-[#efede7] object-cover shadow-[0_8px_24px_rgba(34,31,25,0.18)]"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=420&q=84"
              />
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#5c625d]">
              Signature Experience
            </p>
            <h2 className="mt-6 font-serif text-[44px] leading-none md:text-[54px]">
              Private Island
              <br />
              Picnic
            </h2>
            <p className="mt-8 max-w-xl text-[14px] leading-7 text-[#626962]">
              Escape to a secluded sandbank accessible only by boat. We provide a
              fully catered, gourmet lunch tailored to your preferences, complete
              with a private steward, shaded daybeds, and snorkeling equipment
              for your own private reef.
            </p>
            <p className="mt-5 max-w-md font-serif text-[15px] italic leading-7 text-[#626962]">
              “The ultimate expression of coastal seclusion and culinary
              excellence.”
            </p>
            <a
              className="mt-8 inline-flex h-11 items-center justify-center bg-[#07342f] px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
              href="#booking"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-[32px] leading-tight">
              The Weekly Rhythm
            </h2>
            <p className="mt-4 text-[13px] text-[#697069]">
              Recurring activities to enhance your stay throughout the week.
            </p>
          </div>
          <div className="overflow-x-auto">
            <WeeklyRhythm activities={weeklyActivities} />
          </div>
        </div>
      </section>

      <section className="bg-[#07342f] px-6 py-20 text-center text-white md:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-[42px] leading-none md:text-[50px]">
            Your Personal Adventure
            <br />
            Awaits
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-6 text-white/88">
            Looking for something truly unique? Our concierge team specializes in
            crafting bespoke itineraries tailored to your exact desires. Whether
            it’s a surprise proposal or a multi-day island hopping trek, we make
            it possible.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center bg-white px-8 text-[10px] font-semibold uppercase text-[#07342f] transition-colors hover:bg-[#f3f0e8]"
              href="#booking"
            >
              Speak With Concierge
            </a>
            <a
              className="inline-flex h-11 items-center justify-center border border-white/45 px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-white hover:text-[#07342f]"
              href="#booking"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
