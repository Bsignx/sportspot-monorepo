'use client'

import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormRegister, FieldErrorsImpl } from 'react-hook-form'

import { api } from '~/helpers/trpc/api'

import { InputEmail } from './input-email'
import { InputPassword } from './input-password'
import { CheckboxTerms } from './checkbox-terms'
import { InputLastName } from './input-last-name'
import { InputFirstName } from './input-first-name'
import { registerForm, RegisterFormProps } from '~/utils/login-schema'

import { VStack, Button, useToast } from '@sportspot/ui'

export type FormRegisterProps = {
  register: UseFormRegister<Record<string, RegisterFormProps>>
  errors: Partial<FieldErrorsImpl<Record<string, RegisterFormProps>>>
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
  } = useForm({ resolver: zodResolver(registerForm) })

  const router = useRouter()
  const toast = useToast()

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  const { mutate, isLoading } = api.userAcc.register.useMutation({
    onSuccess() {
      router.push('/login')
    },
    onError({ message }) {
      toast({ title: message, status: 'error' })
    },
  })

  function onSubmit({ firstName, lastName, email, password }: RegisterFormProps) {
    mutate({ firstName, lastName, email, password })
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
        isLoading={isSubmitting || isLoading}
      >
        Register
      </Button>
    </VStack>
  )
}
