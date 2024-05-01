import { instance } from '../axios'

type DayOfWeeks = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

interface T_Routine {
  userInfo: {
    nickname: string
    profileImage: string
  }
  routineList: {
    id: number
    routine_name: string
    exercise_info_response_list: {
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
    day_of_weeks: DayOfWeeks[]
    routine_status: {
      is_archived: boolean
      is_shared: boolean
    }
  }[]
}

export const monthRoutines = async () => {
  return await instance
    .get<T_Routine>('routines/me/all')
    .then(res => res.data)
    .catch((e): T_Routine => {
      console.error(e)

      // 이하는 더미데이터를 보내는 코드입니다
      return {
        userInfo: {
          nickname: '박지민',
          profileImage: 'fileURL',
        },
        routineList: [
          {
            id: 1,
            routine_name: '등 운동',
            exercise_info_response_list: [
              {
                pose: {
                  id: 1,
                  need_machine: false,
                  name: '어떤 등운동',
                  simple_part: ['등'],
                  exact_part: ['등 위쪽'],
                  thumbnail: '썸네일',
                },
                repetitions: 20,
                sets: 3,
              },
              {
                pose: {
                  id: 1,
                  need_machine: false,
                  name: '그런 등운동',
                  simple_part: ['등'],
                  exact_part: ['등 가운데'],
                  thumbnail: '썸네일',
                },
                repetitions: 15,
                sets: 5,
              },
              {
                pose: {
                  id: 1,
                  need_machine: false,
                  name: '저런 등운동',
                  simple_part: ['등'],
                  exact_part: ['등 아래'],
                  thumbnail: '썸네일',
                },
                repetitions: 20,
                sets: 5,
              },
            ],
            day_of_weeks: ['MONDAY'],
            routine_status: {
              is_archived: true,
              is_shared: true,
            },
          },
        ],
      }
    })
}
