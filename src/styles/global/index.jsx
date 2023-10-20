import { Reset } from './reset'
import { Normalize } from './normalize'
import { Style } from './styles'

export const GlobalStyle = () => (
  <>
    <Normalize />
    <Reset />
    <Style />
  </>
)
