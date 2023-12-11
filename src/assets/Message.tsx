interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Message = ({
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
      <path d="M2 12C2 17.5228 6.47715 22 12 22C13.6735 22 15.251 21.5889 16.637 20.8622C16.8721 20.739 17.144 20.7007 17.4004 20.7693L21.6656 21.9105C21.8143 21.9503 21.9503 21.8143 21.9105 21.6656L20.7693 17.4004C20.7007 17.144 20.739 16.8721 20.8622 16.637C21.5889 15.251 22 13.6735 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" fill="currentColor" />
    </svg>
  )
}