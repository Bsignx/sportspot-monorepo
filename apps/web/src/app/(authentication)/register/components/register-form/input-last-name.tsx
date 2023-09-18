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
      <InputLeftElement color="quaternary">
        <Icons.User set="light" />
      </InputLeftElement>
      <Input variant="outline" placeholder="Last name" hasIcon {...register('lastName')} />
    </InputGroup>

    <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
  </FormControl>
)
