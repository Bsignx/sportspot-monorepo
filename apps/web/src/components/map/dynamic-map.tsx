/* eslint-disable no-unused-vars */
import Leaflet from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { useEffect } from 'react'

const { MapContainer } = ReactLeaflet

// mapWidth = '100%', mapHeight = '100vh'

// eslint-disable-next-line no-unused-vars
const Map = ({ styles, children, ...rest }) => {
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
    <MapContainer style={{ width: '100%', height: '100vh', ...styles }} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map
