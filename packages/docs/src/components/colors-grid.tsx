import { colors } from '@simple-ui/tokens'
import { getContrast } from 'polished'

interface ColorItemProps {
  renderKey: string
  color: keyof typeof colors
}

const ColorItem = ({ renderKey, color }: ColorItemProps) => {
  const fontContrast = getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'

  return (
    <div style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: fontContrast,
        }}
      >
        <strong>${renderKey}</strong>
        <span>{color}</span>
      </div>
    </div>
  )
}

export const ColorsGrid = () => {
  const COLORS_MAP = Object.entries(colors)
  return COLORS_MAP.map(([key, color]) => {
    return (
      <ColorItem
        key={key}
        renderKey={key}
        color={color as keyof typeof colors}
      />
    )
  })
}
