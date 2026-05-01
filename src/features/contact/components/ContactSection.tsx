import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-20 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1fr] lg:items-start">
        <div>
          <h1 className="font-serif text-[34px] leading-tight text-[#1b211d]">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-lg text-[13px] leading-6 text-[#626962]">
            We look forward to welcoming you. Reach out to our concierge team to
            begin planning your stay.
          </p>
          <div className="mt-10 space-y-7 text-[12px] text-[#3f4741]">
            <ContactItem
              icon={<MapPin aria-hidden="true" size={16} strokeWidth={1.7} />}
              label="Address"
              value={
                <>
                  1 Coastal Drive
                  <br />
                  Lumina Bay, LB 90210
                </>
              }
            />
            <ContactItem
              icon={<Phone aria-hidden="true" size={16} strokeWidth={1.7} />}
              label="Phone"
              value="+1 (555) 123-4567"
            />
            <ContactItem
              icon={<Mail aria-hidden="true" size={16} strokeWidth={1.7} />}
              label="Email"
              value="reservations@luminacoast.com"
            />
          </div>
          <img
            alt="Illustrated map of Lumina Coast island"
            className="mt-10 aspect-[2.3/1] w-full rounded-[8px] object-cover shadow-[0_12px_32px_rgba(44,42,34,0.08)]"
            src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=84"
          />
        </div>

        <form className="rounded-[8px] border border-[#e2ded5] bg-[#fffdf8] p-8 shadow-[0_12px_32px_rgba(44,42,34,0.06)]">
          <div className="grid gap-8 md:grid-cols-2">
            <Field label="First Name" placeholder="Jane" />
            <Field label="Last Name" placeholder="Doe" />
          </div>
          <Field label="Email Address" placeholder="jane@example.com" type="email" />
          <label className="mt-8 block">
            <span className="text-[11px] text-[#3f4741]">Subject</span>
            <select className="mt-3 h-9 w-full border-0 border-b border-[#c9c5bb] bg-transparent text-[13px] text-[#303832] outline-none">
              <option>Reservations &amp; Booking</option>
              <option>Events</option>
              <option>Concierge</option>
            </select>
          </label>
          <label className="mt-8 block">
            <span className="text-[11px] text-[#3f4741]">Message</span>
            <textarea
              className="mt-3 min-h-[132px] w-full resize-none border-0 border-b border-[#c9c5bb] bg-transparent text-[13px] text-[#303832] outline-none"
              placeholder="How can we assist you?"
            />
          </label>
          <button
            className="mt-10 inline-flex h-11 w-full items-center justify-center bg-[#07342f] text-[10px] font-semibold uppercase text-white transition-colors hover:bg-[#0e433c]"
            type="button"
          >
            Send Message
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
      <span className="mt-1 text-[#07342f]">{icon}</span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f675f]">
          {label}
        </p>
        <p className="mt-1 leading-5 text-[#303832]">{value}</p>
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
    <label className="mt-8 block first:mt-0">
      <span className="text-[11px] text-[#3f4741]">{label}</span>
      <input
        className="mt-3 h-9 w-full border-0 border-b border-[#c9c5bb] bg-transparent text-[13px] text-[#303832] outline-none placeholder:text-[#8e938c]"
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
