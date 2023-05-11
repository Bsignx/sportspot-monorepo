import { FormLoginInputs } from '.'

import { Chakra } from '@sportspot/ui'

type InputPasswordProps = FormLoginInputs

export const InputPassword = ({ errors, register, rInput }: InputPasswordProps) => {
  const [isShowPassword, setShowPassword] = Chakra.useBoolean(false)

  const isPasswordError = !!errors.password
  const strongPassowrdRgx = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/

  return (
    <Chakra.FormControl w="min" isInvalid={isPasswordError}>
      <Chakra.InputGroup>
        <Chakra.InputLeftElement>
          <Chakra.Image src="/icons/form-icons/lock.svg" alt="mail input" boxSize="18.7px" />
        </Chakra.InputLeftElement>

        <Chakra.Input
          variant="outline"
          type={isShowPassword ? 'text' : 'password'}
          w={rInput}
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
        <Chakra.InputRightElement>
          <Chakra.Image
            src={isShowPassword ? '/icons/form-icons/show.svg' : '/icons/form-icons/hide.svg'}
            alt="show/hide password"
            boxSize="20px"
            cursor="pointer"
            onClick={setShowPassword.toggle}
          />
        </Chakra.InputRightElement>
      </Chakra.InputGroup>

      <Chakra.FormErrorMessage>
        {errors.password && errors.password.message}
      </Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
