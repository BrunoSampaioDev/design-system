import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@simple-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
  argTypes: {
    variant: {
      type: 'string',
      defaultValue: 'primary',
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    size: {
      defaultValue: 'small',
      control: { type: 'select', options: ['small', 'big'] },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    size: 'small',
  },
}
