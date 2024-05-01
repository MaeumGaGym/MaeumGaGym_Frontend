interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const UpDownArrow = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        fill="currentColor"
        d="M7.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L6 5.414V21.05c0 .525.448.95 1 .95s1-.425 1-.95V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4ZM16 2.95c0-.525.448-.95 1-.95s1 .425 1 .95v15.636l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 18.586V2.95Z"
      />
    </svg>
  )
}
