import { Container } from './styles'
import { Stars } from '../Stars'

import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  const { id, title, rating, description, tags } = data

  return (
    <Container to={`/details/${id}`} {...rest}>
      <h2>{title}</h2>
      <Stars count={rating} />
      <p>{description}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>
            <Tag>{tag.name}</Tag>
          </li>
        ))}
      </ul>
    </Container>
  )
}
