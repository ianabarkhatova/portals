import s from "./ModalRadix.module.css"
import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { ComponentPropsWithoutRef } from "react"
import clsx from "clsx"

type ModalSize = "lg" | "md" | "sm"

type Props = {
  open: boolean
  onClose: () => void
  modalTitle: string
  size?: ModalSize
} & ComponentPropsWithoutRef<"div">

// size = "md" - by default
export const ModalRadix = ({ open, onClose, modalTitle, children, className, size = "md", ...rest }: Props) => (
  <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={clsx(s.Content, s[size], className)}>
        <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
        <hr />
        {children}
        <Dialog.Close asChild>
          <button className={s.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
