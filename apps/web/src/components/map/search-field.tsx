import { useEffect } from 'react'
import { GeoSearchControl, MapBoxProvider } from 'leaflet-geosearch'
import { useMap } from 'react-leaflet'

export type ClassNames = {
  container?: string
  input?: string
}

type Props = {
  apiKey: string
  classNames?: ClassNames
}

const SearchField = ({ apiKey, classNames }: Props) => {
  const provider = new MapBoxProvider({
    params: {
      access_token: apiKey,
    },
  })

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider,
    autoComplete: true,
    autoCompleteDelay: 250,
    searchLabel: 'Search for a location',
    classNames: {
      container: 'search-container',
      input: 'search-input',
      message: 'search-message',
      button: 'search-button',
      buttonIcon: 'search-button-icon',
      resultlist: 'search-result-list',
      ...classNames,
    },
  })

  const map = useMap()
  useEffect(() => {
    map.addControl(searchControl)

    return () => {
      map.removeControl(searchControl)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default SearchField
