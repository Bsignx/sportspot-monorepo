'use client'

import { PropsWithChildren, PointerEvent } from 'react'
import { FramerMotion, Box } from '@sportspot/ui'

type ModalDraggableProps = {
  onClose(): void
}

export const ModalDraggable = ({ onClose, children }: PropsWithChildren<ModalDraggableProps>) => {
  const y = FramerMotion.useMotionValue(0)
  const controls = FramerMotion.useDragControls()

  function handleDrag<T>(_: T, { offset }: FramerMotion.PanInfo) {
    if (offset.y < 0) y.set(0)
  }

  function handleDragEnd<T>(_: T, { offset }: FramerMotion.PanInfo) {
    if (offset.y > 200) onClose()
  }

  function handleControlDragStart(event: PointerEvent<HTMLDivElement>) {
    controls.start(event)
  }

  return (
    <FramerMotion.motion.div
      drag={'y'}
      draggable
      dragControls={controls}
      dragListener={false}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      dragElastic={0.9}
      dragConstraints={{ top: 1, bottom: 0 }}
      style={{
        y,
        minHeight: '90dvh',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '30px 30px 0 0',
      }}
    >
      <Box
        top={0}
        zIndex="overlay"
        position="absolute"
        w="full"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={{ touchAction: 'none' }}
        aria-controls="Element responsible for dragging down, to close the modal."
        onPointerDown={handleControlDragStart}
        _after={{
          content: "''",
          w: '61px',
          h: { base: '4px', md: '6px' },
          bg: 'gray.100',
          shadow: 'sm',
          border: 'solid 1px',
          rounded: 'xl',
          borderColor: 'white',
        }}
      />
      {children}
    </FramerMotion.motion.div>
  )
}