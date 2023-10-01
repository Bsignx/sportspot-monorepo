import { useState } from 'react'

import { Icons, HStack } from '@sportspot/ui'

interface RatingStarsProps {
  onChange: (value: number) => void
  value: number
}

export function RatingSelector({ onChange, value }: RatingStarsProps) {
  const [hoverValue, setHoverValue] = useState(0)

  const handleClick = (value: number) => {
    onChange(value)
  }

  const handleMouseEnter = (value: number) => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(0)
  }

  return (
    <HStack spacing="2" onMouseLeave={handleMouseLeave} justifyContent="center">
      {[1, 2, 3, 4, 5].map((rating) => (
        <Icons.ratingStar
          key={rating}
          aria-label={`rating ${rating}`}
          style={{ width: 32, height: 32 }}
          color={(hoverValue || value) >= rating ? '#E8EB5F' : '#D4D4D4'}
          onClick={() => handleClick(rating)}
          onMouseEnter={() => handleMouseEnter(rating)}
        />
      ))}
    </HStack>
  )
}
