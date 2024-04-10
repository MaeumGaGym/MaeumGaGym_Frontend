import Comment from '@/app/Comment'
import VideoPlayer from './VideoPlayer'
import './animation.css'

const Pickle = () => {
  return (
    <div className="dark">
      <div className="bg-black h-[calc(100dvh-60px)] flex justify-center items-center">
        <div
          id="pickles"
          className="flex lg:gap-[24px] md:gap-[24px] sm:gap-0 flex-wrap items-center lg:w-[448px] md:w-[448px] sm:w-full h-full overflow-y-scroll lg:py-[24px] md:py-[24px]"
        >
          <VideoPlayer src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p" videoId="9ecf46bb" />
          <VideoPlayer src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p" videoId="9ecf46bb" />
        </div>
      </div>
    </div>
  )
}

export default Pickle
