import { LoginFormInputs } from '.'

import {
  Input,
  Icons,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
} from '@sportspot/ui'

type InputEmailProps = LoginFormInputs

export const InputEmail = ({ errors, register }: InputEmailProps) => (
  <FormControl isInvalid={!!errors.email}>
    <InputGroup>
      <InputLeftElement color="quaternary">
        <Icons.Message />
      </InputLeftElement>

      <Input variant="outline" placeholder="Email" hasIcon {...register('email')} />
    </InputGroup>

    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
  </FormControl>
)
