import axios, { AxiosError } from 'axios'

export const instance = axios.create({
  baseURL: 'https://stag-server.xquare.app/maeumgagym',
  timeout: 30000,
})

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
      config.headers['X-Not-Using-Xquare-Auth'] = 'true'
    }
    return config
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(undefined, function (error) {
  throw error
})
