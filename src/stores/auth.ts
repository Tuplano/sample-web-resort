import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { AuthSession, LoginCredentials, User } from '@/types/auth'

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials, session: AuthSession) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      login: (_credentials, session) =>
        set({
          user: session.user,
          accessToken: session.accessToken,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'lumina-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken, isAuthenticated, user }) => ({
        accessToken,
        isAuthenticated,
        user,
      }),
    },
  ),
)
