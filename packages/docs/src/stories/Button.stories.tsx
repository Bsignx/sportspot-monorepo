import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@sportspot/ui'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Noup',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}
