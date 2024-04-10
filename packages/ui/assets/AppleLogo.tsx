interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const AppleLogo = ({ size = 28, onClick, className = '' }: PropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M20.9317 25.267C19.598 26.5599 18.1418 26.3558 16.74 25.7434C15.2566 25.1173 13.8956 25.0901 12.3306 25.7434C10.3708 26.5871 9.33649 26.3422 8.16608 25.267C1.5247 18.4215 2.50458 7.99671 10.0442 7.61565C11.8814 7.71091 13.1607 8.62274 14.2359 8.7044C15.8418 8.37777 17.3796 7.43873 19.0944 7.56121C21.1494 7.72452 22.7009 8.54109 23.7216 10.0109C19.4755 12.5559 20.4826 18.1493 24.3749 19.7144C23.5991 21.7558 22.592 23.7836 20.9181 25.2806L20.9317 25.267ZM14.0998 7.53399C13.8956 4.4991 16.3589 1.99497 19.1897 1.75C19.5844 5.26122 16.0051 7.87423 14.0998 7.53399Z"
        fill="currentColor"
      />
    </svg>
  )
}
