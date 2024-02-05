import React from 'react'
import type { Metadata } from 'next'
import QueryProvider from '@/utils/query/Provider'
import ReduxProvider from '@/utils/store/Provider'
import Toaster from '@/utils/toast/Toaster'
import '@/styles/globals.css'
import { Footer } from '@package/ui'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '마음가짐',
  description: '헬스를 시작하는게 어려운 당신을 위한 서비스',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className="[&_*]:font-['Pretendard']">
        <QueryProvider>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
