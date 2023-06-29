import { Props } from '../selected-spot-card'

import { useState } from 'react'
import { FramerMotion, NextChakra, Box, HStack } from '@sportspot/ui'
import { ImageOverlay } from './image-overlay'

type CarrouselSpotProps = Pick<Props, 'selectedSpot'>

export const CarrouselSpot = ({ selectedSpot }: CarrouselSpotProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const dragControls = FramerMotion.useDragControls()

  const spotImages = selectedSpot.images

  const currentSpot = spotImages[currentIndex]

  const handleDragEnd = (_, { offset }: FramerMotion.PanInfo) => {
    if (offset.x > 50) {
      goToPreviousSlide()
    } else if (offset.x < -50) {
      goToNextSlide()
    }
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % spotImages.length)
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + spotImages.length) % spotImages.length)
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
          transition={{ duration: 0.1 }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          dragControls={dragControls}
          dragConstraints={{ left: 0, right: 0 }}
          key={spotImages[currentIndex]}
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
          <ImageOverlay />
          <NextChakra.Image
            fill
            role="img"
            src={currentSpot || '/images/spot/spot-placeholder.jpg'}
            alt={`Imagem from ${selectedSpot.name} spot`}
            style={{ objectFit: 'cover' }}
          />
          <HStack zIndex="overlay" spacing={2} mb={6}>
            {spotImages.map((_, index) => (
              <Box
                key={index}
                boxSize="6px"
                rounded="full"
                sx={{
                  opacity: index === currentIndex ? 1 : 0.8,
                  bg: index === currentIndex ? 'white' : 'gray.200',
                }}
              />
            ))}
          </HStack>
        </FramerMotion.motion.div>
      </FramerMotion.AnimatePresence>
    </Box>
  )
}
