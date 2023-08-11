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
      <InputLeftElement color="gray.300">
        <Icons.User set="light" />
      </InputLeftElement>

      <Input variant="outline" placeholder="First Name" hasIcon {...register('firstName')} />
    </InputGroup>

    <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
  </FormControl>
)
