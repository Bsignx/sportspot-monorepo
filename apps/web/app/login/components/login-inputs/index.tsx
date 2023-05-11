'use client'

import { InputEmail } from './input-email'
import { InputPassword } from './input-password'
import { responsiveLogin } from 'helpers/responsives'

import { signIn } from 'next-auth/react'

import { VStack, Button, NextChakra, Chakra } from '@sportspot/ui'

import { useForm, UseFormRegister, FieldErrorsImpl } from 'react-hook-form'

type FormInputs = {
  email: string
  password: string
}

export type FormLoginInputs = {
  register: UseFormRegister<FormInputs>
  errors: Partial<FieldErrorsImpl<FormInputs>>
  rInput: Chakra.ResponsiveObject<string | number>
}

export const LoginInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid, isSubmitting },
  } = useForm<FormInputs>()

  const isErrorExists = Boolean(Object.keys(errors).length)
  const isDisabled = (isSubmitted && !isValid) || isErrorExists

  const {
    form: { rInput, rBottomBtn },
  } = responsiveLogin(isErrorExists)

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
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} pos="relative">
        <InputEmail errors={errors} register={register} rInput={rInput} />

        <InputPassword errors={errors} register={register} rInput={rInput} />

        <NextChakra.Link
          pos="absolute"
          bottom="-9"
          as={NextChakra.Link}
          href="#"
          opacity=".7"
          textAlign="center"
          color="grayscale300"
          fontFamily="altHeading"
        >
          Forgot your password?
        </NextChakra.Link>
      </VStack>

      <Button
        pos="relative"
        bottom={rBottomBtn}
        type="submit"
        bg="black"
        isDisabled={isDisabled}
        isLoading={isSubmitting}
        w={rInput}
      >
        Login
      </Button>
    </VStack>
  )
}
