import { instance } from '../axios'

export type loginCategory = 'google' | 'kakao' | 'apple'

export const login = async (category: loginCategory, token: string) => {
  return await instance
    .get(`${category}/login?access_token=${token}`)
    .then(res => 1)
    .catch(e => {
      console.error(
        `%cAxios Error%c ${e.message}%c\n%O`,
        'background:rgb(148,71,68);padding:4px 8px;border-radius:8px;font-weight:900;font-size:18px;',
        'padding:40px 0;',
        '',
        e,
      )
      return
    })
}
