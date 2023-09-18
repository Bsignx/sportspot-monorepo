import { FormRegisterProps } from '.'

import { Checkbox, Text, FormControl, FormLabel, FormErrorMessage } from '@sportspot/ui'

type CheckboxTermsProps = FormRegisterProps

export const CheckboxTerms = ({ errors, register }: CheckboxTermsProps) => (
  <FormControl isInvalid={!!errors.terms}>
    <FormLabel>
      <Checkbox display="flex" alignItems="center" colorScheme="whiteAlpha" {...register('terms')}>
        <Text fontSize="xs" pl={2} color="quaternary">
          By continuing you accept our Privacy Policy and Term of Use
        </Text>
      </Checkbox>
    </FormLabel>

    <FormErrorMessage>{errors.terms && errors.terms.message}</FormErrorMessage>
  </FormControl>
)
