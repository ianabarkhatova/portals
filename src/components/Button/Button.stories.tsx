import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
}

export const LinkAsButton: Story = {
  args: {
    asChild: true,
    children: <a href="/sign-up">Sign Up</a>,
  },
}
