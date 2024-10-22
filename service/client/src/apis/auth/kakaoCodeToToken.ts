import { instance } from '../axios'

export const kakaoCodeToToken = async (code: string): Promise<boolean> => {
  return await instance
    .get(`/kakao/token/${code}`)
    .then(() => true)
    .catch(e => {
      console.error(
        `%cAxios Error%c ${e.message}%c\n%O`,
        'background:rgb(148,71,68);padding:4px 8px;border-radius:8px;font-weight:900;font-size:18px;',
        'padding:40px 0;',
        '',
        e,
      )
      return false
    })
}
