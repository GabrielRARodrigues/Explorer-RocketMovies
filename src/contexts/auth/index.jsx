import { createContext, useEffect, useState } from 'react'

import { Alert, Erro } from '../../utils/alerts/alert'

import api from '../../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    const userAuthData = {
      email,
      password
    }

    try {
      const response = await api.post('sessions', userAuthData)
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        Erro(error.response.data.message)
      } else {
        Erro('Não foi possível entrar.')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const formDataFromAvatarFile = new FormData()
        formDataFromAvatarFile.append('avatar', avatarFile)

        const updateAvatarResponse = await api.patch(
          'users/avatar',
          formDataFromAvatarFile
        )
        user.avatar = updateAvatarResponse.data.avatar
      }

      await api.put('users', user)

      const updatedUser = (await api.get('users')).data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(updatedUser))

      setData({ user: updatedUser, token: data.token })
      Alert('Perfil atualizado com sucesso')
    } catch (error) {
      if (error.response) {
        Erro(error.response.data.message)
      } else {
        Erro('Não foi possível atualizar o perfil.')
      }
    }
  }
  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies:user')
    const token = localStorage.getItem('@rocketmovies:token')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
