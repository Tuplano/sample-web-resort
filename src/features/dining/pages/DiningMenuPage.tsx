import type { MenuItem } from '@/types/dining'

export function DiningMenuPage({ menuItems }: { menuItems: MenuItem[] }) {
  const appetizers = menuItems.filter((item) => item.category === 'appetizers')
  const mains = menuItems.filter((item) => item.category === 'mains')
  const desserts = menuItems.filter((item) => item.category === 'desserts')

  return (
    <>
      <section
        className="relative flex min-h-[430px] items-center justify-center bg-cover bg-center px-6 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 28, 31, 0.32), rgba(12, 28, 31, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=84')",
        }}
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/86">
            The Azure Table
          </p>
          <h1 className="font-serif text-[48px] leading-none md:text-[64px]">
            Culinary Sanctuary
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-white/95">
            Experience a symphony of coastal flavors, where fresh, locally
            sourced seafood meets masterful preparation in an atmosphere of
            understated luxury.
          </p>
        </div>
      </section>

      <section className="grid gap-14 px-6 py-20 md:px-10 lg:grid-cols-[190px_1fr] lg:px-20 lg:py-24">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 border-l border-[#1b211d] pl-5 text-[12px] text-[#626962]">
            {['Appetizers', 'Main Courses', 'Desserts', 'Wine Pairings'].map((item) => (
              <a
                className="block py-3 transition-colors first:text-[#1b211d] hover:text-[#1b211d]"
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <div>
          <MenuSection id="appetizers" items={appetizers} title="Appetizers" />

          <section className="mt-28 text-center" id="main-courses">
            <h2 className="font-serif text-[36px] leading-tight">Main Courses</h2>
            <div className="mx-auto mt-4 h-px w-12 bg-[#c7c1b6]" />
            <article className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[8px] border border-[#e1ded5] bg-[#fffdf8]">
              <img
                alt="Pan-seared Chilean seabass with herbs"
                className="aspect-[2.2/1] w-full object-cover"
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=84"
              />
              <div className="px-8 py-10">
                <h3 className="font-serif text-[30px] leading-tight">
                  Pan-Seared Chilean Seabass
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-[13px] italic leading-6 text-[#626962]">
                  Our signature catch. Served over a bed of saffron-infused
                  cauliflower puree, braised leeks, and a delicate Meyer lemon
                  beurre blanc.
                </p>
                <p className="mt-6 font-serif text-[18px]">52</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#24413b]">
                  Pairing Suggestion
                </p>
              </div>
            </article>
            <div className="mx-auto mt-16 max-w-3xl space-y-16">
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
      <div className="mt-12 grid gap-14 md:grid-cols-2">
        {items.map((item) => (
          <MenuItemView item={item} key={item.name} />
        ))}
      </div>
    </section>
  )
}

function MenuItemView({ item }: { item: MenuItem }) {
  return (
    <article className="mx-auto max-w-sm text-center">
      <h3 className="text-[13px] uppercase tracking-[0.12em] text-[#1b211d]">
        {item.name}
      </h3>
      <p className="mt-2 font-serif text-[15px] text-[#626962]">{item.price}</p>
      <p className="mt-3 text-[13px] italic leading-6 text-[#626962]">
        {item.description}
      </p>
    </article>
  )
}
