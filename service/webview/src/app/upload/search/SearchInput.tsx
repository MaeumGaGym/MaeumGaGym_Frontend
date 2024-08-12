'use client'
import { Chevron, Close, Search } from '@package/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchInput = () => {
  const [searchData, setSearchData] = useState<string>('')
  const nav = useRouter()
  return (
    <div className="flex px-5 py-2 gap-3 items-center">
      <Chevron onClick={() => nav.back()} className="text-white" />
      <div className="flex px-3 py-2 gap-2 w-full bg-gray800 rounded-lg">
        <Search className="text-gray600" />
        <input
          className="w-full text-bodyMedium outline-none bg-transparent caret-blue200 text-white"
          placeholder="자세 검색"
          value={searchData}
          onChange={e => setSearchData(e.target.value)}
        />
        {searchData.length !== 0 && <Close onClick={() => setSearchData('')} className="text-white" />}
      </div>
    </div>
  )
}

export default SearchInput
