'use client'
import Image, { StaticImageData } from 'next/image'
import BorderBox from './BorderBox'

interface PropsType {
  src: StaticImageData
  alt?: string
  title: string
  text: string | [string, string]
}

const IconButton = ({ src, alt, title, text }: PropsType) => {
  return (
    <BorderBox className="px-8 py-10 flex flex-col justify-between w-60 h-60 flex-1">
      <Image src={src} alt={alt || '이미지'} width={40} height={40} />
      <div className="flex flex-col h-[72px] justify-between">
        <span className="text-black text-labelLarge">{title}</span>
        <p className="text-gray600 text-bodySmall h-9">
          {typeof text === 'string' ? (
            text
          ) : (
            <>
              {' '}
              {text[0]}
              <br />
              {text[1] || ''}
            </>
          )}
        </p>
      </div>
    </BorderBox>
  )
}

export default IconButton
