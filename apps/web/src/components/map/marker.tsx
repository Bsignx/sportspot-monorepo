import dynamic from 'next/dynamic'

import Leaflet, { LatLngExpression } from 'leaflet'

const LazyMarker = dynamic(async () => (await import('react-leaflet')).Marker, {
  ssr: false,
})

type Props = {
  position: LatLngExpression
  onClick?: () => void
}

const Marker = ({ position, onClick }: Props) => {
  return (
    <LazyMarker
      position={position}
      eventHandlers={{
        click: onClick,
      }}
      icon={Leaflet.icon({
        iconUrl: '/images/leaflet/marker-icon-2x.png',
        shadowUrl: `/images/leaflet/marker-shadow.png`,
        iconSize: [23, 38],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      })}
    />
  )
}

export default Marker
