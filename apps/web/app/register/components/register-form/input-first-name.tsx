import { FormRegisterProps } from '.'

import { Chakra } from '@sportspot/ui'

type InputFirstNameProps = FormRegisterProps

export const InputFirstName = ({ errors, register, rInput }: InputFirstNameProps) => {
  const isFirstNameError = !!errors.firstName
  const notNumberRgx = /^[a-z \b\0]+$/i

  return (
    <Chakra.FormControl w="min" isInvalid={isFirstNameError}>
      <Chakra.InputGroup>
        <Chakra.InputLeftElement>
          <Chakra.Image src="/icons/form-icons/profile.svg" alt="first name input" boxSize="20px" />
        </Chakra.InputLeftElement>
        <Chakra.Input
          w={rInput}
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
      </Chakra.InputGroup>

      <Chakra.FormErrorMessage>
        {errors.firstName && errors.firstName.message}
      </Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
