import { FiClock, FiWatch } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { LinkToBack } from '../../components/LinkToBack'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { Title } from '../../components/Title'
import {
  Container,
  Content,
  NoteInfo,
  Status,
  Tags,
  TextContent
} from './styles'

export function Details() {
  const data = {
    id: 1,
    userName: 'Gabriel Rodrigues',
    title: 'Interestellar',
    rating: 4,
    description1: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
    `,
    description2: `Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
    `,
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
    ],
    createdAt: '23/05/22 às 08:00'
  }
  return (
    <Container>
      <Header userName="Gabriel Rodrigues" />
      <Content>
        <LinkToBack to="/">Voltar</LinkToBack>
        <section>
          <Status>
            <div>
              <Title>{data.title}</Title>
              <Stars count={data.rating} size={20} />
            </div>
            <NoteInfo>
              <span>
                <img
                  src="https://github.com/GabrielRARodrigues.png"
                  alt="Logo do usuário"
                />
                Por {`${data.userName}`}
              </span>
              <span>
                <FiClock />
                {data.createdAt}
              </span>
            </NoteInfo>

            <Tags>
              {data.tags.map(tag => (
                <li key={tag.id}>
                  <Tag red>{tag.name}</Tag>
                </li>
              ))}
            </Tags>
          </Status>
          <TextContent>
            <p>{data.description1}</p>
            <p>{data.description2}</p>
          </TextContent>
        </section>
      </Content>
    </Container>
  )
}
