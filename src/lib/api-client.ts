import axios from 'axios'

import { attachApiInterceptors } from '@/middleware/api-interceptor'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

attachApiInterceptors(apiClient)
