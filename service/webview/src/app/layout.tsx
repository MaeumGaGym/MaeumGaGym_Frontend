import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '마음가짐',
  description: '헬스를 시작하는게 어려운 당신을 위한 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="[&_*]:font-['Pretendard']">
        <div className="dark">
          <div className="bg-black h-[100vh] flex justify-center items-center">
            <div className="lg:w-[448px] md:w-[448px] sm:w-full h-[100vh]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
