import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./dynamic-map'), {
  ssr: false,
})

const Map = ({ styles, children, ...props }) => {
  return (
    <div style={{ aspectRatio: 'auto' }}>
      <DynamicMap styles={styles} {...props}>
        {children}
      </DynamicMap>
    </div>
  )
}

export default Map
