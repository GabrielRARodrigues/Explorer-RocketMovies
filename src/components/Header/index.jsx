import { Container, Profile } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../Input'

import { Confirm } from '../../utils/alerts/alert'

import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const navigate = useNavigate()

  const { signOut, user } = useAuth()

  function handleSignOut() {
    Confirm('Você tem certeza que deseja sair?', 'Sim, desejo sair').then(
      result => {
        if (result.isConfirmed) {
          navigate('/')
          signOut()
        }
      }
    )
  }

  return (
    <Container>
      <Link to="/">
        <h2>RocketMovies</h2>
      </Link>
      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <span>
            <Link to="/" onClick={handleSignOut}>
              sair
            </Link>
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
