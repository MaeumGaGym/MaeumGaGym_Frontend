interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Flag = ({
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
      <path d="M5 21V13.0667M5 13.0667V4H10.8333C11.4167 4 12.5833 4.22667 12.5833 5.13333C12.5833 6.04 13.75 6.26667 14.3333 6.26667H19V15.3333H14.3333C13.75 15.3333 12.5833 15.1067 12.5833 14.2C12.5833 13.2933 11.4167 13.0667 10.8333 13.0667H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}