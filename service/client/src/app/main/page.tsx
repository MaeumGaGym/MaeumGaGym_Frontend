'use client'
import { Footer } from '@package/ui'
// import { useLayoutEffect, useState } from 'react'
// import { GetQuotesResponse } from '@/apis/quote/getQuotes'
import QuoteBanner from './QuoteBanner'
import MainSection from './/MainSection'
// import { setCookie } from '@/utils'

const Home = () => {
  // const [quoteData, setQuoteData] = useState<GetQuotesResponse>({ quote: '', quoter: '' })
  // const params = useSearchParams()
  // useLayoutEffect(() => {
  //   const RF_TOKEN = params.get('refresh')
  //   const ACCESS_TOKEN = params.get('token')
  //   if(RF_TOKEN) {
  //     setCookie('RF_TOKEN', RF_TOKEN)
  //   }
  //   if(ACCESS_TOKEN) {
  //     setCookie('access_token', ACCESS_TOKEN)
  //   }
  //   router.replace('/main')
  // }, [])
  return (
    <div>
      <QuoteBanner
        quoter="Jillian Michaels"
        quote="그것은 완벽에 관한 것이 아닙니다, 그것은 노력에 관한 것입니다. 매일매일 노력을 기울인다면 그곳에서 변화가 일어날 것입니다."
      />
      <MainSection />
      <Footer />
    </div>
  )
}

export default Home
