import { instance } from '../../axios'

interface GetMyRoutineResponse {
  id: number
  routineName: string
  exerciseInfoList: {
    exerciseName: string
    repetitions: number
    sets: number
  }[]
  dayOfWeeks: string[]
  routineStatus: {
    archived: boolean
    shared: boolean
  }
}

export const getMyRoutine = async (access_token: string, csrf_token: string) => {
  return await instance
    .get<GetMyRoutineResponse[]>('/routines/my', {
      headers: {
        Authorization: `bearer ${access_token}`,
        'X-XSRF-TOKEN': csrf_token,
        'X-Not-Using-Xquare-Auth': true,
      },
    })
    .then(res => res.data)
}
