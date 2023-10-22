import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function LinkToBack({ children, to, ...rest }) {
  return (
    <Container to={to} {...rest}>
      <FiArrowLeft size={16} />
      {children}
    </Container>
  )
}
