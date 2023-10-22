import { Container } from './styles'

export function TextArea({ value, id, placeholder, ...rest }) {
  return (
    <>
      <Container id={id} placeholder={placeholder} {...rest}>
        {value}
      </Container>
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
    </>
  )
}
