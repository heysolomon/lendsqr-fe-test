import { z } from "zod"

export const userSchema = z.object({
  _id: z.string().optional(),
  index: z.number().optional(),
  organization: z.string(),
  username: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  date_joined: z.string(),
  status: z.string(),
  full_name: z.string().optional(),
  bvn: z.number().optional(),
  gender: z.string().optional(),
  marital_status: z.string().optional(),
  children: z.union([z.number(), z.string()]).optional(),
  residence_type: z.string().optional(),
  education_level: z.string().optional(),
  employment_status: z.string().optional(),
  sector_of_employment: z.string().optional(),
  duration_of_employment: z.string().optional(),
  office_email: z.string().optional(),
  monthly_income: z.string().optional(),
  loan_repayment: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  guarantors: z.array(z.object({
    full_name: z.string(),
    phone_number: z.string(),
    relationship: z.string(),
    email: z.string()
  })).optional()
})

export type User = z.infer<typeof userSchema>
