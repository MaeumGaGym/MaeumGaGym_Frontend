'use client'
import Image from "next/image";
import Button from "@/components/button";
import Logo from "@/assets/image/HeaderLogo.svg"
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex w-auto h-[60px] items-center justify-between px-[170px] bg-white">
      <div className="flex items-center gap-8">
        <Image src={Logo} alt="logo image" className="w-[114px] h-[42px] object-cover cursor-pointer" onClick={() => router.push('/')}/>
        <div className="flex items-center gap-3">
          <Button kind="white" fontSize="small" onClick={() => router.push('/selfcare')}>자기관리</Button>
          <Button kind="white" fontSize="small" onClick={() => router.push('/pose')}>운동자세</Button>
          <Button kind="white" fontSize="small" onClick={() => router.push('/pickle')}>피클</Button>
          <Button kind="white" fontSize="small" onClick={() => router.push('/shop')}>마켓</Button>
        </div>
      </div>
      <div className="flex items-center gap-3">
          <Button kind="white" fontSize="small">로그인</Button>
          <Button kind="primary" fontSize="small">문의하기</Button>
      </div>
    </header>
  )
}

export default Header;