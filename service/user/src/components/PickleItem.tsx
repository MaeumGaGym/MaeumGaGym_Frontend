import Image from 'next/image'

interface PickleItmeProps {
  src: string
  alt?: string
  title: string
  count: number
}

const PickleItem = ({ src, alt = 'pickle image', title, count }: PickleItmeProps) => {
  return (
    <div className="flex flex-col gap-3 flex-1 cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={180}
        sizes="512px"
        className="w-full h-auto rounded-lg aspect-[9/16]"
      />
      <div className="flex flex-col gap-2 px-1">
        <p className="text-black text-bodyMedium sm:text-bodySmall">{title}</p>
        <span className="text-gray400 text-bodySmall sm:text-bodyTiny">
          조회수{' '}
          {new Intl.NumberFormat('ko-KR', {
            notation: 'compact',
            maximumFractionDigits: 1,
          }).format(count)}
          회
        </span>
      </div>
    </div>
  )
}

export default PickleItem
