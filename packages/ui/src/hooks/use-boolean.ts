import { useState } from 'react'

export type UseBooleanTypes = [boolean, { on(): void; off(): void; toggle(): void }]

export const useBoolean = (value = false): UseBooleanTypes => {
  const [isBoolean, setIsBoolean] = useState(value)

  const handleBoolean = {
    on() {
      isBoolean ? setIsBoolean((prev) => prev) : setIsBoolean(true)
    },
    off() {
      isBoolean ? setIsBoolean(false) : setIsBoolean((prev) => prev)
    },
    toggle() {
      isBoolean ? setIsBoolean(false) : setIsBoolean(true)
    },
  }

  return [isBoolean, handleBoolean]
}

useBoolean.display = 'useToast'
