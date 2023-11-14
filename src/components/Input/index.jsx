import { Container } from './styles'

export function Input({
  icon: Icon,
  type = 'text',
  name,
  value,
  id = 'textInput',
  placeholder,
  title,
  onChange,
  required = false,
  pattern,
  minLength,
  maxLength,
  ...rest
}) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input
        name={name}
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        title={title}
        onChange={onChange}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        {...rest}
      />
    </Container>
  )
}
