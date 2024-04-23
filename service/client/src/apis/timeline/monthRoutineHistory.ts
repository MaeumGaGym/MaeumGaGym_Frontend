import { instance } from '../axios'

interface T_Routine {
  id: number
  routine_name: string
  exercise_info_list: {
    pose: {
      id: number
      need_machine: boolean
      name: string
      simple_part: string[]
      exact_part: string[]
      thumbnail: string
    }
    repetitions: number
    sets: number
  }[]
  date: string
}

export const monthRoutineHistorys = async (date: string) => {
  return await instance
    .get<Array<T_Routine>>(`routines/histories/${date}`)
    .then(res => res.data)
    .catch((e): Array<T_Routine> => {
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
          id: 123456789,
          routine_name: '팔 운동',
          exercise_info_list: [
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '멋진 팔 운동',
                simple_part: ['팔'],
                exact_part: ['이두'],
                thumbnail: '썸네일',
              },
              repetitions: 20,
              sets: 3,
            },
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '잘생긴 팔 운동',
                simple_part: ['팔'],
                exact_part: ['대두'],
                thumbnail: '썸네일',
              },
              repetitions: 20,
              sets: 4,
            },
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '섹시한 팔 운동',
                simple_part: ['팔'],
                exact_part: ['삼두'],
                thumbnail: '썸네일',
              },
              repetitions: 15,
              sets: 5,
            },
          ],
          date: '2024-03-24',
        },
        {
          id: 987654321,
          routine_name: '다리 운동',
          exercise_info_list: [
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '멋진 다리 운동',
                simple_part: ['다리'],
                exact_part: ['종아리'],
                thumbnail: '썸네일',
              },
              repetitions: 20,
              sets: 3,
            },
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '잘생긴 다리 운동',
                simple_part: ['다리'],
                exact_part: ['종아리'],
                thumbnail: '썸네일',
              },
              repetitions: 20,
              sets: 4,
            },
            {
              pose: {
                id: 1,
                need_machine: false,
                name: '섹시한 다리 운동',
                simple_part: ['다리'],
                exact_part: ['종아리'],
                thumbnail: '썸네일',
              },
              repetitions: 15,
              sets: 5,
            },
          ],
          date: '2024-03-23',
        },
      ]
    })
}
