import { SpaceToken } from '@simple-ui/tokens'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<SpaceToken, string>
  hasRemValue?: boolean
}

type TokensMap = Array<[SpaceToken, string]>

interface TokensGridItemProps {
  token: SpaceToken
  value: string
  hasRemValue?: boolean
}

const TokensGridItem = ({ token, value, hasRemValue }: TokensGridItemProps) => {
  const showPixelValue = hasRemValue && (
    <td>{Number(value.replace('rem', '')) * 16}px</td>
  )
  return (
    <tr>
      <td>{token}</td>
      <td>{value}</td>
      {showPixelValue}
    </tr>
  )
}

export const TokensGrid = ({
  tokens,
  hasRemValue = false,
}: TokensGridProps) => {
  const TOKENS_MAP = Object.entries(tokens) as TokensMap

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>name</th>
          <th>value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {TOKENS_MAP.map(([token, value]) => (
          <TokensGridItem
            key={token}
            token={token}
            value={value}
            hasRemValue={hasRemValue}
          />
        ))}
      </tbody>
    </table>
  )
}
