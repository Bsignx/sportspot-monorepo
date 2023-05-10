import { FormRegisterProps } from '.'

import { Chakra } from '@sportspot/ui'

type InputLastNameProps = FormRegisterProps

export const InputLastName = ({ errors, register }: InputLastNameProps) => {
  const isLastNameError = !!errors.firstName
  const notNumberRgx = /^[a-z \b\0]+$/i

  return (
    <Chakra.FormControl isInvalid={isLastNameError}>
      <Chakra.Input
        variant="outline"
        placeholder="Last name"
        {...register('lastName', {
          required: 'Last name required',
          maxLength: { value: 50, message: 'Maximum 50 characters allowed' },
          minLength: {
            value: 4,
            message: 'Minimum 4 characters required',
          },
          pattern: { value: notNumberRgx, message: 'Numbers are not allowed' },
        })}
      />

      <Chakra.FormErrorMessage>
        {errors.lastName && errors.lastName.message}
      </Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
