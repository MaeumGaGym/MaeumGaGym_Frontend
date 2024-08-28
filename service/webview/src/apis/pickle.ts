import { useQuery } from '@tanstack/react-query'
import { instance } from './axios'

interface IgetAllPickleids {
  video_id: string
  video_url: string
  title: string
  description?: string
  tags?: string[]
  like_count: number
  comment_count: number
  user_info: {
    nickname: string
    profile_image?: string
  }
}

/**
 * 추천 피클 전체 보기
 */
export const getAllPickleIds = (idx: number) => {
  const fetchPickleIds = async (): Promise<IgetAllPickleids> => {
    const { data } = await instance.get<IgetAllPickleids>(`/pickles?idx=${idx}`)
    return data
  }
  return useQuery({
    queryKey: ['pickles', idx],
    queryFn: fetchPickleIds,
  })
}

/**
 * 피클 보기
 */
export const getPickleId = (id: string) => {
  const fetchPickleId = async () => {
    const { data } = await instance.get(`/pickle/${id}`)
    return data
  }
  return useQuery({
    queryKey: ['pickle'],
    queryFn: fetchPickleId,
  })
}

/**
 * 피클 댓글 전체 조회
 */
export const getPickleComent = (id: string) => {
  const fetchAllComment = async () => {
    const { data } = await instance.get(`/pickle/`)
  }
}
