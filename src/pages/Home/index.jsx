import { useEffect, useState } from 'react'

import { Container, Content, Notes } from './styles'

import { Header } from '../../components/Header'
import { IconButton } from '../../components/IconButton'
import { Note } from '../../components/Note'
import { Title } from '../../components/Title'

import { FiPlus } from 'react-icons/fi'
import { Erro } from '../../utils/alerts/alert'

import api from '../../services/api'

export function Home() {
  const [searchTitle, setSearchTitle] = useState('')
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function fetchUserNotes() {
      try {
        const response = await api.get(`notes?title=${searchTitle}`)
        setNotes(response.data)
      } catch (error) {
        if (error.response) {
          return Erro(error.response.data.message)
        } else {
          return Erro('Não foi possível buscar a notas.')
        }
      }
    }
    fetchUserNotes()
  }, [searchTitle])

  return (
    <Container>
      <Header setSearchTitle={setSearchTitle} />
      <main>
        <Content>
          <div>
            <Title>Meus filmes</Title>
            <IconButton icon={FiPlus}>Adicionar filme</IconButton>
          </div>

          <section>
            <Notes>
              {notes.map(note => (
                <Note key={note.id} data={note} />
              ))}
            </Notes>
          </section>
        </Content>
      </main>
    </Container>
  )
}
