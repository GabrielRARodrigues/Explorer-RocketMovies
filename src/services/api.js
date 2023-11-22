import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rocketmovies-api-dt90.onrender.com'
})

export default api
