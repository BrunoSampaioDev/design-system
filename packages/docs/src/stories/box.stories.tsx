import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@simple-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box compoenete childrean</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
