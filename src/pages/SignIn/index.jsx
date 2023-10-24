import { Background, Container, Content, Form, MainContainer } from './styles'

import { LinkToBack } from '../../components/LinkToBack'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiLock, FiMail } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Content>
        <section>
          <MainContainer>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>
            <Form>
              <h2>Faça seu login</h2>

              <fieldset>
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
