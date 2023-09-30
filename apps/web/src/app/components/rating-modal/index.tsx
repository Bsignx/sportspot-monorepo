import { colors } from '@sportspot/tokens'
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
      stroke={colors.primary}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5L15 15"
      stroke={colors.primary}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type Props = {
  isOpen: boolean
  onClose: () => void
  handleSubmit: () => void
}

export const RatingModal = ({ handleSubmit, isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />

    <ModalContent maxW="90vw" bgColor="senary" borderRadius="2xl">
      <ModalHeader fontWeight="bold" color="tertiary">
        Rate your experience
      </ModalHeader>
      <ModalCloseButton>
        <CloseIcon />
      </ModalCloseButton>
      <ModalBody>
        {/* <Text fontSize="xs" color="quaternary">
          Select rating from 1 to 5 stars:
        </Text> */}

        <Text fontSize="xs" color="quaternary">
          Soon you will be able to rate your experience.
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose} variant="outline" mr="2" color="tertiary" w="full">
          Cancel
        </Button>
        <Button onClick={handleSubmit} w="full">
          Submit
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)
