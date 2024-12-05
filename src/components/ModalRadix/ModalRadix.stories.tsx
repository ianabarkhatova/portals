import type { Meta, StoryObj } from "@storybook/react"

import { ModalRadix } from "./ModalRadix"
import { useState } from "react"
import { Button } from "../Button/Button.tsx"

const meta = {
  component: ModalRadix,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof meta>

export const BaseModal: Story = {
  render: function Render (args)  {
    const [modal, setModal] = useState(false)

    return (
      <>
        <Button onClick={() => setModal(true)}>open modal</Button>
        <ModalRadix {...args} open={modal} onClose={() => setModal(false)} modalTitle={"Modal title"}>
          <div>Lorem ipsum dolor sit amet.</div>
        </ModalRadix>
      </>
    )
  },
}

export const SmallModal: Story = {
  render: function Render (args) {
    const [modal, setModal] = useState(false)

    return (
      <>
        <Button onClick={() => setModal(true)}>open modal</Button>
        <ModalRadix {...args} open={modal} onClose={() => setModal(false)} modalTitle={"Modal title"} size={'sm'}>
          <div>Lorem ipsum dolor sit amet.</div>
        </ModalRadix>
      </>
    )
  },
}

export const LargeModal: Story = {
  render: function Render (args) {
    const [modal, setModal] = useState(false)

    return (
      <>
        <Button onClick={() => setModal(true)}>open modal</Button>
        <ModalRadix {...args} open={modal} onClose={() => setModal(false)} modalTitle={"Modal title"} size={'lg'}>
          <div>Lorem ipsum dolor sit amet.</div>
        </ModalRadix>
      </>
    )
  },
}
