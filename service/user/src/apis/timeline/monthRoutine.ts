import { instance } from '../axios'

type DayOfWeeks = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

interface T_Routine {
  userInfo: {
    nickname: string
    profileImage: string
  }
  routineList: [
    {
      id: number
      routineName: string
      exerciseInfoList: {
        exerciseName: string
        repetitions: number
        sets: number
      }[]
      dayOfWeeks: Array<DayOfWeeks>
      routineStatus: {
        archived: boolean
        shared: boolean
      }
      completed: boolean
    },
  ]
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
            routineName: '등 운동',
            exerciseInfoList: [
              {
                exerciseName: '어떤 등 운동',
                repetitions: 20,
                sets: 3,
              },
              {
                exerciseName: '그런 등 운동',
                repetitions: 15,
                sets: 5,
              },
              {
                exerciseName: '저쩌구 등 운동',
                repetitions: 20,
                sets: 5,
              },
            ],
            dayOfWeeks: ['MONDAY'],
            routineStatus: {
              archived: true,
              shared: true,
            },
            completed: false,
          },
        ],
      }
    })
}
