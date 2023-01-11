import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@simple-ui/react'

export default {
  title: 'Data ddisplay/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/BrunoSampaioDev.png',
    alt: 'Bruno Smpaio',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
