import { Header } from '@/components/Header'
import { Footer } from '@package/ui'

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="h-[100dvh] w-full pt-[60px] bg-white relative overflow-hidden">
        <div className="h-[600px] w-[600px] rounded-[100%] bg-blue200 absolute top-[200px] right-0" />
        <div className="h-[560px] w-[560px] rounded-[100%] bg-blue500 absolute left-0 bottom-0" />
        <div className="h-[100dvh] w-full absolute top-0 left-0 pt-[240px] bg-[rgba(255,255,255,0.4)] backdrop-blur-[120px]">
          <div className="text-gray900 text-headlineLarge text-center">
            바른 운동을 위한
            <br />
            마음가짐
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
