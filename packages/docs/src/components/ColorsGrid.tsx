import { colors } from '@sportspot/tokens'
import { getContrast } from 'polished'

const isGradient = (color: string) => color.includes('linear-gradient')

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ background: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: isGradient(color)
              ? '#000'
              : getContrast(color, '#FFF') < 3.5
              ? '#000'
              : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
