import { instance } from '../axios'

interface T_Routine {
  id: number
  routine_name: string
  exercise_info_list: {
    exercise_name: string
    repetitions: number
    sets: number
  }[]
  date: string
}

export const monthRoutines = async (date: string) => {
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
              exercise_name: '무슨 팔 운동',
              repetitions: 20,
              sets: 3,
            },
            {
              exercise_name: '어떤 팔 운동',
              repetitions: 20,
              sets: 4,
            },
            {
              exercise_name: '그런 팔 운동',
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
              exercise_name: '무슨 다리 운동',
              repetitions: 20,
              sets: 3,
            },
            {
              exercise_name: '어떤 다리 운동',
              repetitions: 20,
              sets: 4,
            },
            {
              exercise_name: '그런 다리 운동',
              repetitions: 15,
              sets: 5,
            },
          ],
          date: '2024-03-23',
        },
      ]
    })
}
