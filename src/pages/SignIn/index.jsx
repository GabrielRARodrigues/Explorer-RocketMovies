import { useState } from 'react'

import { Background, Container, Content, Form, MainContainer } from './styles'

import { LinkToBack } from '../../components/LinkToBack'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLock, FiMail } from 'react-icons/fi'

import { emailRegex, passwordRegex } from '../../validations/regex/form'
import { Erro } from '../../utils/alerts/alert'

import { useAuth } from '../../hooks/useAuth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn(event) {
    event.preventDefault()

    if (!email || !password) {
      return Erro(
        'Os campos e-mail e senha devem ser obrigatoriamente preenchidos'
      )
    }

    if (!email.match(emailRegex)) {
      return Erro('O campo de e-mail não apresenta o formato esperado')
    }

    if (!password.match(passwordRegex)) {
      return Erro('O campo de senha não apresenta o formato esperado')
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <Content>
        <section>
          <MainContainer>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <Form onSubmit={handleSignIn}>
              <h2>Faça seu login</h2>

              <fieldset>
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

              <Button type="submit">Entrar</Button>
            </Form>
          </MainContainer>

          <LinkToBack to="/register" isIcon={false}>
            Criar conta
          </LinkToBack>
        </section>
        <section>
          <Background />
        </section>
      </Content>
    </Container>
  )
}
