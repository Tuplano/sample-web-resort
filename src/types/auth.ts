export interface User {
  id: string
  email: string
  name: string
  role: 'guest' | 'member' | 'admin'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthSession {
  user: User
  accessToken: string
}
