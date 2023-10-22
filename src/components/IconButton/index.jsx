import { Container } from './styles'

export function IconButton({ children, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <Icon size={16} />
      {children}
    </Container>
  )
}
