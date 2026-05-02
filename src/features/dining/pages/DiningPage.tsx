import type { DiningHighlight } from '@/types/dining'
import { DiningExperienceGrid } from '@/features/dining/components/DiningExperienceGrid'

export function DiningPage({
  diningHighlights,
}: {
  diningHighlights: DiningHighlight[]
}) {
  const serviceMoments = [
    { label: 'Sunrise Breakfast', time: '6:30 AM - 10:30 AM' },
    { label: 'Poolside Lunch', time: '11:30 AM - 4:00 PM' },
    { label: 'Chef’s Tasting', time: '6:00 PM - 10:00 PM' },
  ]

  return (
    <>
      <section
        className="relative flex min-h-[520px] items-center bg-cover bg-center px-6 text-white md:min-h-[600px] lg:px-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 28, 23, 0.26), rgba(20, 28, 23, 0.56)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,1.25fr)_280px] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em]">
              Savor &amp; Gather
            </p>
            <h1 className="font-serif text-[46px] leading-none md:text-[64px]">
              Coastal Dining
              <br />
              Journeys
            </h1>
            <p className="mt-8 max-w-2xl text-[15px] leading-7 text-white/95">
              From first light breakfasts by the water to long tasting dinners
              under the palms, every table is shaped around the cadence of the
              coast.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center bg-[#07342f] px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
                href="#venues"
              >
                Explore Venues
              </a>
              <a
                className="inline-flex h-11 items-center justify-center border border-white/50 px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-white hover:text-[#07342f]"
                href="/dining/menu"
              >
                View Full Menu
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[6px] border border-white/20 bg-white/10 backdrop-blur-[2px]">
            {serviceMoments.map((moment) => (
              <div
                className="bg-[rgba(9,24,22,0.34)] px-5 py-4"
                key={moment.label}
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">
                  {moment.label}
                </p>
                <p className="mt-2 text-[15px] text-white">{moment.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1d8] bg-[#fbfaf7] px-6 py-6 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1320px] gap-6 md:grid-cols-3">
          <div>
            <p className="text-[12px] text-[#1b211d]">Three signature venues</p>
            <p className="mt-2 text-[13px] leading-6 text-[#626962]">
              A dining rhythm that moves from bright mornings to intimate late
              suppers.
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#1b211d]">Local-first sourcing</p>
            <p className="mt-2 text-[13px] leading-6 text-[#626962]">
              Reef catch, island citrus, and produce from nearby growers shape
              every service.
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#1b211d]">Private dining available</p>
            <p className="mt-2 text-[13px] leading-6 text-[#626962]">
              Sandbank picnics, villa dinners, and tasting menus tailored by our
              culinary team.
            </p>
          </div>
        </div>
      </section>

      <section
        className="grid gap-16 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-20 lg:py-24"
        id="venues"
      >
        <div className="grid gap-8">
          <div>
            <h2 className="font-serif text-[40px] leading-tight md:text-[48px]">
              The Azure Table
            </h2>
            <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#626962]">
              Our signature room leans into patient cooking, bright sauces, and
              a menu that shifts with the docks and morning market. The mood is
              calm, candlelit, and paced for lingering.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[6px] border border-[#dfdbd1] bg-[#dfdbd1] sm:grid-cols-3">
            <div className="bg-white px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#6d746d]">
                Service
              </p>
              <p className="mt-3 text-[14px] text-[#1b211d]">Dinner nightly</p>
            </div>
            <div className="bg-white px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#6d746d]">
                Dress
              </p>
              <p className="mt-3 text-[14px] text-[#1b211d]">Resort elegant</p>
            </div>
            <div className="bg-white px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#6d746d]">
                Reservations
              </p>
              <p className="mt-3 text-[14px] text-[#1b211d]">Recommended</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex h-10 items-center justify-center border border-[#8f9891] px-8 text-[10px] font-semibold uppercase text-[#24302a] transition-colors hover:border-[#07342f] hover:bg-[#07342f] hover:text-white"
              href="/dining/menu"
            >
              View Menu
            </a>
            <a
              className="inline-flex h-10 items-center justify-center text-[10px] font-semibold uppercase text-[#24302a] transition-colors hover:text-[#07342f]"
              href="#private-dining"
            >
              Private Dining Options
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            alt="Plated scallops with coastal tasting menu garnish"
            className="aspect-[1.08/1] w-full rounded-[8px] object-cover shadow-[0_18px_50px_rgba(30,32,25,0.12)]"
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1300&q=84"
          />
          <div className="absolute bottom-5 left-5 max-w-[240px] rounded-[6px] bg-[#f7f4ed] px-5 py-4 text-[#1b211d] shadow-[0_12px_24px_rgba(24,28,24,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#6d746d]">
              Chef’s Note
            </p>
            <p className="mt-3 text-[13px] leading-6 text-[#495049]">
              Menus stay concise so the kitchen can follow the freshest catch
              and the day’s best produce without compromise.
            </p>
          </div>
        </div>
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

      <section
        className="grid gap-16 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-20 lg:py-24"
        id="private-dining"
      >
        <div className="order-2 lg:order-1">
          <img
            alt="Private beachfront dinner setup with candles"
            className="aspect-[1.15/1] w-full rounded-[8px] object-cover shadow-[0_18px_50px_rgba(30,32,25,0.12)]"
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1300&q=84"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-[38px] leading-tight md:text-[46px]">
            Dining Beyond
            <br />
            The Restaurant
          </h2>
          <p className="mt-6 max-w-xl text-[14px] leading-7 text-[#626962]">
            For guests who want something more intimate, our team stages
            moonlit beach dinners, breakfast in your villa, and chef-led tasting
            tables in hidden corners of the property.
          </p>
          <div className="mt-8 grid gap-5 text-[13px] leading-6 text-[#495049] sm:grid-cols-2">
            <div className="border-t border-[#d8d3c8] pt-4">
              Secluded shoreline setups with a dedicated steward and custom
              beverage service.
            </div>
            <div className="border-t border-[#d8d3c8] pt-4">
              In-villa suppers paced around your evening, from family-style to
              tasting format.
            </div>
          </div>
          <a
            className="mt-10 inline-flex h-11 items-center justify-center bg-[#07342f] px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
            href="/contact"
          >
            Plan A Private Dinner
          </a>
        </div>
      </section>

      <section className="bg-[#07342f] px-6 py-20 text-center text-white md:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-[40px] leading-none md:text-[48px]">
            Reserve The Table
            <br />
            You’ll Remember
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-6 text-white/88">
            Whether it’s a celebratory tasting menu or a relaxed lunch after the
            sea, our team will shape the right setting for your stay.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex h-11 items-center justify-center bg-white px-8 text-[10px] font-semibold uppercase text-[#07342f] transition-colors hover:bg-[#f3f0e8]"
              href="/reservation"
            >
              Book Your Stay
            </a>
            <a
              className="inline-flex h-11 items-center justify-center border border-white/45 px-8 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-white hover:text-[#07342f]"
              href="/dining/menu"
            >
              Browse The Menu
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
