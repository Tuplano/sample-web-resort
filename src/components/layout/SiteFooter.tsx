const footerLinks = [
  'About',
  'Contact',
  'Privacy Policy',
  'Sustainability',
  'Careers',
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e1dfd7] bg-[#fbfaf7]" id="booking">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-[1fr_1.2fr_0.8fr] md:items-start md:px-10 lg:px-20">
        <div>
          <h2 className="font-serif text-[13px] tracking-[0.18em] text-[#1b211d]">
            LUMINA COAST
          </h2>
          <p className="mt-7 max-w-[280px] text-[13px] leading-7 text-[#697069]">
            A sanctuary of understated luxury and coastal serenity.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-9 gap-y-4 text-[13px] text-[#3f4741]">
          {footerLinks.map((link) => (
            <a className="transition-colors hover:text-[#1b211d]" href="/" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <p className="self-end text-[10px] uppercase leading-4 tracking-[0.12em] text-[#4f5751] md:text-right">
          © 2024 Lumina Coast Resort &amp;
          <br />
          Spa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
