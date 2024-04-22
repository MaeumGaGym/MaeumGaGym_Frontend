import { Button, CalculatorIcon, Pickle, TimerIcon } from '@package/ui'
import IconButton from '@/components/IconButton'
import Timer from '@/components/timer'
import pickleTestImage from '../../assets/pickleTestImage.png'
import TodaySection from './TodaySection'
import PoseItem from './PoseItem'
import DietItem from './DietItem'
import PickleItem from '@/components/PickleItem'
import WalkSection from './WalkSection'

const MainSection = () => {
  return (
    <section className="w-full pt-10 px-8 pb-60 flex justify-center">
      <section className="flex flex-col gap-20 w-[1200px]">
        <section className="w-full h-fit gap-6 flex sm:flex-col md:flex-col">
          <div className="flex flex-col gap-3 lg:flex-1 sm:h-60 md:h-60">
            <WalkSection count={1972} time={20} />
            <Timer />
          </div>
          <div className="flex gap-6">
            <IconButton
              icon={<CalculatorIcon size={40} />}
              title="칼로리 계산기"
              text={['먹은 음식의 칼로리를', '계산해 보세요.']}
            />
            <IconButton
              icon={<TimerIcon size={40} />}
              title="와카타임"
              text={['지금까지 한 운동 시간을', '확인해 보세요.']}
            />
          </div>
        </section>
        <section className="w-full h-fit gap-6 flex sm:flex-col">
          <TodaySection title="루틴" subTitle="루틴 이름">
            <div className="flex flex-col gap-4">
              <PoseItem name="운동 동작 이름" reps={10} sets={2} />
              <PoseItem name="운동 동작 이름" reps={10} sets={2} />
              <PoseItem name="운동 동작 이름" reps={10} sets={2} />
            </div>
          </TodaySection>
          <TodaySection title="식단" subTitle="2개의 식단">
            <DietItem
              title="아침"
              subTitle="건강한 식단"
              dietInfoList={[
                {
                  name: '바나나',
                  gram: 100,
                  kcal: 100.4,
                },
              ]}
            />
          </TodaySection>
        </section>
        <section className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Pickle className="text-blue500" />
              <span className="text-black text-titleMedium">피클</span>
            </div>
            <Button kind="primary2" fontSize="small" className="h-fit">
              더보기
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-2 md:grid-cols-4 sm:grid-cols-3 md:[&_div:nth-child(5)]:hidden sm:[&_div:nth-child(5)]:hidden sm:[&_div:nth-child(4)]:hidden">
            <PickleItem src={pickleTestImage.src} title="헬린이들은 꼭 해야 하는 삼두운동 4가지!!" count={0} />
            <PickleItem src={pickleTestImage.src} title="헬린이들은 꼭 해야 하는 삼두운동 4가지!!" count={0} />
            <PickleItem src={pickleTestImage.src} title="헬린이들은 꼭 해야 하는 삼두운동 4가지!!" count={0} />
            <PickleItem src={pickleTestImage.src} title="헬린이들은 꼭 해야 하는 삼두운동 4가지!!" count={0} />
            <PickleItem src={pickleTestImage.src} title="헬린이들은 꼭 해야 하는 삼두운동 4가지!!" count={0} />
          </div>
        </section>
      </section>
    </section>
  )
}

export default MainSection
