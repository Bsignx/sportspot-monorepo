import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./dynamic-map'), {
  ssr: false,
})

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

// const DEFAULT_WIDTH = 16
// const DEFAULT_HEIGHT = 9

const Map = (props) => {
  // const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props
  return (
    <div style={{ aspectRatio: 'auto' }}>
      <DynamicMap mapWidth={props.mapWidth} mapHeight={props.mapHeight} {...props} />
    </div>
  )
}

export default Map
