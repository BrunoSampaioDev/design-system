import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@simple-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  argTypes: {
    as: {
      type: 'string',
      defaultValue: 'h2',
      control: {
        type: 'select',
        options: ['h1', 'h1', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrao o heading sempre sera `h2`, porem podemos mudar utilizando a propriedade `as`',
      },
    },
  },
}
