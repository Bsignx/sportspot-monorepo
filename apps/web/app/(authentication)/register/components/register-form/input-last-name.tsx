import { FormRegisterProps } from '.'

import {
  Input,
  Icons,
  InputGroup,
  FormControl,
  FormErrorMessage,
  InputLeftElement,
} from '@sportspot/ui'

type InputLastNameProps = FormRegisterProps

export const InputLastName = ({ errors, register }: InputLastNameProps) => (
  <FormControl isInvalid={!!errors.firstName}>
    <InputGroup>
      <InputLeftElement>
        <Icons.User set="light" primaryColor="#8A8788" />
      </InputLeftElement>
      <Input variant="outline" placeholder="Last name" {...register('lastName')} />
    </InputGroup>

    <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
  </FormControl>
)
