import { Container } from './styles'

export function TextArea({
  value,
  name,
  id,
  placeholder,
  required = false,
  onChange,
  ...rest
}) {
  return (
    <>
      <Container
        id={id}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        {...rest}
      >
        {value}
      </Container>
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
    </>
  )
}
