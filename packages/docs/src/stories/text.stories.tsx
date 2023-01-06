import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@simple-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor modi, doloribus atque reiciendis perferendis consectetur amet! Quos, dignissimos eaque vitae nulla eveniet quasi sapiente omnis aliquid ab possimus reprehenderit.',
  },
  argTypes: {
    as: {
      type: 'string',
      defaultValue: 'p',
      control: { type: 'select', options: ['p', 'strong'] },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'StrongText',
    as: 'strong',
  },
}
