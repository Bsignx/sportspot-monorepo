import { FormRegisterProps } from '.'

import { Checkbox, Text, FormControl, FormLabel, FormErrorMessage } from '@sportspot/ui'

type CheckboxTermsProps = FormRegisterProps

export const CheckboxTerms = ({ errors, register }: CheckboxTermsProps) => (
  <FormControl isInvalid={!!errors.terms}>
    <FormLabel>
      <Checkbox display="flex" alignItems="center" {...register('terms')}>
        <Text fontSize="sm" pl={2} color="gray.300">
          By continuing you accept our Privacy Policy and Term of Use
        </Text>
      </Checkbox>
    </FormLabel>

    <FormErrorMessage>{errors.terms && errors.terms.message}</FormErrorMessage>
  </FormControl>
)
