import { Twitter, Email, Link, Facebook } from '@package/ui'
import Modal from '@/components/modal'
import { toast } from '@/utils/toast/toast'
import { useSearchParams } from 'next/navigation'

const ShareContainer = ({ setIsClose }: { setIsClose: () => void }) => {
  const pickleParams = useSearchParams()
  const shareLink = `${process.env.NEXT_PUBLIC_BASE_URL}/pickle?${pickleParams}`
  const linkCopy = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      setIsClose()
      toast('success', '링크를 복사했습니다')
    })
  }
  const facebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`)
  }
  const twitterShare = () => {
    window.open(`https://www.twitter.com/intent/tweet?&url=${shareLink}`)
  }
  const emailShare = () => {
    const body = encodeURIComponent(shareLink)
    window.location.href = `mailto:?body=${body}`
  }

  const buttonSize = {
    default: 36,
    min: 24,
  }

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
        <div className="flex py-[10px] px-5 gap-6 justify-start fold:gap-4">
          <div className="flex flex-col items-center gap-2" onTouchEnd={facebookShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#0866FF] fold:w-12 fold:h-12">
              <Facebook size={window.innerWidth < 375 ? buttonSize.min : buttonSize.default} />
            </div>
            <span className="text-gray200">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2" onTouchEnd={twitterShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#1DA1F2] fold:w-12 fold:h-12">
              <Twitter size={window.innerWidth < 375 ? buttonSize.min : buttonSize.default} />
            </div>
            <span className="text-gray200">Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2" onTouchEnd={emailShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-gray700 fold:w-12 fold:h-12">
              <Email size={window.innerWidth < 375 ? buttonSize.min : buttonSize.default} className="text-gray300" />
            </div>
            <span className="text-gray200">이메일</span>
          </div>
          <div className="flex flex-col items-center gap-2" onTouchEnd={linkCopy}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-gray700 fold:w-12 fold:h-12">
              <Link size={window.innerWidth < 375 ? buttonSize.min : buttonSize.default} className="text-gray300" />
            </div>
            <span className="text-gray200">링크</span>
          </div>
        </div>
      </>
    </Modal>
  )
}

export default ShareContainer
