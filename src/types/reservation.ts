import type { LucideIcon } from 'lucide-react'

export interface ReservationField {
  label: string
  value: string
  icon: LucideIcon
  trailing?: LucideIcon
}

export interface ReservationAddon {
  name: string
  description: string
  icon: LucideIcon
}
