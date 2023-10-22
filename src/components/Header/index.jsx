import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { Container, Profile } from './styles'

export function Header({ userName }) {
  return (
    <Container>
      <Link to="/">
        <h2>RocketMovies</h2>
      </Link>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>{userName}</strong>
          <span>
            <Link to="login">sair</Link>
          </span>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/GabrielRARodrigues.png"
            alt="Logo do usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
