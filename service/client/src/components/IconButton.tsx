import Image, { StaticImageData } from 'next/image'
import { BorderBox } from '.'

export interface IconButtonProps {
  src?: StaticImageData
  icon?: React.ReactNode
  alt?: string
  title: string
  text: string | [string, string]
  onClick?: () => void
}

export const IconButton = ({ src, icon, alt, title, text, onClick }: IconButtonProps) => {
  return (
    <BorderBox className="px-8 py-10 flex flex-col justify-between w-60 h-60 sm:w-20 flex-1 cursor-pointer break-keep">
      {icon || (src && <Image src={src} alt={alt || '이미지'} width={40} height={40} />)}
      <div onClick={onClick} className="flex flex-col h-[72px] justify-between">
        <span className="text-black text-labelLarge sm:text-labelMedium">{title}</span>
        <p className="text-gray600 text-bodySmall sm:text-bodyTiny h-9">
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
