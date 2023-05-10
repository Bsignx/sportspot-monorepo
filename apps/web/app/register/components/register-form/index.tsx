'use client'

import { InputEmail } from './input-email'
import { InputPassword } from './input-password'
import { CheckboxTerms } from './checkbox-terms'
import { InputLastName } from './input-last-name'
import { InputFirstName } from './input-first-name'

import { signIn } from 'next-auth/react'

import { VStack, Button } from '@sportspot/ui'

import { useForm, UseFormRegister, FieldErrorsImpl } from 'react-hook-form'

type FormInputs = {
  firstName: string
  lastName: string
  email: string
  password: string
  terms: string
}

export type FormRegisterProps = {
  register: UseFormRegister<FormInputs>
  errors: Partial<FieldErrorsImpl<FormInputs>>
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
  } = useForm<FormInputs>()

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  async function onSubmit(data: FormInputs) {
    try {
      const { terms, ...formData } = data

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const res = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: '/',
      }) // verify user existents and sign In

      if (!res) {
        console.log('if the user does not exist, create a new account')
      }

      console.log(`Terms Accepted => ${terms}`)

      console.table(formData)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <InputFirstName errors={errors} register={register} />

      <InputLastName errors={errors} register={register} />

      <InputEmail errors={errors} register={register} />

      <InputPassword errors={errors} register={register} />

      <CheckboxTerms errors={errors} register={register} />

      <Button
        type="submit"
        pos="absolute"
        top="547px"
        w="full"
        bg="black"
        isDisabled={isDisabled}
        isLoading={isSubmitting}
      >
        Register
      </Button>
    </VStack>
  )
}
