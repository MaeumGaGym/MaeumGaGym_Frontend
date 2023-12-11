interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Play = ({
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
      <path d="M5 17.8213V6.17961C5 5.21964 5 4.73913 5.18677 4.4551C5.34977 4.2072 5.60102 4.04444 5.87995 4.00553C6.19943 3.96096 6.59126 4.187 7.3738 4.63842L17.4642 10.4593L17.4678 10.461C18.3327 10.9599 18.7653 11.2095 18.9072 11.5421C19.0309 11.8322 19.0309 12.1672 18.9072 12.4573C18.7651 12.7904 18.3314 13.041 17.4642 13.5413L7.3738 19.3621C6.5907 19.8139 6.19954 20.039 5.87995 19.9944C5.60102 19.9555 5.34977 19.7928 5.18677 19.5449C5 19.2609 5 18.7813 5 17.8213Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}