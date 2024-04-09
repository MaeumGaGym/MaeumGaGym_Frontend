import { instance } from '../axios'

export type loginCategory = 'google' | 'kakao' | 'apple'

export const login = async (category: loginCategory, token: string) => {
  return await instance
    .get(`${category}/login?access_token=${token}`)
    .then(res => {
      // 토큰이 정상적으로 오는지 확인하기 위한 조치
      console.log(res)
      return 1
    })
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
