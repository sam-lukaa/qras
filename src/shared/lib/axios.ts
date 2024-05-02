import Axios from 'axios'
import { getCookie } from 'cookies-next'

export const axios = Axios.create({
  baseURL: 'https://qr-attendance-system-a9qo.onrender.com/api/',
})

axios.interceptors.request.use(
  (config) => {
    const token: string | undefined = getCookie('qr-attendance')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },

  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      window.location.assign('/auth/signin')
    }

    return Promise.reject(error)
  },
)
