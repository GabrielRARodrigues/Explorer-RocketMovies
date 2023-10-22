import { Bookmarks, Buttons, Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { LinkToBack } from '../../components/LinkToBack'
import { TextArea } from '../../components/TextArea'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NoteMarker } from '../../components/NoteMarker'

export function New() {
  return (
    <Container>
      <Header userName="Gabriel Rodrigues" />
      <Content>
        <div>
          <LinkToBack to="/">Voltar</LinkToBack>
          <Title>Novo filme</Title>
        </div>
        <section>
          <Form>
            <fieldset>
              <Input placeholder="Título" id="title" />
              <Input
                placeholder="Sua nota (de 0 a 5)"
                id="rating"
                type="number"
                min="0"
                max="5"
              />
            </fieldset>
            <TextArea placeholder={'Observações'} />
            <fieldset>
              <legend>Marcadores</legend>
              <Bookmarks>
                <NoteMarker value="React" />
                <NoteMarker placeholder="Novo marcador" isNew />
              </Bookmarks>
            </fieldset>

            <Buttons>
              <Button type="clear" secondary>
                Excluir filme
              </Button>
              <Button type="submit">Salvar alterações</Button>
            </Buttons>
          </Form>
        </section>
      </Content>
    </Container>
  )
}
