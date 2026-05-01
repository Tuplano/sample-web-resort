import { ReservationForm } from '@/features/reservation/components/ReservationForm'
import { ReservationSummary } from '@/features/reservation/components/ReservationSummary'

export function ReservationPage() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
        <div>
          <h1 className="font-serif text-[56px] leading-none text-[#07342f] md:text-[70px]">
            Reserve Your Stay
          </h1>
          <p className="mt-5 text-[18px] text-[#1f2824]">
            Complete your booking details below to secure your sanctuary at
            Lumina Coast.
          </p>
          <div className="mt-16">
            <ReservationForm />
          </div>
        </div>
        <ReservationSummary />
      </div>
    </section>
  )
}
