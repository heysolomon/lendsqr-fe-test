import { z } from "zod"

export const userSchema = z.object({
  organization: z.string(),
  username: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  date_joined: z.string(),
  status: z.string(),
})

export type User = z.infer<typeof userSchema>
