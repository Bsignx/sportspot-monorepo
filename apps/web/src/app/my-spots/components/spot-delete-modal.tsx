import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@sportspot/ui'

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M15 5L5 15"
      stroke="#212121"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5L15 15"
      stroke="#212121"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type Props = {
  isOpenDeleteModal: boolean
  onCloseDeleteModal: () => void
  handleDeleteSpot: () => void
}

export const SpotDeleteModal = ({
  handleDeleteSpot,
  isOpenDeleteModal,
  onCloseDeleteModal,
}: Props) => (
  <Modal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal} isCentered>
    <ModalOverlay />

    <ModalContent maxW="90vw" bgColor="gray.100" borderRadius="2xl">
      <ModalHeader fontWeight="bold">Delete spot</ModalHeader>
      <ModalCloseButton>
        <CloseIcon />
      </ModalCloseButton>
      <ModalBody>
        <Text fontSize="xs" color="gray.300">
          Are you sure? You can’t undo this action afterwards.
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onCloseDeleteModal} variant="ghost" mr="2">
          Cancel
        </Button>
        <Button onClick={handleDeleteSpot}>Delete</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)
