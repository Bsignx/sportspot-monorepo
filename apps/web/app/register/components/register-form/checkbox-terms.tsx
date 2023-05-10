import { FormRegisterProps } from '.'

import { Chakra, Text } from '@sportspot/ui'

type CheckboxTermsProps = FormRegisterProps

export const CheckboxTerms = ({ errors, register }: CheckboxTermsProps) => {
  const isTermsError = !!errors.terms

  return (
    <Chakra.FormControl isInvalid={isTermsError}>
      <Chakra.FormLabel>
        <Chakra.Checkbox
          {...register('terms', { required: 'You accept the terms to continue' })}
          display="flex"
          alignItems="center"
        >
          <Text fontSize="sm" pl={2} color="grayscale300">
            By continuing you accept our Privacy Policy and Term of Use
          </Text>
        </Chakra.Checkbox>
      </Chakra.FormLabel>

      <Chakra.FormErrorMessage>{errors.terms && errors.terms.message}</Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
