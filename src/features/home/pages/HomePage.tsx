import { ArrowUpRight } from 'lucide-react'

import type { Accommodation } from '@/types/home'
import { AccommodationCard } from '@/features/home/components/AccommodationCard'

const navigationItems = [
  { label: 'Home', href: '#top' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Dining', href: '#dining' },
]

const footerLinks = ['About', 'Contact', 'Privacy Policy', 'Sustainability', 'Careers']

const accommodations: [Accommodation, ...Accommodation[]] = [
  {
    name: 'Ocean View Suite',
    description: 'Panoramic views and expansive living space.',
    image:
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=82',
    size: 'large',
  },
  {
    name: 'Private Pool Villa',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=82',
    size: 'compact',
  },
  {
    name: 'Family Villa',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=82',
    size: 'compact',
  },
]

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <header className="flex h-[72px] items-center border-b border-[#d8d5cc] bg-[#f2f4f2] px-6 md:px-10">
        <a className="font-serif text-[13px] tracking-[0.24em]" href="#top">
          LUMINA COAST
        </a>
        <nav className="mx-auto hidden items-center gap-9 text-[12px] text-[#48514b] md:flex">
          {navigationItems.map((item) => (
            <a
              className="border-b border-transparent py-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="ml-auto inline-flex h-8 items-center justify-center bg-[#07342f] px-5 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c] md:ml-0"
          href="#booking"
        >
          Book Now
        </a>
      </header>

      <section
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-center bg-cover bg-center px-6 text-center text-white"
        id="top"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 28, 23, 0.28), rgba(20, 28, 23, 0.36)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="mt-10 max-w-3xl">
          <h1 className="font-serif text-[44px] leading-none md:text-[64px]">
            Escape to Paradise
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-6 text-white/95 md:text-[15px]">
            Experience luxury, comfort, and unforgettable moments in our relaxing
            resort.
          </p>
          <a
            className="mt-10 inline-flex h-10 items-center justify-center bg-[#07342f] px-7 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
            href="#booking"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      <section
        className="grid gap-12 px-6 py-20 md:grid-cols-[0.9fr_1fr] md:items-center md:px-10 lg:px-20 lg:py-28"
        id="amenities"
      >
        <div className="max-w-xl">
          <p className="mb-4 text-[10px] uppercase text-[#48514b]">
            Welcome to Lumina Coast
          </p>
          <h2 className="font-serif text-[34px] leading-tight md:text-[42px]">
            A Sanctuary of Understated Luxury
          </h2>
          <p className="mt-9 text-[14px] leading-7 text-[#697069]">
            Nestled along the pristine coastline, Lumina Coast Resort &amp; Spa
            offers a restorative retreat for the discerning traveler. Our
            architecture blends seamlessly with the natural surroundings, creating
            spaces that breathe and inspire.
          </p>
          <a
            className="mt-9 inline-flex items-center gap-3 text-[10px] font-semibold uppercase text-[#27302b]"
            href="#gallery"
          >
            Discover Our Story
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.7} />
          </a>
        </div>
        <img
          alt="A serene resort lounge opening toward palms and water"
          className="aspect-[1.04/1] w-full rounded-[8px] object-cover shadow-[0_18px_50px_rgba(30,32,25,0.14)]"
          src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1300&q=84"
        />
      </section>

      <section
        className="border-y border-[#e4e1d8] bg-[#fbfaf7] px-6 py-20 md:px-10 lg:px-20 lg:py-28"
        id="accommodations"
      >
        <div className="mb-12 text-center">
          <p className="mb-3 text-[10px] uppercase text-[#697069]">Stay</p>
          <h2 className="font-serif text-[34px] leading-tight md:text-[40px]">
            Featured Accommodations
          </h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-[2.1fr_1fr]">
          <AccommodationCard accommodation={accommodations[0]} />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
            {accommodations.slice(1).map((accommodation) => (
              <AccommodationCard accommodation={accommodation} key={accommodation.name} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f7f5]" id="booking">
        <div className="grid gap-12 border-b border-[#e1dfd7] px-6 py-16 md:grid-cols-[1fr_0.9fr_1.2fr_auto] md:px-10 lg:px-20">
          <div>
            <h2 className="font-serif text-[13px] tracking-[0.18em]">LUMINA COAST</h2>
            <p className="mt-7 max-w-[220px] text-[13px] leading-7 text-[#697069]">
              A restorative sanctuary where modern luxury meets the tranquil
              rhythm of the ocean.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em]">
              Explore
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-[13px] text-[#525a54]">
              {footerLinks.map((link) => (
                <a className="transition-colors hover:text-[#1b211d]" href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em]">
              Contact
            </h3>
            <address className="mt-6 space-y-5 text-[13px] not-italic leading-7 text-[#697069]">
              <p>
                123 Coastal Drive
                <br />
                Paradise Bay, PB 90210
              </p>
              <p>
                contact@luminacoast.com
                <br />
                +1 (555) 123-4567
              </p>
            </address>
          </div>
          <a
            className="inline-flex h-9 items-center justify-center self-start bg-[#07342f] px-6 text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
            href="#top"
          >
            Book Now
          </a>
        </div>
        <p className="px-6 py-8 text-center text-[10px] uppercase text-[#767c75]">
          © 2024 Lumina Coast Resort &amp; Spa. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
