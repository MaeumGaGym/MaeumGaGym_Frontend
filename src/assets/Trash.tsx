interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Trash = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M5 6H6M19 6H18M6 6L8 20H16L18 6M6 6H9M18 6H15M15 6L14 4H10L9 6M15 6H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
