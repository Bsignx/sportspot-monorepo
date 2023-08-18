import { LeafletMouseEvent } from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'

const LocationFinder = ({ onClickMap }: { onClickMap?: (event: LeafletMouseEvent) => void }) => {
  ReactLeaflet.useMapEvents({
    click(event) {
      onClickMap && onClickMap(event)
    },
  })

  return null
}

export default LocationFinder
