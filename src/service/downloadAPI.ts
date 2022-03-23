import axios from 'axios'
import { DROPBOX_DOWNLOAD_URL } from '@env'

const downloadAPI = axios.create({
    headers: {
        'Content-Type': ''
    },
    baseURL: DROPBOX_DOWNLOAD_URL
})

export default downloadAPI
