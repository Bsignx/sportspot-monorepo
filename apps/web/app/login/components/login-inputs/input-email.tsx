import { FormLoginInputs } from '.'

import { Chakra } from '@sportspot/ui'

type InputEmailProps = FormLoginInputs

export const InputEmail = ({ errors, register }: InputEmailProps) => {
  const validEmailRgx = /^\S+@\S+$/i
  const isEmailError = !!errors.email

  return (
    <Chakra.FormControl isInvalid={isEmailError}>
      <Chakra.Input
        variant="outline"
        placeholder="Email"
        {...register('email', {
          required: 'Email required',
          pattern: { value: validEmailRgx, message: 'Invalid email' },
          maxLength: {
            value: 80,
            message: 'Maximum 80 characters allowed',
          },
        })}
      />

      <Chakra.FormErrorMessage>{errors.email && errors.email.message}</Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
