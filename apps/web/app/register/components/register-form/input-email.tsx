import { FormRegisterProps } from '.'

import { Chakra } from '@sportspot/ui'

type InputEmailProps = FormRegisterProps

export const InputEmail = ({ errors, register, rInput }: InputEmailProps) => {
  const validEmailRgx = /^\S+@\S+$/i
  const isEmailError = !!errors.email

  return (
    <Chakra.FormControl w="min" isInvalid={isEmailError}>
      <Chakra.InputGroup>
        <Chakra.InputLeftElement>
          <Chakra.Image src="/icons/form-icons/mail.svg" alt="mail input" boxSize="18.5px" />
        </Chakra.InputLeftElement>
        <Chakra.Input
          w={rInput}
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
      </Chakra.InputGroup>

      <Chakra.FormErrorMessage>{errors.email && errors.email.message}</Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
