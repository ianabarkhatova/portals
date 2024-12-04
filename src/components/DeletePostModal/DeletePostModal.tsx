import { ModalRadix } from "../ModalRadix/ModalRadix.tsx"
import { Button } from "../Button/Button.tsx"

type Props = {
  open: boolean
  onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={"Delete post"}>
      Are you sure you want to delete this post?
      <div>
        <Button onClick={onClose} variant={'outlined'}>Yes</Button>
        <Button onClick={onClose}>Yes</Button>
      </div>
    </ModalRadix>
  )
}
