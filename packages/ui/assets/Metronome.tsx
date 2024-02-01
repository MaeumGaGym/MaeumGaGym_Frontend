interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Metronome = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M5.25 16L4 20H20L18.75 16M5.25 16L9 4H15L18.75 16M5.25 16H12M18.75 16H12M12 16L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
