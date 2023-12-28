import axios, { AxiosError } from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      //@ts-ignore
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        'X-Not-Using-Xquare-Auth': 'true',
      }
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
