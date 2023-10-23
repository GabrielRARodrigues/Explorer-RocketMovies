import { Container, Header, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LinkToBack } from '../../components/LinkToBack'

import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <Header>
        <LinkToBack to={-1}>Voltar</LinkToBack>
      </Header>
      <main>
        <Form>
          <Avatar>
            <img
              src="https://github.com/GabrielRARodrigues.png"
              alt="Foto do usuário"
            />
            <label
              htmlFor="avatar"
              aria-label="Selecione o arquivo de imagem que será usado como avatar do seu usuário"
            >
              <FiCamera />
              <input type="file" id="avatar" className='sr-only'/>
            </label>
          </Avatar>
          <fieldset>
            <Input
              type="text"
              icon={FiUser}
              placeholder={'Nome'}
              value="Gabriel Rodrigues"
            />
            <Input
              type="email"
              icon={FiMail}
              placeholder={'E-mail'}
              value="gabriel@gmail.com"
            />
          </fieldset>
          <fieldset>
            <Input type="password" icon={FiLock} placeholder="Senha atual" />
            <Input type="password" icon={FiLock} placeholder="Nova senha" />
          </fieldset>
          <Button type="submit" disabled>
            Salvar
          </Button>
        </Form>
      </main>
    </Container>
  )
}
