import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '마음가짐',
  description: '헬스를 시작하는게 어려운 당신을 위한 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="[&_*]:font-['Pretendard']">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
