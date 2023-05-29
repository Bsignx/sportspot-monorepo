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
      <InputLeftElement>
        <Icons.Message primaryColor="#8A8788" />
      </InputLeftElement>

      <Input variant="outline" placeholder="Email" {...register('email')} />
    </InputGroup>

    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
  </FormControl>
)
