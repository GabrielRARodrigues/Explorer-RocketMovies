import { Background, Container, Content, Form, MainContainer } from './styles'

import { LinkToBack } from '../../components/LinkToBack'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLock, FiMail, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Content>
        <section>
          <MainContainer>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <Form>
              <h2>Crie sua conta</h2>

              <fieldset>
                <Input
                  type="text"
                  placeholder="Nome"
                  id="user_name"
                  icon={FiUser}
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  id="user_email"
                  icon={FiMail}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  id="user_password"
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
