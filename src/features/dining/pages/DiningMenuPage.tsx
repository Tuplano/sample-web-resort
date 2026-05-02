import type { MenuItem } from '@/types/dining'

export function DiningMenuPage({ menuItems }: { menuItems: MenuItem[] }) {
  const appetizers = menuItems.filter((item) => item.category === 'appetizers')
  const mains = menuItems.filter((item) => item.category === 'mains')
  const desserts = menuItems.filter((item) => item.category === 'desserts')
  const categoryLinks = [
    { href: '#appetizers', label: 'Appetizers', count: appetizers.length },
    { href: '#main-courses', label: 'Main Courses', count: mains.length },
    { href: '#desserts', label: 'Desserts', count: desserts.length },
  ]

  return (
    <>
      <section
        className="relative flex min-h-[430px] items-center bg-cover bg-center px-6 text-white lg:px-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 28, 31, 0.32), rgba(12, 28, 31, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/86">
              The Azure Table
            </p>
            <h1 className="font-serif text-[48px] leading-none md:text-[64px]">
              Culinary Sanctuary
            </h1>
            <p className="mt-7 max-w-2xl text-[14px] leading-7 text-white/95">
              A concise menu built around the day’s best seafood, bright coastal
              produce, and a slower evening tempo.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[6px] border border-white/20 bg-white/10">
            {categoryLinks.map((category) => (
              <a
                className="flex items-center justify-between bg-[rgba(9,24,22,0.34)] px-5 py-4 text-[13px] transition-colors hover:bg-[rgba(9,24,22,0.5)]"
                href={category.href}
                key={category.label}
              >
                <span>{category.label}</span>
                <span className="text-white/70">{category.count}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4e1d8] bg-[#fbfaf7] px-6 py-5 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1320px] gap-6 overflow-x-auto text-[11px] uppercase tracking-[0.16em] text-[#6d746d]">
          {categoryLinks.map((category) => (
            <a
              className="shrink-0 border-b border-transparent pb-1 transition-colors hover:border-[#1b211d] hover:text-[#1b211d]"
              href={category.href}
              key={category.label}
            >
              {category.label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 border border-[#e1ded5] bg-[#fffdf8] px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-8">
            <div>
              <h2 className="font-serif text-[30px] leading-tight md:text-[34px]">
                Tonight’s Approach
              </h2>
              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#626962]">
                We keep the menu deliberately focused. Expect clean flavors,
                careful fire, and sauces that lift the ingredient rather than
                cover it.
              </p>
            </div>
            <div className="grid gap-4 text-[13px] leading-6 text-[#495049]">
              <div className="border-t border-[#ddd8cc] pt-4">
                Ask about daily crudo and off-menu catch from the morning boats.
              </div>
              <div className="border-t border-[#ddd8cc] pt-4">
                Vegetarian preparations are available across every course.
              </div>
            </div>
          </div>

          <div className="mt-16">
          <MenuSection id="appetizers" items={appetizers} title="Appetizers" />

            <section className="mt-28 text-center" id="main-courses">
              <h2 className="font-serif text-[36px] leading-tight">Main Courses</h2>
              <div className="mx-auto mt-4 h-px w-12 bg-[#c7c1b6]" />
              <article className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[8px] border border-[#e1ded5] bg-[#fffdf8] md:grid-cols-[1.1fr_0.9fr]">
                <img
                  alt="Pan-seared Chilean seabass with herbs"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=84"
                />
                <div className="px-8 py-10 text-left">
                  <h3 className="font-serif text-[30px] leading-tight">
                    Pan-Seared Chilean Seabass
                  </h3>
                  <p className="mt-4 text-[13px] italic leading-6 text-[#626962]">
                    Our signature catch, served with saffron cauliflower puree,
                    braised leeks, and a restrained Meyer lemon beurre blanc.
                  </p>
                  <p className="mt-6 font-serif text-[18px] text-[#1b211d]">
                    {formatPrice(52)}
                  </p>
                  <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-[#5f675f]">
                    Best paired with mineral whites or crisp sparkling pours.
                  </p>
                </div>
              </article>
              <div className="mx-auto mt-16 grid max-w-5xl gap-14 md:grid-cols-2">
                {mains.map((item) => (
                  <MenuItemView item={item} key={item.name} />
                ))}
              </div>
            </section>

            <MenuSection
              className="mt-28"
              id="desserts"
              items={desserts}
              title="Desserts"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function MenuSection({
  className,
  id,
  items,
  title,
}: {
  className?: string
  id: string
  items: MenuItem[]
  title: string
}) {
  return (
    <section className={`text-center ${className ?? ''}`} id={id}>
      <h2 className="font-serif text-[36px] leading-tight">{title}</h2>
      <div className="mx-auto mt-4 h-px w-12 bg-[#c7c1b6]" />
      {items.length > 0 ? (
        <div className="mt-12 grid gap-14 md:grid-cols-2">
          {items.map((item) => (
            <MenuItemView item={item} key={item.name} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-2xl border border-dashed border-[#d8d3c8] bg-[#fbfaf7] px-6 py-10 text-[13px] text-[#626962]">
          This course is being refreshed for the next service.
        </div>
      )}
    </section>
  )
}

function MenuItemView({ item }: { item: MenuItem }) {
  return (
    <article className="mx-auto max-w-md border-t border-[#ddd8cc] pt-5 text-left">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-[22px] leading-tight text-[#1b211d]">
          {item.name}
        </h3>
        <p className="shrink-0 text-[13px] text-[#1b211d]">
          {formatPrice(item.price)}
        </p>
      </div>
      <p className="mt-3 text-[13px] leading-6 text-[#626962]">
        {item.description}
      </p>
    </article>
  )
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
