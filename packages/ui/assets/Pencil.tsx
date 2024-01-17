interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Pencil = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M17.5 9L6.5 20H4V17.5L15 6.5M17.5 9L15 6.5M17.5 9L20 6.5L17.5 4L15 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
