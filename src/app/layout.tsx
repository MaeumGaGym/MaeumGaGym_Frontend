import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import React from 'react'
import QueryProvider from '@/utils/query/provider'
import ReduxProvider from '@/utils/store/provider'

export const metadata: Metadata = {
  title: '마음가짐',
  description: '헬스를 시작하는게 어려운 당신을 위한 서비스',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className="[&_*]:font-['Pretendard']">
        <QueryProvider>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout;