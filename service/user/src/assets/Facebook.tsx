interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Facebook = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M13.8587 24V13.0533H17.5316L18.0826 8.78588H13.8587V6.06176C13.8587 4.82664 14.2003 3.98492 15.9734 3.98492L18.2313 3.98399V0.167076C17.8408 0.116334 16.5005 0 14.9405 0C11.683 0 9.45282 1.98836 9.45282 5.63912V8.78588H5.7688V13.0533H9.45282V24H13.8587Z"
        fill="currentColor"
      />
    </svg>
  )
}
