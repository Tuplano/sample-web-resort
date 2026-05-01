import { createQueryClient } from '@/config/queryClient'

export function getContext() {
  const queryClient = createQueryClient()

  return {
    queryClient,
  }
}
export default function TanstackQueryProvider() {}
