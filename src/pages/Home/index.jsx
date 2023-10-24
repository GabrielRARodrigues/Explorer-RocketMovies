import { Container, Content, Notes } from './styles'

import { Header } from '../../components/Header'
import { IconButton } from '../../components/IconButton'
import { Note } from '../../components/Note'
import { Title } from '../../components/Title'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  const data = {
    id: 1,
    title: 'Interestellar',
    rating: 4,
    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...`,
    tags: [
      {
        id: 0,
        name: 'Ficção Científica'
      },
      {
        id: 1,
        name: 'Drama'
      },
      {
        id: 2,
        name: 'Família'
      }
    ]
  }

  return (
    <Container>
      <Header userName="Gabriel Rodrigues" />
      <main>
        <Content>
          <div>
            <Title>Meus filmes</Title>
            <IconButton icon={FiPlus}>Adicionar filme</IconButton>
          </div>

          <section>
            <Notes>
              <Note data={data} />
              <Note data={data} />
              <Note data={data} />
            </Notes>
          </section>
        </Content>
      </main>
    </Container>
  )
}
