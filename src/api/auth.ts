import type { AuthSession, LoginCredentials } from '@/types/auth'
import { authSessionSchema } from '@/schemas/auth'
import { apiClient } from '@/lib/api-client'

export async function login(credentials: LoginCredentials): Promise<AuthSession> {
  const response = await apiClient.post('/auth/login', credentials)

  return authSessionSchema.parse(response.data)
}

export async function logout(): Promise<void> {
  await apiClient.post('/auth/logout')
}
