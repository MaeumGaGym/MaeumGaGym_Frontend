interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Filter = ({ size = 24, onClick, className }: PropsType) => {
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
        fillRule="evenodd"
        d="M7 2a1 1 0 0 0-1 1v7.126a4.002 4.002 0 0 0 0 7.748V21a1 1 0 1 0 2 0v-3.126a4.002 4.002 0 0 0 0-7.748V3a1 1 0 0 0-1-1Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 2a1 1 0 0 0-1 1v3.126a4.002 4.002 0 0 0 0 7.748V21a1 1 0 1 0 2 0v-7.126a4.002 4.002 0 0 0 0-7.748V3a1 1 0 0 0-1-1Zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
