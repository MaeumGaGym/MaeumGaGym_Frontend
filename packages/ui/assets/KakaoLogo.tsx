interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const KakaoLogo = ({ size = 28, onClick, className = '' }: PropsType) => {
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
        d="M14.2897 4.6665C20.2504 4.6665 25.0815 8.43197 25.0815 13.0782C25.0815 17.7233 20.2504 21.4888 14.2908 21.4888C13.6974 21.4891 13.1045 21.4513 12.5159 21.3757L7.98588 24.3386C7.471 24.6109 7.2891 24.5811 7.50081 23.9141L8.41751 20.1343C5.45775 18.6339 3.5 16.0338 3.5 13.0782C3.5 8.433 8.33015 4.6665 14.2908 4.6665H14.2897Z"
        fill="currentColor"
      />
    </svg>
  )
}
