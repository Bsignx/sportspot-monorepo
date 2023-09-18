import { FormRegisterProps } from '.'

import {
  Input,
  Icons,
  InputGroup,
  FormControl,
  InputLeftElement,
  FormErrorMessage,
} from '@sportspot/ui'

type InputEmailProps = FormRegisterProps

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
