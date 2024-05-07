import { getCookie } from './../../../../main/src/utils/cookie'
import { instance } from '../axios'

export const getPoses = async (access_token: string) => {
  return await instance({
    method: 'GET',
    url: `/poses`,
    headers: {
      // 'X-XSRF-TOKEN': rf_token,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(res => res.data)
    .catch(err => {
      console.log('error:', err)
    })
}
