import { Container } from './styles'

export function Button({
  children,
  secondary = false,
  disabled = false,
  type = 'button',
  ...rest
}) {
  return (
    <Container
      type={type}
      disabled={disabled}
      $disabled={disabled}
      $secondary={secondary}
      {...rest}
    >
      {children}
    </Container>
  )
}
