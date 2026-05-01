import { Pencil } from 'lucide-react'

export function ReservationSummary() {
  return (
    <aside className="rounded-[10px] border border-[#d9d5cc] bg-[#f9f7f1] p-8 shadow-[0_18px_42px_rgba(34,31,25,0.08)]">
      <h2 className="font-serif text-[34px] leading-tight">Reservation Summary</h2>
      <div className="mt-6 h-px bg-[#d4d0c6]" />
      <img
        alt="Oceanfront villa bedroom facing the sea"
        className="mt-5 aspect-[1.65/1] w-full rounded-[8px] object-cover"
        src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=84"
      />

      <div className="mt-8">
        <h3 className="text-[18px] font-semibold">Oceanfront Villa</h3>
        <p className="mt-2 text-[14px] text-[#626962]">2 Adults • 7 Nights</p>
      </div>

      <SummaryRow label="May 15 - May 22, 2024" editable />
      <SummaryRow label="Add-ons" value="Select from available options" />

      <div className="mt-8 space-y-4 border-b border-[#d4d0c6] pb-6 text-[15px]">
        <PriceRow label="Room Rate (7 nights)" value="$4,550" />
        <PriceRow label="Taxes & Fees" value="$546" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-[17px] font-semibold">Total</p>
        <p className="font-serif text-[32px] leading-none">$5,096</p>
      </div>
      <p className="mt-9 text-center text-[13px] text-[#7b817b]">
        Free cancellation until May 1, 2024
      </p>
    </aside>
  )
}

function SummaryRow({
  editable,
  label,
  value,
}: {
  editable?: boolean
  label: string
  value?: string
}) {
  return (
    <div className="mt-6 flex items-center justify-between border-y border-[#d4d0c6] py-5 text-[15px]">
      <span>{label}</span>
      {value ? <span className="text-[#777d77]">{value}</span> : null}
      {editable ? <Pencil aria-hidden="true" size={14} strokeWidth={1.7} /> : null}
    </div>
  )
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
