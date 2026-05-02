import { useEffect, useState } from 'react'

import type { Activity, WeeklyActivity } from '@/types/activities'
import { ActivityCard } from '@/features/activities/components/ActivityCard'
import { WeeklyRhythm } from '@/features/activities/components/WeeklyRhythm'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function ActivitiesPage({
  activities,
  weeklyActivities,
}: {
  activities: Activity[]
  weeklyActivities: WeeklyActivity[]
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Activities')
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activityFilters = [
    'All Activities',
    ...new Set(activities.map((activity) => activity.category).filter(Boolean)),
  ]

  const filteredActivities = activities.filter((activity) =>
    selectedCategory === 'All Activities'
      ? true
      : activity.category === selectedCategory,
  )

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap())
    }

    updateSelectedIndex()
    carouselApi.on('select', updateSelectedIndex)
    carouselApi.on('reInit', updateSelectedIndex)

    return () => {
      carouselApi.off('select', updateSelectedIndex)
      carouselApi.off('reInit', updateSelectedIndex)
    }
  }, [carouselApi])

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    carouselApi.scrollTo(0)
    setSelectedIndex(0)
  }, [carouselApi, selectedCategory])

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
              className={`shrink-0 border-b pb-1 transition-colors ${
                selectedCategory === filter
                  ? 'border-[#1b211d] text-[#1b211d]'
                  : 'border-transparent hover:border-[#1b211d] hover:text-[#1b211d]'
              }`}
              key={filter}
              onClick={() => setSelectedCategory(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24" id="activities">
        <Carousel
          className="mx-auto w-full max-w-[1680px] px-0"
          opts={{
            align: 'center',
            containScroll: false,
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="-ml-5 md:-ml-6">
            {filteredActivities.map((activity, index) => (
              <CarouselItem
                className="basis-[94%] pl-5 sm:basis-[86%] md:basis-[74%] md:pl-6 lg:basis-[66%] xl:basis-[58%]"
                key={activity.id ?? activity.name}
              >
                <div
                  className={`transition duration-300 ${
                    index === selectedIndex
                      ? 'scale-100 opacity-100'
                      : 'scale-[0.94] opacity-55'
                  }`}
                >
                  <ActivityCard activity={activity} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 border-[#cfc8bc] bg-[#fffdf8] text-[#1b211d] hover:border-[#07342f] hover:bg-[#07342f] hover:text-white disabled:bg-[#f2eee6] disabled:text-[#a19c93] md:left-4" />
          <CarouselNext className="right-2 border-[#cfc8bc] bg-[#fffdf8] text-[#1b211d] hover:border-[#07342f] hover:bg-[#07342f] hover:text-white disabled:bg-[#f2eee6] disabled:text-[#a19c93] md:right-4" />
        </Carousel>
        {filteredActivities.length === 0 ? (
          <div className="mt-8 border border-dashed border-[#d8d3c8] bg-[#fbfaf7] px-6 py-12 text-center text-[13px] text-[#626962]">
            No activities match this category yet.
          </div>
        ) : null}
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
