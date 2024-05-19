import { instance } from '../axios'

export const getMyRoutine = async (access_token: string) => {
  return await instance({
    method: 'GET',
    url: `/routines/my`,
    headers: {
      Authorization: `bearer ${access_token}`,
      // 'X-XSRF-TOKEN': csrf_token,
      'X-Not-Using-Xquare-Auth': true,
    },
  })
    .then(res => res.data)
    .catch(err => {
      console.log(err)
    })
}
