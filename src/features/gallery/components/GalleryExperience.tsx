import type { GalleryImage } from '@/types/gallery'

interface GalleryExperienceProps {
  images: {
    pool: GalleryImage
    dining: GalleryImage
    spa: GalleryImage
    artwork: GalleryImage
    beach: GalleryImage
    island: GalleryImage
  }
}

export function GalleryExperience({ images }: GalleryExperienceProps) {
  return (
    <>
      <section className="px-6 pb-20 md:px-10 lg:px-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[2fr_0.95fr]">
          <article className="relative min-h-[430px] overflow-hidden rounded-[8px] bg-[#143f39] text-white">
            <img
              alt={images.pool.title}
              className="absolute inset-0 h-full w-full object-cover"
              src={images.pool.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06231f]/72 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-8">
              <h2 className="font-serif text-[34px] leading-tight">
                Golden Hours
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-white/95">
                When the sun meets the horizon, casting a warm glow over our
                infinity pools and private decks.
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            <img
              alt={images.dining.title}
              className="min-h-[190px] w-full rounded-[8px] object-cover"
              src={images.dining.image}
            />
            <article className="rounded-[8px] bg-[#245a52] p-8 text-white">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/72">
                The Flavor of Salt
              </p>
              <h2 className="mt-5 font-serif text-[28px] leading-tight">
                Al Fresco Excellence
              </h2>
              <p className="mt-4 text-[13px] leading-6 text-white/82">
                Dining experiences that celebrate the bounty of the ocean and
                the serenity of the breeze.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#efede7] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#5f675f]">
              Concept 02
            </p>
            <h2 className="mt-8 font-serif text-[44px] leading-none md:text-[54px]">
              The Art of
              <br />
              Relaxation
            </h2>
            <p className="mt-8 max-w-xl text-[13px] leading-7 text-[#626962]">
              Our spa and sanctuary spaces are designed with soft tactility and
              organic textures to facilitate a complete decompression of the
              senses.
            </p>
            <blockquote className="mt-8 border-l border-[#aaa397] pl-6 font-serif text-[15px] italic leading-7 text-[#4d534d]">
              “A sanctuary where time slows down to the pace of the tides.”
            </blockquote>
          </div>
          <div className="flex items-end gap-5 lg:justify-center">
            <img
              alt={images.spa.title}
              className="aspect-[1.03/1] w-[48%] rounded-[4px] object-cover"
              src={images.spa.image}
            />
            <img
              alt={images.artwork.title}
              className="aspect-[1.03/1] w-[48%] rounded-[4px] object-cover"
              src={images.artwork.image}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <h2 className="text-center font-serif text-[34px] leading-tight">
          Coastal Sanctuaries
        </h2>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <img
            alt={images.beach.title}
            className="aspect-[1.28/1] w-full rounded-[4px] object-cover"
            src={images.beach.image}
          />
          <article className="flex min-h-[360px] items-center justify-center rounded-[8px] bg-[#eeece7] p-10 text-center">
            <div className="max-w-xs">
              <p className="text-[34px] leading-none">◇</p>
              <p className="mt-6 text-[13px] leading-6 text-[#626962]">
                Drift across quiet coves, pale sandbars, and sheltered waters
                shaped for slow discovery.
              </p>
            </div>
          </article>
          <article className="flex min-h-[360px] items-center justify-center rounded-[8px] bg-[#eeece7] p-10 text-center">
            <div className="max-w-xs">
              <p className="text-[34px] leading-none">≋</p>
              <p className="mt-6 text-[13px] leading-6 text-[#626962]">
                Explore the vibrant marine life and crystal clear waters that
                define the Lumina coast.
              </p>
            </div>
          </article>
          <img
            alt={images.island.title}
            className="aspect-[1.12/1] w-full rounded-[4px] object-cover"
            src={images.island.image}
          />
        </div>
      </section>

      <section className="bg-[#07342f] px-6 py-20 text-center text-white md:px-10 lg:px-20 lg:py-24">
        <div>
          <h2 className="font-serif text-[40px] leading-tight md:text-[54px]">
            Ready to begin your story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-white/85">
            Every stay at Lumina Coast is a personal odyssey of relaxation and
            discovery.
          </p>
          <a
            className="mt-8 inline-flex h-11 items-center justify-center bg-white px-10 text-[10px] font-semibold uppercase text-[#07342f] transition-colors hover:bg-[#f3f0e8]"
            href="/contact"
          >
            Book Your Sanctuary
          </a>
        </div>
      </section>
    </>
  )
}
