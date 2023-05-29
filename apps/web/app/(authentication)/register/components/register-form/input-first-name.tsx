import { FormRegisterProps } from '.'

import {
  Input,
  Icons,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
} from '@sportspot/ui'

type InputFirstNameProps = FormRegisterProps

export const InputFirstName = ({ errors, register }: InputFirstNameProps) => (
  <FormControl isInvalid={!!errors.firstName}>
    <InputGroup>
      <InputLeftElement>
        <Icons.User set="light" primaryColor="#8A8788" />
      </InputLeftElement>

      <Input variant="outline" placeholder="First Name" {...register('firstName')} />
    </InputGroup>

    <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
  </FormControl>
)
