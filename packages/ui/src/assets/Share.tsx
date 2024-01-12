interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Share = ({ size = 24, onClick, className = '' }: PropsType) => {
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
        d="M1.48305 8.85509L20.6442 3.10673C20.7968 3.06096 20.939 3.2032 20.8933 3.35576L15.1449 22.517C15.0929 22.6904 14.8555 22.7109 14.7745 22.5489L11.0533 15.1065C11.0204 15.0409 11.0262 14.9625 11.0683 14.9024L15.0167 9.2618C15.145 9.07851 14.9215 8.85496 14.7382 8.98326L9.09759 12.9317C9.03746 12.9738 8.9591 12.9796 8.89345 12.9467L1.45107 9.22554C1.28908 9.14454 1.30957 8.90713 1.48305 8.85509Z"
        fill="currentColor"
      />
    </svg>
  )
}
