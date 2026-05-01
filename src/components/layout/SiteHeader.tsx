import {
  type SiteNavKey,
  siteNavigationItems,
} from '@/components/layout/site-navigation'

export function SiteHeader({ active }: { active: SiteNavKey }) {
  return (
    <header className="flex h-[72px] items-center border-b border-[#e5e2da] bg-[#fbfaf6] px-6 md:px-10">
      <a
        className="font-serif text-[13px] tracking-[0.24em] text-[#07342f]"
        href="/"
      >
        LUMINA COAST
      </a>
      <nav className="mx-auto hidden items-center gap-9 text-[12px] text-[#48514b] md:flex">
        {siteNavigationItems.map((item) => (
          <a
            className={`border-b py-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d] ${
              item.key === active
                ? 'border-[#1b211d] text-[#1b211d]'
                : 'border-transparent'
            }`}
            href={item.href}
            key={item.key}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="ml-auto inline-flex h-8 items-center justify-center bg-[#07342f] px-5 text-[10px] font-semibold text-white transition-colors hover:bg-[#0e433c] md:ml-0"
        href="#booking"
      >
        Book Now
      </a>
    </header>
  )
}
