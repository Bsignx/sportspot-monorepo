import { FormRegisterProps } from '.'

import { Chakra, Text } from '@sportspot/ui'

type CheckboxTermsProps = FormRegisterProps

export const CheckboxTerms = ({ errors, register, rInput }: CheckboxTermsProps) => {
  const isTermsError = !!errors.terms

  return (
    <Chakra.FormControl pl={5} isInvalid={isTermsError}>
      <Chakra.Checkbox
        w={rInput}
        {...register('terms', { required: 'You accept the terms to continue' })}
        display="flex"
        alignItems="center"
      >
        <Text pt={2} fontSize="12px" color="grayscale300" fontFamily="altHeading">
          By continuing you accept our Privacy Policy and Term of Use
        </Text>
      </Chakra.Checkbox>

      <Chakra.FormErrorMessage>{errors.terms && errors.terms.message}</Chakra.FormErrorMessage>
    </Chakra.FormControl>
  )
}
