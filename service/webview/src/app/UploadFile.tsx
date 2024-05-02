'use client'
import { Camera } from '@package/ui'

const UploadFile = () => {
  const linkUploadPage = () => {}

  return (
    <div className="lg:w-[448px] md:w-[448px] sm:w-full flex justify-end px-5 py-3 fixed top-0">
      <Camera className="text-white cursor-pointer" size={28} onClick={linkUploadPage} />
    </div>
  )
}

export default UploadFile
