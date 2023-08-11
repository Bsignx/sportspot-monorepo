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
        <InputLeftElement color="gray.300">
          <Icons.Lock />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="outline"
          placeholder="Password"
          hasIcon
          {...register('password')}
        />

        <InputRightElement cursor="pointer" color="gray.400" onClick={setVisible.toggle}>
          {isVisible ? <Icons.visible.Show /> : <Icons.visible.Hide />}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
    </FormControl>
  )
}
