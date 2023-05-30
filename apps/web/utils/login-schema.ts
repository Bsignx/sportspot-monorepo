import { z } from 'zod'

export const signInForm = z.object({
  email: z
    .string()
    .toLowerCase()
    .nonempty('Email required')
    .email('Invalid email')
    .max(80, 'Maximum 80 characters allowed'),
  password: z
    .string()
    .nonempty('Password required')
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/,
      'Password must contain: At least 8 characters, At least one uppercase letter, At least one special character (!@#$&*)',
    ),
})

export const registerForm = z.object({
  firstName: z
    .string()
    .nonempty('First name required')
    .min(2, 'Minimum 2 characters required')
    .max(32, 'Maximum 32 characters allowed')
    .refine((name) => name.split(' ').length === 1, 'First Name should be a single word')
    .transform((name) =>
      name
        .trim()
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase()),
    ),

  lastName: z
    .string()
    .nonempty('Last name required')
    .min(2, 'Minimum 2 characters required')
    .max(32, 'Maximum 32 characters allowed')
    .refine((name) => name.split(' ').length === 1, 'Last Name should be a single word')
    .transform((name) =>
      name
        .trim()
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase()),
    ),

  email: z
    .string()
    .toLowerCase()
    .nonempty('Email required')
    .email('Invalid email')
    .max(80, 'Maximum 80 characters allowed'),

  password: z
    .string()
    .nonempty('Password required')
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/,
      'Password must contain: At least 8 characters, At least one uppercase letter, At least one special character (!@#$&*)',
    ),

  terms: z.boolean().refine((value) => value === true, { message: 'You must check the terms box' }),
})

export type SignInFormProps = z.infer<typeof signInForm>

export type RegisterFormProps = z.infer<typeof registerForm>
