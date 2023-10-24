import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function LinkToBack({ children, to, isIcon = true, ...rest }) {
  return (
    <Container to={to} {...rest}>
      { isIcon && <FiArrowLeft size={16} />}
      {children}
    </Container>
  )
}
