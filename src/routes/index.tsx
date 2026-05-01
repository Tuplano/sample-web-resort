import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { HomePage } from '@/features/home/pages/HomePage'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b211d]">
      <SiteHeader active="home" />
      <HomePage />
      <SiteFooter />
    </main>
  )
}
