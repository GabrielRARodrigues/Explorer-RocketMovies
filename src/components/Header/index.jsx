import { Container, Profile } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../Input'

import avatarPlaceholder from '../../assets/images/avatar_placeholder.svg'

import { Confirm } from '../../utils/alerts/alert'

import { useAuth } from '../../hooks/useAuth'

import api from '../../services/api'

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

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder

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
            <Link onClick={handleSignOut}>sair</Link>
          </span>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={`Foto do usuário ${user.name}`} />
        </Link>
      </Profile>
    </Container>
  )
}
