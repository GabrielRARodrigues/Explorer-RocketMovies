import { useState } from 'react'

import { Container, Header, Form, Avatar } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LinkToBack } from '../../components/LinkToBack'

import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/images/avatar_placeholder.svg'

import { emailRegex, passwordRegex } from '../../validations/regex/form'

import { Erro } from '../../utils/alerts/alert'

import { useAuth } from '../../hooks/useAuth'

import api from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  function buttonIsDisabled() {
    if (!name && !email && !currentPassword && !newPassword && !avatarFile) {
      return true
    }

    if (name && !email && !currentPassword && !newPassword && !avatarFile) {
      return name === user.name
    }
    if (email && !name && !currentPassword && !newPassword && !avatarFile) {
      return email === user.email
    }

    if (name && email && !currentPassword && !newPassword && !avatarFile) {
      return name === user.name && email === user.email
    }
    return false
  }

  function handleChangeAvatar(event) {
    const avatarFile = event.target.files[0]
    setAvatarFile(avatarFile)

    const avatarImagePreview = URL.createObjectURL(avatarFile)
    setAvatar(avatarImagePreview)
  }

  async function handleUpdate(event) {
    event.preventDefault()

    if (!name && !email && !newPassword && !avatarFile) {
      return Erro('Pelo menos um campo deve ser preenchido')
    }

    if (name) {
      if (!email && !newPassword && !avatarFile && name === user.name) {
        return Erro('Você já está utilizando esse nome de usuário')
      }
    }

    if (email) {
      if (!email.match(emailRegex)) {
        return Erro('O campo de e-mail não apresenta o formato esperado')
      }

      if (!name && !newPassword && !avatarFile && email === user.email) {
        return Erro('Você já está utilizando esse email')
      }
    }

    if (name && email) {
      if (
        !newPassword &&
        !avatarFile &&
        name === user.name &&
        email === user.email
      ) {
        return Erro('Você já está utilizando esse nome de usuário e esse email')
      }
    }

    if (newPassword && !currentPassword) {
      return Erro(
        'Você precisa informar a senha antiga para definir uma nova senha'
      )
    }

    if (currentPassword || newPassword) {
      if (
        !currentPassword.match(passwordRegex) ||
        !newPassword.match(passwordRegex)
      ) {
        return Erro(
          'O campo de senha atual ou nova senha não apresenta o formato esperado'
        )
      }
    }

    const userUpdatedData = {
      name,
      email,
      password: newPassword,
      old_password: currentPassword
    }

    await updateProfile({ user: userUpdatedData, avatarFile })
  }

  return (
    <Container>
      <Header>
        <LinkToBack to={-1}>Voltar</LinkToBack>
      </Header>
      <main>
        <Form onSubmit={handleUpdate}>
          <Avatar>
            <img src={avatar} alt={`Foto do usuário ${user.name}`} />
            <label
              htmlFor="avatar"
              aria-label="Selecione o arquivo de imagem que será usado como avatar do seu usuário"
            >
              <FiCamera />
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="sr-only"
                onChange={handleChangeAvatar}
              />
            </label>
          </Avatar>
          <fieldset>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nome"
              id="user_name"
              onChange={event => setName(event.target.value)}
              icon={FiUser}
            />
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              title="É necessário informar um endereço de e-mail valido. Exemplo da estrutura de e-mail válido: exemplo@gmail.com"
              id="user_email"
              onChange={event => setEmail(event.target.value)}
              pattern={emailRegex.source}
              icon={FiMail}
            />
          </fieldset>
          <fieldset>
            <Input
              type="password"
              name="old_password"
              placeholder="Senha atual"
              title="A senha deve conter pelo menos oito caracteres, um caractere maiúsculo, um caractere minusculo, um número e um caractere especial"
              id="user_old_password"
              onChange={event => setCurrentPassword(event.target.value)}
              pattern={passwordRegex.source}
              icon={FiLock}
            />
            <Input
              type="password"
              name="password"
              placeholder="Nova senha"
              title="A senha deve conter pelo menos oito caracteres, um caractere maiúsculo, um caractere minusculo, um número e um caractere especial"
              id="user_password"
              onChange={event => setNewPassword(event.target.value)}
              pattern={passwordRegex.source}
              icon={FiLock}
            />
          </fieldset>
          <Button type="submit" disabled={buttonIsDisabled()}>
            Salvar
          </Button>
        </Form>
      </main>
    </Container>
  )
}
