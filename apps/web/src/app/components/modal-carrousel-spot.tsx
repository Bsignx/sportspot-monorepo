import { Props } from './selected-spot-card'

import { useState } from 'react'
import { FramerMotion, NextChakra, Box, HStack } from '@sportspot/ui'

const spotsMock = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
]

type ModalCarrouselSpotProps = Pick<Props, 'selectedSpot'>

export const ModalCarrouselSpot = ({ selectedSpot }: ModalCarrouselSpotProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dragControls = FramerMotion.useDragControls()

  console.log(selectedSpot) // TODO Change to location image list

  const currentSpot = spotsMock[currentIndex]

  const handleDragEnd = (_, { offset }: FramerMotion.PanInfo) => {
    if (offset.x > 50) {
      goToPreviousSlide()
    } else if (offset.x < -50) {
      goToNextSlide()
    }
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % spotsMock.length)
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + spotsMock.length) % spotsMock.length)
  }

  const variants: FramerMotion.Variants = {
    enter: { opacity: 0 },
    visible: { opacity: 1 },
    end: { opacity: 0.8 },
  }

  return (
    <Box
      w="full"
      h={{ base: '240px', md: '400px' }}
      overflow="hidden"
      bg="gray.100"
      borderRadius="30px 30px"
    >
      <FramerMotion.AnimatePresence initial={false}>
        <FramerMotion.motion.div
          drag="x"
          variants={variants}
          initial="enter"
          animate="visible"
          exit="end"
          transition={{ duration: 0.2 }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          dragControls={dragControls}
          dragConstraints={{ left: 0, right: 0 }}
          key={spotsMock[currentIndex].id}
          aria-live="polite"
          aria-labelledby="Carousel of imagens that shows the images of the Spot (imagens of the location)"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <NextChakra.Image
            fill
            role="img"
            alt="asdas"
            key={currentSpot.id}
            src={currentSpot.src}
            style={{ objectFit: 'cover' }}
          />
          <HStack zIndex="overlay" spacing={2.5} mb={6}>
            {spotsMock.map((spot) => (
              <Box
                key={spot.id}
                boxSize={{ base: 2, md: 3 }}
                bg={spot.id === currentSpot.id ? 'white' : 'gray.200'}
                rounded="full"
              />
            ))}
          </HStack>
        </FramerMotion.motion.div>
      </FramerMotion.AnimatePresence>
    </Box>
  )
}
