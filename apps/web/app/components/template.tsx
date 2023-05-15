'use client'

import { Box } from '@sportspot/ui'

import Map from '@/components/map'

const Template = () => {
  return (
    <>
      {/* <h1>hello</h1>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300">
          <Icons.chevron.right />
        </InputLeftElement>
        <Input placeholder="First Name" paddingInline={10} />
        <InputRightElement pointerEvents="none" color="gray.300">
          <Icons.chevron.right />
        </InputRightElement>
      </InputGroup> */}
      <Box h="100vh">
        <Map width="800" height="800" center={[38.907132, -77.036546]} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              />
              <Marker position={[38.907132, -77.036546]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </Box>
    </>
  )
}

export default Template
