'use client'
import { Footer, Pickle, Button, Run, CalculatorIcon, TimerIcon, Chevron } from '@package/ui'
import Image from 'next/image'
import pickleTestImage from '../assets/pickleTestImage.png'
import Timer from '@/components/timer'

const Home = () => {
  return (
    <div>
      <div className="h-[360px] w-full">
        <div className="h-full w-full blur-[120px] border-b-gray100 border-b relative">
          <div className="absolute top-[160px] left-[270px] w-[180px] h-[180px] bg-blue500"></div>
          <div className="absolute top-[100px] right-[270px] w-[180px] h-[180px] bg-blue200"></div>
        </div>
        <div className="w-full top-[170px] flex justify-center absolute px-8">
          <div className="flex flex-1 flex-col max-w-[1200px] ">
            <span className="text-blue500 text-titleSmall">오늘의 동기부여</span>
            <p className="text-gray900 text-labelLarge mt-3 mb-6 w-[510px]">
              “그것은 완벽에 관한 것이 아닙니다, 그것은 노력에 관한 것입니다. 매일매일 노력을 기울인다면 그곳에서 변화가
              일어날 것입니다.”
            </p>
            <span className="text-gray600 text-bodySmall">Jillian Michaels</span>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 px-8 pb-60 flex justify-center">
        <div className="flex flex-col gap-20 w-[1200px]">
          <div className="w-full h-fit gap-6 flex sm:flex-col md:flex-col">
            <div className="flex flex-col gap-3 lg:flex-1 sm:h-60 md:h-60">
              <div className="border border-gray100 rounded-2xl px-10 flex gap-20 flex-1">
                <div className="flex gap-2 items-center">
                  <Run size={40} className="text-blue500" />
                  <span className="text-gray800 text-titleSmall">오늘의 활동</span>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray500 text-labelMedium">걸음수</span>
                    <span className="text-blue500 text-titleMedium">1972걸음</span>
                  </div>
                  <span className="text-gray200 text-headlineSmall">/</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray500 text-labelMedium">운동시간</span>
                    <span className="text-blue500 text-titleMedium">20분</span>
                  </div>
                </div>
              </div>
              <Timer />
            </div>
            <div className="flex gap-6">
              <div className="border border-gray100 rounded-2xl py-10 px-6 flex flex-col justify-between w-60 h-60 sm:flex-1 md:flex-1">
                <CalculatorIcon size={40} />
                <div className="flex flex-col gap-3">
                  <span className="text-black text-labelLarge">칼로리 계산기</span>
                  <p className="text-gray600 text-bodySmall">
                    먹은 음식의 칼로리를
                    <br />
                    계산해 보세요.
                  </p>
                </div>
              </div>
              <div className="border border-gray100 rounded-2xl py-10 px-6 flex flex-col justify-between w-60 h-60 sm:flex-1 md:flex-1">
                <TimerIcon size={40} />
                <div className="flex flex-col gap-3">
                  <span className="text-black text-labelLarge">와카타임</span>
                  <p className="text-gray600 text-bodySmall">
                    지금까지 한 운동 시간을
                    <br />
                    확인해 보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit gap-6 flex sm:flex-col">
            <div className="border border-gray100 rounded-2xl pt-8 px-6 pb-10 flex flex-col gap-8 flex-1">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-black text-titleMedium">오늘의 루틴</span>
                  <span className="text-black text-bodyMedium">대충 루틴 이름</span>
                </div>
                <Button kind="primary2" fontSize="small" className="h-fit">
                  루틴으로 이동
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[18px] items-center">
                    <div className="w-16 h-16 flex justify-center items-center rounded-lg bg-gray25"></div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray800 text-bodyMedium">맨몸 어쩌고 운동</span>
                      <span className="text-gray400 text-bodySmall">10개 | 2세트</span>
                    </div>
                  </div>
                  <Chevron direction="right" className="text-gray200" />
                </div>
              </div>
            </div>
            <div className="border border-gray100 rounded-2xl pt-8 px-6 pb-10 flex flex-col gap-8 flex-1">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-black text-titleMedium">오늘의 식단</span>
                  <span className="text-black text-bodyMedium">2개의 식단</span>
                </div>
                <Button kind="primary2" fontSize="small" className="h-fit">
                  루틴으로 이동
                </Button>
              </div>
              <div className="flex flex-col gap-[13px] pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <span className="text-black text-titleSmall">아침</span>
                    <span className="text-gray600 text-labelSmall">아침</span>
                  </div>
                  <span className="text-blue500 text-bodyMedium">1,498.4Kcal</span>
                </div>
                <div className="w-full h-px rounded-[1px] bg-gray100" />
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <span className="text-gray700 text-labelSmall">바나나</span>
                    <span className="text-gray400 text-bodySmall">100g</span>
                  </div>
                  <span className="text-gray600 text-bodySmall">1,498.4Kcal</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Pickle className="text-blue500" />
                <span className="text-black text-titleMedium">피클</span>
              </div>
              <Button kind="primary2" fontSize="small" className="h-fit">
                더보기
              </Button>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-3 flex-1">
                <Image src={pickleTestImage} alt="pickle 테스트 이미지입니다" className="w-full h-auto rounded-lg" />
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-black text-bodyMedium">헬린이들은 꼭 해야 하는 삼두운동 4가지!!</p>
                  <span className="text-gray400 text-bodySmall">조회수 55만회</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <Image src={pickleTestImage} alt="pickle 테스트 이미지입니다" className="w-full h-auto rounded-lg" />
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-black text-bodyMedium">헬린이들은 꼭 해야 하는 삼두운동 4가지!!</p>
                  <span className="text-gray400 text-bodySmall">조회수 55만회</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <Image src={pickleTestImage} alt="pickle 테스트 이미지입니다" className="w-full h-auto rounded-lg" />
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-black text-bodyMedium">헬린이들은 꼭 해야 하는 삼두운동 4가지!!</p>
                  <span className="text-gray400 text-bodySmall">조회수 55만회</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <Image src={pickleTestImage} alt="pickle 테스트 이미지입니다" className="w-full h-auto rounded-lg" />
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-black text-bodyMedium">헬린이들은 꼭 해야 하는 삼두운동 4가지!!</p>
                  <span className="text-gray400 text-bodySmall">조회수 55만회</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <Image src={pickleTestImage} alt="pickle 테스트 이미지입니다" className="w-full h-auto rounded-lg" />
                <div className="flex flex-col gap-2 px-1">
                  <p className="text-black text-bodyMedium">헬린이들은 꼭 해야 하는 삼두운동 4가지!!</p>
                  <span className="text-gray400 text-bodySmall">조회수 55만회</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
