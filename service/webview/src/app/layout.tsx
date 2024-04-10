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
      <body className="[&_*]:font-['Pretendard']">{children}</body>
    </html>
  )
}
