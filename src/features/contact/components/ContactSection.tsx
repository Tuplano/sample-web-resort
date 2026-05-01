import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

export function ContactHero() {
  return (
    <section
      className="relative flex min-h-[580px] items-center justify-center bg-cover bg-center px-6 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(18, 37, 32, 0.24), rgba(18, 37, 32, 0.42)), url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=84')",
      }}
    >
      <div className="max-w-3xl">
        <h1 className="font-serif text-[50px] leading-none md:text-[64px]">
          Get in Touch
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/95">
          Our dedicated concierge team is poised to tailor your experience to
          perfection. Whether planning a stay or inquiring about our sanctuary,
          we are here to assist with every detail.
        </p>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <h2 className="font-serif text-[32px] leading-tight text-[#1b211d]">
            Sanctuary Details
          </h2>
          <div className="mt-10 space-y-8 text-[13px] text-[#25322d]">
            <ContactItem
              icon={<MapPin aria-hidden="true" size={17} strokeWidth={1.7} />}
              label="Address"
              value={
                <>
                  1 Coastal Drive, Lumina Bay
                  <br />
                  Pristine Shores, 90210
                </>
              }
            />
            <ContactItem
              icon={<Phone aria-hidden="true" size={17} strokeWidth={1.7} />}
              label="Concierge Phone"
              value="+1 555 123 4567"
            />
            <ContactItem
              icon={<Mail aria-hidden="true" size={17} strokeWidth={1.7} />}
              label="Electronic Correspondence"
              value="reservations@luminacoast.com"
            />
          </div>

          <article className="mt-16 overflow-hidden rounded-[8px] bg-white shadow-[0_16px_36px_rgba(44,42,34,0.08)]">
            <div
              className="relative min-h-[245px] bg-cover bg-center grayscale"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20, 24, 22, 0.08), rgba(20, 24, 22, 0.18)), url('https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=84')",
              }}
            >
              <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] uppercase tracking-[0.08em] text-[#1b211d]">
                <MapPin aria-hidden="true" size={16} strokeWidth={1.7} />
                Lumina Coast
              </span>
            </div>
            <a
              className="flex h-16 items-center justify-between px-6 text-[12px] uppercase tracking-[0.08em] text-[#1b211d]"
              href="/contact"
            >
              View Navigation
              <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.7} />
            </a>
          </article>
        </div>

        <form className="rounded-[8px] border border-[#e2ded5] bg-white p-8 shadow-[0_20px_48px_rgba(44,42,34,0.08)] lg:p-12">
          <div className="grid gap-7 md:grid-cols-2">
            <Field label="Full Name" placeholder="E.g. Julian Montgomery" />
            <Field label="Email Address" placeholder="julian@example.com" type="email" />
          </div>
          <label className="mt-8 block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3f4741]">
              Subject of Inquiry
            </span>
            <select className="mt-3 h-12 w-full border-0 bg-[#f0eee8] px-1 text-[14px] text-[#303832] outline-none">
              <option>Reservation Inquiry</option>
              <option>Private Dining</option>
              <option>Concierge Request</option>
            </select>
          </label>
          <label className="mt-8 block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3f4741]">
              Your Message
            </span>
            <textarea
              className="mt-3 min-h-[160px] w-full resize-none border-0 bg-[#f0eee8] p-1 text-[14px] text-[#303832] outline-none placeholder:text-[#737972]"
              placeholder="How may we assist you in crafting your perfect stay?"
            />
          </label>
          <button
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#07342f] px-9 text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(7,52,47,0.18)] transition-colors hover:bg-[#0e433c]"
            type="button"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export function StayConnected() {
  return (
    <section className="bg-[#efede7] px-6 py-20 md:px-10 lg:px-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <h2 className="font-serif text-[32px] leading-tight">Stay Connected</h2>
          <p className="mt-5 max-w-xl text-[13px] leading-7 text-[#626962]">
            Join our exclusive circle to receive curated updates, seasonal
            escapes, and retreat invitations.
          </p>
        </div>
        <form className="flex flex-col gap-4 sm:flex-row">
          <input
            className="h-14 flex-1 rounded-full border border-[#d8d4ca] bg-white px-8 text-[14px] outline-none placeholder:text-[#858a84]"
            placeholder="Your email address"
            type="email"
          />
          <button
            className="h-14 rounded-full bg-[#3f668a] px-9 text-[13px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#345878]"
            type="button"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex gap-5">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#d7eaff] text-[#174b78]">
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#345366]">
          {label}
        </p>
        <p className="mt-2 leading-5">{value}</p>
      </div>
    </div>
  )
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string
  placeholder: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3f4741]">
        {label}
      </span>
      <input
        className="mt-3 h-12 w-full border-0 bg-[#f0eee8] px-1 text-[14px] text-[#303832] outline-none placeholder:text-[#737972]"
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
