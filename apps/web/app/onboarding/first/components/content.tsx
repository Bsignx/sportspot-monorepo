'use client'

import { Center, AbsoluteCenter } from '@sportspot/ui'

import { MediumSizeLogo } from '../../../components/logo/medium-size-logo'

const Content = () => {
  return (
    <Center>
      <AbsoluteCenter axis="both">
        <h1>OnboardingFirst</h1>
        <MediumSizeLogo />
      </AbsoluteCenter>
    </Center>
  )
}

export default Content
