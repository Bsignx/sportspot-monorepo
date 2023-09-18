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
        <InputLeftElement color="quaternary">
          <Icons.Lock set="light" />
        </InputLeftElement>
        <Input
          type={isVisible ? 'text' : 'password'}
          variant="outline"
          placeholder="Password"
          hasIcon
          {...register('password')}
        />

        <InputRightElement cursor="pointer" color="quaternary" onClick={setVisible.toggle}>
          {isVisible ? <Icons.visible.Hide /> : <Icons.visible.Hide />}
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
    </FormControl>
  )
}
