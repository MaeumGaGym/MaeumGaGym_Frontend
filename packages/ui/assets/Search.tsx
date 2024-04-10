interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Search = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M20 20L15.7059 15.7059M10.8571 17.7143C7.07005 17.7143 4 14.6442 4 10.8571C4 7.07005 7.07005 4 10.8571 4C14.6442 4 17.7143 7.07005 17.7143 10.8571C17.7143 14.6442 14.6442 17.7143 10.8571 17.7143Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
