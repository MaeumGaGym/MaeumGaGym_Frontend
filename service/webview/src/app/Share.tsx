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
        <div className="flex py-[10px] px-5 gap-6 justify-center">
          <div className="flex flex-col items-center gap-2" onClick={facebookShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#0866FF]">
              <Facebook size={36} />
            </div>
            <span className="text-gray200">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2" onClick={twitterShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-[#1DA1F2]">
              <Twitter size={36} />
            </div>
            <span className="text-gray200">Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2" onClick={emailShare}>
            <div className="w-16 h-16 rounded-[50%] flex justify-center items-center bg-gray700">
              <Email size={36} className="text-gray300" />
            </div>
            <span className="text-gray200">이메일</span>
          </div>
          <div className="flex flex-col items-center gap-2" onClick={linkCopy}>
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
