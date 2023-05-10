import { FormLoginInputs } from '.'

import { Chakra } from '@sportspot/ui'

type InputPasswordProps = FormLoginInputs

export const InputPassword = ({ errors, register }: InputPasswordProps) => {
  const strongPassowrdRgx = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/

  return (
    <Chakra.FormControl isInvalid={!!errors.password}>
      <Chakra.Input
        variant="outline"
        placeholder="Password"
        {...register('password', {
          required: 'Password required',
          pattern: {
            value: strongPassowrdRgx,
            message:
              'Password must contain: At least 8 characters, At least one uppercase letter, At least one special character (!@#$&*)',
          },
        })}
      />

      <Chakra.FormErrorMessage>
        {errors.password && errors.password.message}
      </Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
