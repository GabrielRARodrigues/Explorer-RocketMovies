import { Container } from './styles'

export function Tag({ children, red = false, ...rest }) {
  return (
    <Container $red={red} {...rest}>
      {children}
    </Container>
  )
}
