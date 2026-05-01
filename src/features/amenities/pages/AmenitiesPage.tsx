import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import type { Amenity } from '@/types/amenities'
import { AmenityTile } from '@/features/amenities/components/AmenityTile'

const amenities: Amenity[] = [
  {
    name: 'Cascading Infinity Pool',
    description:
      'Multi-tiered pools offering uninterrupted views of the coastline, complete with private cabanas and dedicated attendant service.',
    category: 'Poolside',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1500&q=84',
    layout: 'wide',
  },
  {
    name: 'Private Beach',
    description:
      'Exclusive access to a secluded pristine coastline, outfitted with premium loungers and complimentary water service.',
    category: 'Beachfront',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=84',
    layout: 'tall',
  },
  {
    name: 'State-of-the-Art Gym',
    description:
      'Light-filled training spaces with modern equipment and garden views for unhurried daily movement.',
    category: 'Wellness',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=84',
    layout: 'standard',
  },
  {
    name: "Lumina Kids' Club",
    description:
      'Calm, imaginative spaces for younger guests, designed for creative play and attentive family care.',
    category: 'Family',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=84',
    layout: 'standard',
  },
]

export function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="amenities" />

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
          <div className="grid auto-rows-fr gap-3 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <AmenityTile amenity={amenity} key={amenity.name} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
