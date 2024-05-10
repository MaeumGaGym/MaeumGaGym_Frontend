'use client'
import React, { useState, useEffect } from 'react'
import { PoseCard } from '@/components'
import PoseSearchModal from './PoseSearchModal'
import { getPoses } from '@/apis/pose/getPoses'
import Image from 'next/image'
import { Filter, Footer, Search } from '@package/ui'
import tentaiveBannerIcon from '../../assets/tentativeBannerIcon.png'
import { getCookie } from '@/utils'
import router from 'next/router'
// import PoseExplain from './PoseExplain'

interface Pose {
  id: string
  simple_name?: string
  exact_name: string
  thumbnail: string
  video?: string
  simple_part: string
  exact_part: string
  start_pose?: string
  exercise_way?: string
  breathe_way?: string
  caution?: string
  need_machine?: boolean
}

const asdf: string[] = []

const Pose = () => {
  const [poseList, setPoseList] = useState<Pose[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const [clickPoseList, setClickPoseList] = useState<Number>(0)
  const [poseFilter, setPoseFilter] = useState<Boolean>([true, true])

  const togglePoseFilter = index => {
    const newPoseFilter = [...poseFilter]
    newPoseFilter[index] = !newPoseFilter[index]
    if (!newPoseFilter[0] && !newPoseFilter[1]) {
      newPoseFilter[index] = true
    }
    console.log(newPoseFilter)
    setPoseFilter(newPoseFilter)
  }

  const modalVisible = () => {
    setVisible(!visible)
  }
  const bodyCategory: string[] = ['전체', '가슴', '어깨', '팔', '복근', '등', '하체']

  const getPoseData = async () => {
    // const RF_TOKEN = getCookie('RF-TOKEN') || 'undefined'
    const ACCESS_TOKEN = getCookie('access_token') || 'undefined'
    setPoseList(await getPoses(ACCESS_TOKEN))
  }

  useEffect(() => {
    getPoseData()
  }, [])

  return (
    <div>
      <div className="w-full h-[360px] flex justify-center items-end bg-gray25 border border-gray100 pb-16 px-8">
        <div className="w-full max-w-[1200px] flex justify-between items-center">
          <div className="w-full h-20 gap-2 ">
            <p className="text-headlineSmall text-black">운동 자세</p>
            <p className="text-bodyMedium text-gray600">
              올바른 자세를 통해 부상을 방지하고, 효과적으로 근력을 개발해 보세요.
            </p>
          </div>
          <Image src={tentaiveBannerIcon} alt="" />
        </div>
      </div>
      <div className="w-full pt-10 px-8 pb-60 flex justify-center gap-6">
        <div className="w-full max-w-[166px] flex flex-col">
          <div className="w-full h-12 flex px-2 items-center rounded-lg">
            <p className="text-labelSmall text-gray600">운동 부위</p>
          </div>
          {bodyCategory.map((i: string, j) => (
            <div
              onClick={() => setClickPoseList(j)}
              key={i}
              className={`w-full h-12 flex px-[12px] items-center rounded-lg group ${clickPoseList == j ? 'bg-blue50' : 'bg-white'} hover:bg-blue50 cursor-pointer select-none`}
            >
              <p
                className={`${clickPoseList == j ? 'text-blue500 text-labelMedium' : 'text-gray900 text-bodyMedium'} group-hover:text-blue500`}
              >
                {i}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[1200px] flex-col flex gap-[32px]">
          <div className="px-[4px] justify-between flex w-full items-center select-none">
            <div className="gap-2 items-center flex">
              <p className="text-labelLarge text-black">전체</p>
              <p className="text-labelLarge text-blue500">{poseList ? poseList.length : 0}</p>
            </div>
            <div className="items-center flex gap-2">
              <Filter size={16} className="text-gray900" />
              <p className="text-gray800 text-bodySmall">필터</p>
              <div className="flex items-center gap-2 pr-[24px] pl-[12px]">
                <div
                  className={`rounded-lg flex items-center justify-center gap-2 px-[12px] py-2 border ${
                    poseFilter[0] ? 'bg-blue50 border-blue500' : 'border-gray200'
                  } cursor-pointer `}
                  onClick={() => togglePoseFilter(0)}
                >
                  <p className={`text-labelSmall text-gray600 ${poseFilter[0] && 'text-blue500'}`}>맨몸 운동</p>
                </div>
                <div
                  className={`rounded-lg flex items-center justify-center gap-2 px-[12px] py-2 border ${
                    poseFilter[1] ? 'bg-blue50 border-blue500' : 'border-gray200'
                  } cursor-pointer `}
                  onClick={() => togglePoseFilter(1)}
                >
                  <p className={`text-labelSmall text-gray600 ${poseFilter[1] && 'text-blue500'}`}>기구 운동</p>
                </div>
              </div>
              <div
                onClick={modalVisible}
                className="rounded-lg bg-gray25 border-gray100 border flex items-center justify-center px-[12px] py-[8px] gap-[4px] cursor-pointer"
              >
                <Search size={16} className="text-gray600" />
                <p className="text-labelSmall text-gray600">자세 검색</p>
              </div>
            </div>
          </div>
          <div className="w-full flex-wrap gap-x-[11px] gap-y-[32px]">
            {poseList &&
              poseList.map((pose: Pose) => (
                <PoseCard
                  key={pose.id}
                  exact_name={pose.exact_name}
                  simple_part={pose.simple_part}
                  exact_part={pose.exact_part}
                  thumbnail={pose.thumbnail}
                  onClick={() => router.push(`/poses/${pose.id}`)}
                />
              ))}
          </div>
        </div>
        <div className="w-full max-w-[166px] flex h-[48px]" />
      </div>
      {visible ? <PoseSearchModal onClick={modalVisible} /> : null}
      <Footer />
    </div>
  )
}

export default Pose
