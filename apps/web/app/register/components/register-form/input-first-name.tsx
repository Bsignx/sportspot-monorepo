import { FormRegisterProps } from '.'

import { Chakra } from '@sportspot/ui'

type InputFirstNameProps = FormRegisterProps

export const InputFirstName = ({ errors, register }: InputFirstNameProps) => {
  const isFirstNameError = !!errors.firstName
  const notNumberRgx = /^[a-z \b\0]+$/i

  return (
    <Chakra.FormControl isInvalid={isFirstNameError}>
      <Chakra.Input
        {...register('firstName', {
          required: 'Name required',
          maxLength: { value: 50, message: 'Maximum 50 characters allowed' },
          minLength: {
            value: 4,
            message: 'Minimum 4 characters required',
          },
          pattern: { value: notNumberRgx, message: 'Numbers are not allowed' },
        })}
        variant="outline"
        placeholder="First Name"
      />

      <Chakra.FormErrorMessage>
        {errors.firstName && errors.firstName.message}
      </Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
