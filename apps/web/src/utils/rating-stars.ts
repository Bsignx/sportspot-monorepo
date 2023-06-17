export const isRatingStars = (floatValue: string | number) => {
  const intValue = Math.floor(Number(floatValue))
  const maxElements = 5
  const qdtStars: boolean[] = Array(maxElements).fill(false)

  for (let i = 0; i < Math.min(intValue, maxElements); i++) {
    qdtStars[i] = true
  }

  return qdtStars
}
