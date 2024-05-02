import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/utils/store/Provider'
import QueryProvider from '@/utils/query/Provider'
import Toast from '@/utils/toast/Toaster'

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
        <QueryProvider>
          <ReduxProvider>
            <div className="dark">
              <div className="bg-black h-[100vh] flex justify-center items-center">
                <div className="lg:w-[448px] md:w-[448px] sm:w-full h-[100vh] overflow-y-scroll scrollbar-hide">
                  {children}
                </div>
              </div>
            </div>
            <Toast />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
