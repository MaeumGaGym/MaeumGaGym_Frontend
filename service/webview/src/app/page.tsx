import VideoPlayer from './VideoPlayer'
import './animation.css'
import UploadFile from './UploadFile'

const Pickle = () => {
  return (
    <div
      id="pickles"
      className="flex lg:gap-[24px] md:gap-[24px] sm:gap-0 flex-wrap items-center  h-full lg:py-[24px] md:py-[24px]"
    >
      <UploadFile />
      <VideoPlayer src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p" videoId="9ecf46bb" />
      <VideoPlayer src="https://video-macos.pokabook.kr/9ecf46bb/index.m3u8?scale=1080p" videoId="9ecf46bb" />
    </div>
  )
}

export default Pickle
