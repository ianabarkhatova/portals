import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

/** Secondary variant*/
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

/** Outlined variant*/
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
}

/** Link as Button variant*/
export const LinkAsButton: Story = {
  args: {
    asChild: true,
    children: <a href="/sign-up">Sign Up</a>,
  },
}
