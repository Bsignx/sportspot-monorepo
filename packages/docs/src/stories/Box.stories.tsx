import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@sportspot/ui'

export default {
  title: 'Box',
  component: Box,

  args: {
    children: (
      <>
        <h1>Box</h1>
        <p>Box is a component that can be used to create a container for other components.</p>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    bgColor: 'red.500',
  },
}
