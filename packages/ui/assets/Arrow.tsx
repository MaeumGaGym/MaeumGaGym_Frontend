interface PropsType {
  direction?: 'left' | 'top' | 'right' | 'bottom'
  size?: number
  onClick?: () => void
  className?: string
}

const rotate = {
  left: 'rotate-[0deg]',
  top: 'rotate-[90deg]',
  right: 'rotate-[180deg]',
  bottom: 'rotate-[270deg]',
}

export const Arrow = ({ direction = 'left', size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${rotate[direction]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M19 12H5M5 12L12 5M5 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
