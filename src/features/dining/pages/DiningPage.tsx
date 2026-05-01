import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import type { DiningHighlight } from '@/types/dining'
import { DiningExperienceGrid } from '@/features/dining/components/DiningExperienceGrid'

const diningHighlights: DiningHighlight[] = [
  {
    label: 'Raw Bar',
    name: 'Ocean Harvest',
    description:
      'Daily shellfish, reef fish crudo, and chilled coastal plates prepared with citrus, herbs, and mineral sea salts.',
  },
  {
    label: 'Cellar',
    name: 'Sommelier Pairings',
    description:
      'Old-world wines, island infusions, and zero-proof pairings selected to follow each course with restraint.',
  },
]

export function DiningPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="dining" />

      <section
        className="relative flex min-h-[620px] items-center justify-center bg-cover bg-center px-6 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 28, 23, 0.26), rgba(20, 28, 23, 0.56)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="max-w-3xl">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em]">
            Savor &amp; Gather
          </p>
          <h1 className="font-serif text-[50px] leading-none md:text-[68px]">
            Coastal Dining
            <br />
            Journeys
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-7 text-white/95">
            Immerse yourself in exceptional flavors at our signature venues, from
            oceanfront breakfasts to candlelit tasting menus by the shore.
          </p>
        </div>
      </section>

      <section className="grid gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-20 lg:py-24">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#5f675f]">
            Fine Dining
          </p>
          <h2 className="mt-5 font-serif text-[42px] leading-tight">
            The Azure Table
          </h2>
          <p className="mt-6 max-w-xl text-[13px] leading-7 text-[#626962]">
            Experience culinary artistry where the freshest local seafood meets
            contemporary coastal techniques. Set against panoramic ocean views,
            The Azure Table offers an elegant, multi-sensory dining experience
            curated by our executive chef.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#dcebf7] px-4 py-1 text-[11px] text-[#345366]">
              Dinner Only
            </span>
            <span className="rounded-full bg-[#dcebf7] px-4 py-1 text-[11px] text-[#345366]">
              Reservations Required
            </span>
          </div>
          <a
            className="mt-10 inline-flex h-10 items-center justify-center border border-[#8f9891] px-8 text-[10px] font-semibold uppercase text-[#24302a] transition-colors hover:border-[#07342f] hover:bg-[#07342f] hover:text-white"
            href="#menu"
          >
            View Menu
          </a>
        </div>
        <img
          alt="Plated scallops with coastal tasting menu garnish"
          className="aspect-[1.28/1] w-full rounded-[8px] object-cover shadow-[0_18px_50px_rgba(30,32,25,0.12)]"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1300&q=84"
        />
      </section>

      <section className="bg-[#efede7] px-6 py-20 md:px-10 lg:px-20 lg:py-24" id="menu">
        <div className="mb-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#5f675f]">
            Chef’s Selection
          </p>
          <h2 className="mt-5 font-serif text-[40px] leading-tight">
            Menu Experiences
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-[#626962]">
            A thoughtful progression of sea, garden, and fire. Our menus change
            with the tides, the market, and the best ingredients available each
            morning.
          </p>
        </div>
        <DiningExperienceGrid highlights={diningHighlights} />
      </section>

      <SiteFooter />
    </main>
  )
}
