import { instance } from '../axios'

interface T_Purpose {
  title: string
  content: string
  startDate: string
  endDate: string
}

export const monthPurposes = async (date: string) => {
  return await instance
    .get<Array<T_Purpose>>(`purposes/${date}`)
    .then(res => res.data)
    .catch(e => {
      console.error(
        `%cAxios Error%c ${e.message}%c\n%O`,
        'background:rgb(148,71,68);padding:4px 8px;border-radius:8px;font-weight:900;font-size:18px;',
        'padding:40px 0;',
        '',
        e
      )
      // 이하는 더미데이터를 보내는 코드 입니다
      return [
        {
          title: '타임라인 완성',
          content: '타임라인을 완성해요',
          startDate: '2024-03-22',
          endDate: '2024-03-29',
        },
        {
          title: '집에 도착',
          content: '집에 무사히 도착해요',
          startDate: '2024-03-22',
          endDate: '2024-03-23',
        },
      ]
    })
}
