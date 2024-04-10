interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Vibration = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <rect
        x="7"
        y="3.75"
        width="10"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="3"
        y="7.75"
        width="2"
        height="8"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="19"
        y="7.75"
        width="2"
        height="8"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="22"
        y="9.75"
        width="2"
        height="4"
        rx="1"
        fill="currentColor"
      />
      <rect
        y="9.75"
        width="2"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  )
}
