'use client'
import { Footer } from '@package/ui'
import Banner from './Banner'
import routineIcon from '@/assets/routineIcon.png'
import goalIcon from '@/assets/goalIcon.png'
import dietIcon from '@/assets/dietIcon.png'
import pictureIcon from '@/assets/pictureIcon.png'
import IconButton from '@/components/IconButton'
import Calendar from './Calendar'

const selfcare = () => {
  return (
    <div>
      <Banner />
      <div className="flex w-full px-8 pt-10 pb-60 justify-center">
        <div className="w-[1200px] flex flex-col gap-16">
          <div className="flex gap-6">
            <IconButton
              src={routineIcon}
              alt='루틴 icon'
              title='내 루틴'
              text={['나만의 루틴을 구성하여', '규칙적인 운동을 해보세요.']}
            />
            <IconButton
              src={goalIcon}
              alt='목표 icon'
              title='목표'
              text='나만의 목표를 세워보세요'
            />
            <IconButton
              src={dietIcon}
              alt='식단 icon'
              title='식단'
              text={['나만의 식단을 구성하여', '규칙적인 식사를 해보세요.']}
            />
            <IconButton
              src={pictureIcon}
              alt='오운완 icon'
              title='오운완'
              text={['오늘의 운동을 완료하고,', '내 모습을 사진으로 남겨보세요.']}
            />
          </div>
          <Calendar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default selfcare
