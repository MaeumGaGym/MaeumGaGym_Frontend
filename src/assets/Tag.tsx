interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Tag = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M7 8.5C7 8.22386 6.77614 8 6.5 8C6.22386 8 6 8.22386 6 8.5C6 8.77614 6.22386 9 6.5 9C6.77614 9 7 8.77614 7 8.5Z"
        fill="currentColor"
      />
      <path
        d="M14 6L21 13L15 19M3 5V12L11 20L18 13L10 5H3ZM7 8.5C7 8.22386 6.77614 8 6.5 8C6.22386 8 6 8.22386 6 8.5C6 8.77614 6.22386 9 6.5 9C6.77614 9 7 8.77614 7 8.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
