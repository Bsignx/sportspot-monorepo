import { LoginFormInputs } from '.'

import {
  Input,
  Icons,
  useBoolean,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
  InputRightElement,
} from '@sportspot/ui'

type InputPasswordProps = LoginFormInputs

export const InputPassword = ({ errors, register }: InputPasswordProps) => {
  const [isVisible, setVisible] = useBoolean(false)

  return (
    <FormControl isInvalid={!!errors.password}>
      <InputGroup>
        <InputLeftElement color="gray.300">
          <Icons.Lock set="light" />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="outline"
          placeholder="Password"
          {...register('password')}
        />

        <InputRightElement cursor="pointer" color="gray.400" onClick={setVisible.toggle}>
          {isVisible ? <Icons.visible.Hide /> : <Icons.visible.Hide />}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
    </FormControl>
  )
}
