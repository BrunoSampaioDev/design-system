import { colors } from '@simple-ui/tokens'
import { getContrast } from 'polished'

interface ColorItemProps {
  token: keyof typeof colors
  hexaDecimalColor: string
}

const ColorItem = ({ token, hexaDecimalColor }: ColorItemProps) => {
  const fontContrast =
    getContrast(hexaDecimalColor, '#fff') < 3.5 ? '#000' : '#fff'

  return (
    <div style={{ backgroundColor: hexaDecimalColor, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: fontContrast,
        }}
      >
        <strong>${token}</strong>
        <span>{hexaDecimalColor}</span>
      </div>
    </div>
  )
}

type ColorsMapType = Array<[keyof typeof colors, string]>

export const ColorsGrid = () => {
  const COLORS_MAP = Object.entries(colors) as ColorsMapType

  return COLORS_MAP.map(([token, hexaDecimalColor]) => (
    <ColorItem key={token} token={token} hexaDecimalColor={hexaDecimalColor} />
  ))
}
