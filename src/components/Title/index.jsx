import { Container } from './styles'

export function Title({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
