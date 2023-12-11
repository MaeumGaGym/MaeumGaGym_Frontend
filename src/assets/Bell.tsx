interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Bell = ({
  size = 24,
  onClick,
  className = ""
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <path d="M5 16.5714C5 16.5714 6.16667 15.4286 6.16667 14.2857C6.16667 13.1429 6.16667 12 6.16667 12C6.16667 9.71429 6.16667 4 12 4C17.8333 4 17.8333 9.71429 17.8333 12C17.8333 12 17.8333 13.1429 17.8333 14.2857C17.8333 15.4286 19 16.5714 19 16.5714H5Z" fill="currentColor" />
      <path d="M9.66667 18.8571C9.66667 18.8571 9.66667 20 12 20C14.3333 20 14.3333 18.8571 14.3333 18.8571H9.66667Z" fill="currentColor" />
      <path d="M5 16.5714C5 16.5714 6.16667 15.4286 6.16667 14.2857C6.16667 13.1429 6.16667 12 6.16667 12C6.16667 9.71429 6.16667 4 12 4C17.8333 4 17.8333 9.71429 17.8333 12C17.8333 12 17.8333 13.1429 17.8333 14.2857C17.8333 15.4286 19 16.5714 19 16.5714H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.66667 18.8571C9.66667 18.8571 9.66667 20 12 20C14.3333 20 14.3333 18.8571 14.3333 18.8571H9.66667Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}