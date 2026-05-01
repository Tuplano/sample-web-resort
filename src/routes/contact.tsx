import { createFileRoute } from '@tanstack/react-router'

import { ContactPage } from '@/features/contact/pages/ContactPage'

export const Route = createFileRoute('/contact')({
  component: ContactRoute,
})

function ContactRoute() {
  return <ContactPage />
}
