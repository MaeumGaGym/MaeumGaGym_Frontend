import { useQuery } from '@tanstack/react-query'
import { instance } from './axios'

/**
 * 구글 oauth
 */
export const googleLogin = () => {
  console.log('hi')
  const fetchLogin = async () => {
    console.log('hello')
    const { headers } = await instance.get('/google/login')
    console.log(headers)
    return headers
  }
  return useQuery({
    queryKey: ['googleLogin'],
    queryFn: fetchLogin,
  })
}
