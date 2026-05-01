import type { Amenity } from '@/types/amenities'
import { AmenityTile } from '@/features/amenities/components/AmenityTile'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Activities', href: '/#activities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Dining', href: '/#dining' },
]

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
      <header className="flex h-[78px] items-center border-b border-[#e5e2da] bg-[#fbfaf6] px-6 md:px-10">
        <a className="font-serif text-[18px] tracking-[0.24em] text-[#07342f]" href="/">
          LUMINA COAST
        </a>
        <nav className="mx-auto hidden items-center gap-9 text-[12px] tracking-[0.08em] text-[#48514b] md:flex">
          {navigationItems.map((item) => (
            <a
              className={`border-b py-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d] ${
                item.label === 'Amenities'
                  ? 'border-[#1b211d] text-[#1b211d]'
                  : 'border-transparent'
              }`}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="ml-auto inline-flex h-9 items-center justify-center bg-[#07342f] px-7 text-[12px] font-semibold text-white transition-colors hover:bg-[#0e433c] md:ml-0"
          href="#booking"
        >
          Book Now
        </a>
      </header>

      <section
        className="relative flex min-h-[610px] items-center justify-center bg-cover bg-center px-6 text-center text-white"
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

      <section className="px-6 py-24 md:px-10 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1220px]">
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

      <footer className="border-t border-[#e1dfd7] bg-[#fbfaf7]" id="booking">
        <div className="grid gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr_0.8fr] md:items-start md:px-10 lg:px-8">
          <div>
            <h2 className="font-serif text-[16px] tracking-[0.18em]">LUMINA COAST</h2>
            <p className="mt-8 max-w-[260px] text-[14px] leading-7 text-[#697069]">
              A sanctuary of understated luxury and coastal serenity.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-9 gap-y-4 text-[15px] text-[#3f4741]">
            {['About', 'Contact', 'Privacy Policy', 'Sustainability', 'Careers'].map(
              (link) => (
                <a className="transition-colors hover:text-[#1b211d]" href="/" key={link}>
                  {link}
                </a>
              ),
            )}
          </div>
          <p className="self-end text-[11px] uppercase leading-4 tracking-[0.12em] text-[#4f5751] md:text-right">
            © 2024 Lumina Coast Resort &amp;
            <br />
            Spa. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
