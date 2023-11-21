import { useState } from 'react'

import { Bookmarks, Buttons, Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { LinkToBack } from '../../components/LinkToBack'
import { TextArea } from '../../components/TextArea'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NoteMarker } from '../../components/NoteMarker'

import { Alert, Erro } from '../../utils/alerts/alert'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    if (!newTag) {
      return Erro('O campo está vazio, informe um marcador para adiciona-lo')
    }
    if (tags.includes(newTag)) {
      setNewTag('')
      return Erro('Você já adicionou esse marcador')
    }

    setTags(prevState => [...new Set([...prevState, newTag])])
    setNewTag('')
  }

  function handleRemoveTag(tagToBeDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagToBeDeleted))
  }

  async function handleCreateNewNote(event) {
    event.preventDefault()

    if (!title || !description || !rating) {
      return Erro('Os campos de título, nota e descrição devem ser preenchidos')
    }

    if (isNaN(rating)) {
      return Erro(
        'O valor informado para a nota do filme tem que ser um número'
      )
    }

    if (rating < 1 || rating > 5) {
      return Erro('A nota do filme tem que ser um número de 1 a 5')
    }

    if (newTag) {
      return Erro(
        'Você preencheu o campo para adicionar um novo marcador, mas não clicou em adicionar. Adicione o marcador ou deixe o campo vazio'
      )
    }

    const note = {
      title,
      description,
      rating,
      tags
    }

    try {
      await api.post('notes', note)

      Alert('Nota criada com sucesso')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        return Erro(error.response.data.message)
      } else {
        return Erro('Não foi possível criar a nota')
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <LinkToBack to={-1}>Voltar</LinkToBack>
          <Title>Novo filme</Title>
        </div>
        <section>
          <Form onSubmit={handleCreateNewNote}>
            <fieldset>
              <Input
                type="text"
                name="title"
                placeholder="Título"
                id="title"
                onChange={event => setTitle(event.target.value)}
                required
              />
              <Input
                type="number"
                name="rating"
                placeholder="Sua nota (de 0 a 5)"
                id="rating"
                min="0"
                max="5"
                onChange={event => setRating(Number(event.target.value))}
                required
              />
            </fieldset>
            <TextArea
              name="description"
              placeholder="Descrição"
              id="movie_description"
              onChange={event => setDescription(event.target.value)}
              required
            />
            <fieldset>
              <legend>Marcadores</legend>
              <Bookmarks>
                {tags.map(tag => (
                  <NoteMarker
                    value={tag}
                    key={tag}
                    id={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <NoteMarker
                  value={newTag}
                  placeholder="Novo marcador"
                  isNew
                  onChange={event => setNewTag(event.target.value)}
                  onClick={handleAddTag}
                />
              </Bookmarks>
            </fieldset>

            <Buttons>
              <Button type="reset" secondary>
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
