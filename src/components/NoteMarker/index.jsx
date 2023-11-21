import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function NoteMarker({
  isNew = false,
  value,
  placeholder,
  id = 'marker',
  onClick,
  onChange,
  ...rest
}) {
  return (
    <Container $isNew={isNew}>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly={!isNew}
        onChange={onChange}
        {...rest}
      />
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
