import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="transition-all w-full lg:h-[360px] h-[440px] bg-gray800 lg:px-[360px] md:px-[120px] sm:px-[40px] py-[48px] flex flex-col justify-between">
      <div className="flex">
        <div className="w-[240px] gap-3 flex flex-col">
          <span className="text-titleSmall text-white">서비스</span>
          <span className="text-bodyMedium text-gray500 cursor-pointer hover:text-blue500 transition-all w-fit">
            마음가짐 소개
          </span>
        </div>
        <div className="w-[240px] gap-3 flex flex-col">
          <span className="text-titleSmall text-white">고객센터</span>
          <span className="text-bodyMedium text-gray500 cursor-pointer hover:text-blue500 transition-all w-fit">
            문의하기
          </span>
        </div>
      </div>
      <div className="w-auto lg:gap-0 gap-[32px] flex md:flex-col-reverse sm:flex-col-reverse justify-start lg:justify-between lg:items-center items-start">
        <div className="flex flex-col gap-[18px]">
          <ul className="flex items-center gap-2 text-labelSmall text-gray300 [&_li]:flex [&_li]:items-center [&_li]:gap-2 [&_li]:after:content-[''] [&_li]:after:inline-block [&_li]:after:h-[16px] [&_li]:after:w-[1px] [&_li]:after:rounded-full [&_li]:after:bg-gray300 [&_li:last-child]:after:hidden">
            <li className="text-[20px] font-bold text-gray100 leading-6">마음가짐</li>
            <li className="cursor-pointer"><Link href="/privacy">개인정보처리방침</Link></li>
            <li className="cursor-pointer">이용약관</li>
          </ul>
          <p className="text-bodySmall text-gray500">
            대표자: 박준하 | 개인정보보호책임자: 김현석
            <br />
            이메일: abcd1234@gmail.com | 주소: 대전광역시 유성구 가정북로 76
          </p>
          <span className="text-bodySmall text-gray500">©MAEUMGAGYM. ALL RIGHT RESERVED</span>
        </div>
        <div className="flex gap-3">
          <div className="w-[36px] h-[36px] bg-gray500 rounded-full cursor-pointer" />
          <div className="w-[36px] h-[36px] bg-gray500 rounded-full cursor-pointer" />
          <div className="w-[36px] h-[36px] bg-gray500 rounded-full cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}
