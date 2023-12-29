import VideoPlayer from './VideoPlayer'

const Pickle = () => {
  return (
    <div className="dark">
      <div className="bg-black h-[calc(100vh-60px)] flex justify-center items-center">
        <div className="flex flex-wrap items-center w-[448px]">
          <VideoPlayer src="https://video-macos.pokabook.kr/771d5ba1/index.m3u8?scale=1080p" />
        </div>
      </div>
    </div>
  )
}

export default Pickle
