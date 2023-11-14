import { useState } from 'react'

import { Background, Container, Content, Form, MainContainer } from './styles'

import { LinkToBack } from '../../components/LinkToBack'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLock, FiMail, FiUser } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

import { emailRegex, passwordRegex } from '../../validations/regex/form'
import { Alert, Erro } from '../../utils/alerts/alert'

import api from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp(event) {
    event.preventDefault()

    if (!name || !email || !password) {
      return Erro('Todos os campos devem ser preenchidos')
    }

    if (!email.match(emailRegex)) {
      return Erro('O campo de e-mail não apresenta o formato esperado')
    }

    if (!password.match(passwordRegex)) {
      return Erro('O campo de senha não apresenta o formato esperado')
    }

    const userData = {
      name,
      email,
      password
    }

    try {
      await api.post('users', userData)

      Alert('Usuário cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        Erro(error.response.data.message)
      } else {
        Erro('Não foi possível realizar o cadastro')
      }
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <MainContainer>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <Form onSubmit={handleSignUp}>
              <h2>Crie sua conta</h2>

              <fieldset>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  id="user_name"
                  required
                  onChange={event => setName(event.target.value)}
                  icon={FiUser}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  title="É necessário informar um endereço de e-mail valido. Exemplo da estrutura de e-mail válido: exemplo@gmail.com"
                  id="user_email"
                  onChange={event => setEmail(event.target.value)}
                  required
                  pattern={emailRegex.source}
                  icon={FiMail}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  title="A senha deve conter pelo menos oito caracteres, um caractere maiúsculo, um caractere minusculo, um número e um caractere especial"
                  id="user_password"
                  onChange={event => setPassword(event.target.value)}
                  required
                  pattern={passwordRegex.source}
                  icon={FiLock}
                />
              </fieldset>

              <Button type="submit">Cadastrar</Button>
            </Form>
          </MainContainer>

          <LinkToBack to="/">Voltar para o login </LinkToBack>
        </section>
        <section>
          <Background />
        </section>
      </Content>
    </Container>
  )
}
