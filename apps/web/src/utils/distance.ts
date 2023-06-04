export const getKmDistanceBetweenTwoPoints = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  const R = 6371 // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180 // deg2rad below
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    0.5 -
    Math.cos(dLat) / 2 +
    (Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * (1 - Math.cos(dLon))) / 2

  return Number(R * 2 * Math.asin(Math.sqrt(a))).toFixed(2)
}
