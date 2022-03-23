import axios from 'axios'
import { DROPBOX_API_URL } from '@env'

const api = axios.create({
  baseURL: DROPBOX_API_URL
})

export default api
