import { FormRegisterProps } from '.'

import {
  Input,
  Icons,
  InputGroup,
  useBoolean,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputRightElement,
} from '@sportspot/ui'

type InputPasswordProps = FormRegisterProps

export const InputPassword = ({ errors, register }: InputPasswordProps) => {
  const [isVisible, setVisible] = useBoolean(false)

  return (
    <FormControl isInvalid={!!errors.password}>
      <InputGroup>
        <InputLeftElement>
          <Icons.Lock primaryColor="#8A8788" />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="outline"
          placeholder="Password"
          {...register('password')}
        />

        <InputRightElement cursor="pointer" color="#ADA4A5" onClick={setVisible.toggle}>
          {isVisible ? <Icons.visible.Show /> : <Icons.visible.Hide />}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
    </FormControl>
  )
}
