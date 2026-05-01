import { z } from 'zod'

export const loginCredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(['guest', 'member', 'admin']),
})

export const authSessionSchema = z.object({
  user: userSchema,
  accessToken: z.string().min(1),
})
