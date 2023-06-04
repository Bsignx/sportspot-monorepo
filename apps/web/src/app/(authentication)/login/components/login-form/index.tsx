'use client'

import { signIn } from 'next-auth/react'
import { InputEmail } from './input-email'
import { InputPassword } from './input-password'
import { signInForm, type SignInFormProps } from '~/utils/login-schema'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormRegister, FieldErrorsImpl } from 'react-hook-form'

import { VStack, Button, useToast } from '@sportspot/ui'

export type LoginFormInputs = {
  register: UseFormRegister<Record<string, SignInFormProps>>
  errors: Partial<FieldErrorsImpl<Record<string, SignInFormProps>>>
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
  } = useForm({ resolver: zodResolver(signInForm) })

  const toast = useToast()

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  async function onSubmit({ email, password }: SignInFormProps) {
    const status = await signIn('credentials', { redirect: false, email, password })

    const errorExists = Boolean(status?.error)

    if (errorExists) return toast({ title: status?.error, status: 'error' })
  }

  return (
    <VStack as="form" h="100%" onSubmit={handleSubmit(onSubmit)}>
      <VStack w="100%" spacing={4} flex="1">
        <InputEmail errors={errors} register={register} />

        <InputPassword errors={errors} register={register} />
      </VStack>
      <Button type="submit" w="full" bg="black" isDisabled={isDisabled} isLoading={isSubmitting}>
        Login
      </Button>
    </VStack>
  )
}
