'use client'

import { GetQuotesResponse } from '@/apis/quote/getQuotes'

const QuoteBanner = ({ quote, quoter }: GetQuotesResponse) => {
  return (
    <section className="h-[360px] w-full">
      <div className="h-full w-full blur-[120px] border-b-gray100 border-b relative overflow-hidden">
        <div className="absolute top-[160px] left-[270px] w-[180px] h-[180px] bg-blue500" />
        <div className="absolute top-[100px] right-[270px] w-[180px] h-[180px] bg-blue200" />
      </div>
      <div className="w-full top-[170px] flex justify-center absolute px-8">
        <div className="flex flex-1 flex-col max-w-[1200px] ">
          <span className="text-blue500 text-titleSmall">오늘의 동기부여</span>
          <p className="text-gray900 text-labelLarge sm:text-labelMedium mt-3 mb-6 w-full max-w-[510px] break-keep transition-all">
            “{quote}”
          </p>
          <span className="text-gray600 text-bodySmall">{quoter}</span>
        </div>
      </div>
    </section>
  )
}

export default QuoteBanner
