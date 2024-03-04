'use client'
import { useEffect } from 'react'

const itemTypeArr = [
  { title: '쉐이크', type: 'shaek' },
  { title: '닭가슴살', type: 'darkasemsal1' },
  { title: '비타민', type: 'vitamin1' },
  { title: '보호대', type: 'bohodae1' },
  { title: '쉐이크', type: 'shaek2' },
  { title: '닭가슴살', type: 'darkasemsal2' },
  { title: '비타민', type: 'vitamin2' },
  { title: '보호대', type: 'bohodae2' },
  { title: '쉐이크', type: 'shaek3' },
  { title: '닭가슴살', type: 'darkasemsal3' },
  { title: '비타민', type: 'vitamin3' },
  { title: '보호대', type: 'bohodae3' },
  { title: '쉐이크', type: 'shaek4' },
  { title: '닭가슴살', type: 'darkasemsal4' },
  { title: '비타민', type: 'vitamin4' },
  { title: '보호대', type: 'bohodae5' },
  { title: '보호대', type: 'bohodae4' },
  { title: '쉐이크', type: 'shaek5' },
  { title: '닭가슴살', type: 'darkasemsal6' },
  { title: '비타민', type: 'vitami6n' },
  { title: '보호대', type: 'bohodawere' },
  { title: '쉐이크', type: 'shaek6' },
  { title: '닭가슴살', type: 'darkasasdfemsal' },
  { title: '비타민', type: 'vitam34in' },
  { title: '보호대', type: 'bohod131ae' },
  { title: '보호대', type: 'bohod132ae' },
  { title: '쉐이크', type: 'shaek7' },
  { title: '닭가슴살', type: 'dark32asemsal' },
  { title: '비타민', type: 'vita32min' },
  { title: '보호대', type: 'bohod53ae' },
  { title: '쉐이크', type: 'shae2k8' },
  { title: '닭가슴살', type: 'dar2kasemsal' },
  { title: '비타민', type: 'vita32min' },
  { title: '보호대', type: 'boho5dae' },
]
interface SelectItemTypeProps {
  type: string
  setType: React.Dispatch<React.SetStateAction<string>>
}

const SelectItemType = ({ type, setType }: SelectItemTypeProps) => {
  useEffect(() => {
    setType(itemTypeArr[0].type)
  }, [])

  return (
    <div className="flex overflow-x-scroll w-full no-scrollbar ">
      <div className="min-w-[16px] h-full border-b-2 border-gray50"></div>

      {itemTypeArr.map(v => (
        <>
          <button
            className={`border-b-2 border-${type === v.type ? 'blue500' : 'gray50'}`}
            onClick={() => setType(v.type)}
          >
            <p className="text-largeMedium w-max px-1 py-4 text-gray400">{v.title}</p>
          </button>
          <div className="min-w-[16px] h-full border-b-2 border-gray50"></div>
        </>
      ))}
    </div>
  )
}
export default SelectItemType
