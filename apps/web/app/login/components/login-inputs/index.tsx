'use client'

import { InputEmail } from './input-email'
import { InputPassword } from './input-password'

import { signIn } from 'next-auth/react'

import { VStack, Button } from '@sportspot/ui'

import { useForm, UseFormRegister, FieldErrorsImpl } from 'react-hook-form'

type FormInputs = {
  email: string
  password: string
}

export type FormLoginInputs = {
  register: UseFormRegister<FormInputs>
  errors: Partial<FieldErrorsImpl<FormInputs>>
}

export const LoginInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
  } = useForm<FormInputs>()

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  async function onSubmit({ email, password }: FormInputs) {
    try {
      console.log(email, password)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' }) // Api verify exists user and return credentials
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <InputEmail errors={errors} register={register} />

      <InputPassword errors={errors} register={register} />

      <Button
        type="submit"
        pos="absolute"
        top="547px"
        w="full"
        bg="black"
        isDisabled={isDisabled}
        isLoading={isSubmitting}
      >
        Login
      </Button>
    </VStack>
  )
}
