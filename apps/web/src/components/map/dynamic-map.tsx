import { useEffect } from 'react'
import Leaflet from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import styles from './map.module.css'

const { MapContainer } = ReactLeaflet

// eslint-disable-next-line no-unused-vars
const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  useEffect(() => {
    ;(async function init() {
      delete (Leaflet.Icon.Default.prototype as any)._getIconUrl
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'images/leaflet/marker-icon-2x.png',
        iconUrl: 'images/leaflet/marker-icon.png',
        shadowUrl: 'images/leaflet/marker-shadow.png',
      })
    })()
  }, [])

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map