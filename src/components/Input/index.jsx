import { Container } from './styles'

export function Input({
  icon: Icon,
  type = 'text',
  id = 'textInput',
  placeholder,
  ...rest
}) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input id={id} type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}
