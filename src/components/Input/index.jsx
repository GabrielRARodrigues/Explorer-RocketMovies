import { Container } from './styles'

export function Input({
  icon: Icon,
  type = 'text',
  value = '',
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
      <input
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  )
}
