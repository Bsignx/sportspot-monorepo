import dynamic from 'next/dynamic'

import Leaflet, { LatLngExpression } from 'leaflet'

const LazyMarker = dynamic(async () => (await import('react-leaflet')).Marker, {
  ssr: false,
})

const DEFAULT_ICON_CONFIG = {
  iconUrl: '/images/leaflet/marker-icon-2x-1.png',
  shadowUrl: `/images/leaflet/marker-shadow.png`,
  iconSize: [23, 38],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
} as Leaflet.IconOptions

type Props = {
  position: LatLngExpression
  onClick?: () => void
  iconConfig?: Leaflet.IconOptions
}

const Marker = ({ position, onClick, iconConfig }: Props) => {
  return (
    <LazyMarker
      position={position}
      eventHandlers={{
        click: onClick,
      }}
      icon={Leaflet.icon(iconConfig || DEFAULT_ICON_CONFIG)}
    />
  )
}

export default Marker
