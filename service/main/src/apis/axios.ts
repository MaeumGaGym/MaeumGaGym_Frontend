import axios, { AxiosError } from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
  withCredentials: true,
})

instance.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      // config.headers['Authorization'] = `Bearer ${accessToken}`
      config.headers['X-Not-Using-Xquare-Auth'] = 'true'
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response;
  }, function (error) {
    throw error
  })
