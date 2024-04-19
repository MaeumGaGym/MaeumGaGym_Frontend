import { Twitter, Email, Link, Facebook } from '@package/ui'
import Modal from '@/components/modal'

const ShareContainer = ({ setIsClose }: { setIsClose: () => void }) => {
  return (
    <Modal setIsClose={setIsClose}>
      <>
        <div className="flex items-center justify-center px-5 py-3">
          <div className="flex justify-between w-full">
            <div className="flex gap-[14px] items-center">
              <span className="text-titleMedium ">공유</span>
            </div>
          </div>
        </div>
        <div className="flex py-[10px] px-5 gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#0866FF]">
              <Facebook size={36} />
            </div>
            <span className="text-gray200">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#1DA1F2]">
              <Twitter size={36} />
            </div>
            <span className="text-gray200">Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-gray700">
              <Email size={36} className="text-gray300" />
            </div>
            <span className="text-gray200">이메일</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-gray700">
              <Link size={36} className="text-gray300" />
            </div>
            <span className="text-gray200">링크</span>
          </div>
        </div>
      </>
    </Modal>
  )
}

export default ShareContainer
