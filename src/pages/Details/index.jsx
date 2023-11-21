import { useEffect, useState } from 'react'

import {
  Container,
  Content,
  NoteInfo,
  Status,
  Tags,
  TextContent
} from './styles'

import { FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { LinkToBack } from '../../components/LinkToBack'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { Title } from '../../components/Title'

import { useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'

import { Erro } from '../../utils/alerts/alert'
import api from '../../services/api'

export function Details() {
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const [dataDate, setDataDate] = useState(new Date())

  const { id } = useParams()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder

  useEffect(() => {
    async function fetchUserNote() {
      try {
        const response = await api.get(`notes/${id}`)

        setData(response.data)
        setDataDate(new Date(response.data.updated_at))
      } catch (error) {
        if (error.response) {
          return Erro(error.response.data.message)
        } else {
          console.log(error)
          return Erro('Não foi possível buscar a nota.')
        }
      }
    }

    fetchUserNote()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <LinkToBack to={-1}>Voltar</LinkToBack>
        {data && (
          <section>
            <Status>
              <div>
                <Title>{data.title}</Title>
                <Stars count={data.rating} size={20} />
              </div>
              <NoteInfo>
                <span>
                  <img src={avatarUrl} alt="Logo do usuário" />
                  Por {`${user.name}`}
                </span>
                <span>
                  <FiClock />
                  {`${dataDate
                    .toLocaleDateString()
                    .replace(
                      /(\d\d)\/(\d\d)\/(\d\d)(\d\d)/g,
                      '$1/$2/$4'
                    )} ás ${dataDate
                    .getHours()
                    .toString()
                    .padStart(2, '0')}:${dataDate
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')}`}
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
              <p>{data.description}</p>
            </TextContent>
          </section>
        )}
      </Content>
    </Container>
  )
}
