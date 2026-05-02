import type { Amenity } from '@/types/amenities'
import { AmenityTile } from '@/features/amenities/components/AmenityTile'

export function AmenitiesPage({ amenities }: { amenities: Amenity[] }) {
  return (
    <>
      <section
        className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center px-6 text-center text-white lg:min-h-[540px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14, 31, 27, 0.34), rgba(14, 31, 27, 0.38)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="max-w-4xl">
          <h1 className="font-serif text-[50px] leading-none md:text-[70px]">
            Elevate Your Stay
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-[17px] leading-8 text-white/95 md:text-[20px]">
            Discover a world of curated experiences and world-class facilities
            designed for ultimate relaxation and recreation.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-[42px] leading-tight md:text-[48px]">
              Signature Amenities
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-7 text-[#4f5751]">
              Immerse yourself in our carefully crafted environments, where every
              detail is designed to enhance your coastal retreat.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:auto-rows-[360px]">
            {amenities.map((amenity) => (
              <AmenityTile amenity={amenity} key={amenity.name} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
