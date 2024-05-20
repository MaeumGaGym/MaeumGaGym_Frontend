import { instance } from '../../axios'

interface PostRoutineResponse {
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

export const postRoutine = async (access_token: string, csrf_token: string) => {
  return await instance
    .post<PostRoutineResponse>('/routines/today', {
      headers: {
        Authorization: `bearer ${access_token}`,
        'X-XSRF-TOKEN': csrf_token,
        'X-Not-Using-Xquare-Auth': true,
      },
    })
    .then(res => res.data)
}
