import { instance } from '../axios'

export type loginCategory = 'google' | 'kakao' | 'apple'

export const login = async (category: loginCategory, token: string): Promise<string | undefined> => {
  return await instance
    .get(`${category}/login`, {
      headers: category !== 'kakao' ? {
        "OAUTH-TOKEN": token
      }:{}
    })
    .then(res => res.headers['authorization'].split(' ')[1])
    .catch(e => {
      console.error(
        `%cAxios Error%c ${e.message}%c\n%O`,
        'background:rgb(148,71,68);padding:4px 8px;border-radius:8px;font-weight:900;font-size:18px;',
        'padding:40px 0;',
        '',
        e,
      )
      return undefined
    })
}
