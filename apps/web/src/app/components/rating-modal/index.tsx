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
import { RatingSelector } from '../rating-selector'
import { useState } from 'react'

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
  onSubmit: (rating: number) => void
}

export const RatingModal = ({ onSubmit, isOpen, onClose }: Props) => {
  const [rating, setRating] = useState(0)

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleSubmit = () => {
    onSubmit(rating)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent maxW="90vw" bgColor="senary" borderRadius="2xl">
        <ModalHeader fontWeight="bold" color="tertiary">
          Rate your experience
        </ModalHeader>
        <ModalCloseButton>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody pb="3" pt="0">
          <Text fontSize="xs" color="quaternary" mb="5">
            Select rating from 1 to 5 stars:
          </Text>

          <RatingSelector onChange={handleRatingChange} value={rating} />
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
}
