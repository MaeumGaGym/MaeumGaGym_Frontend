interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Share = ({
  size = 24,
  onClick,
  className
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <path fill="currentColor" stroke="currentColor" stroke-linejoin="round" d="m20.254 3.746-5.37 17.903-3.304-6.606 3.846-5.494c.45-.642-.333-1.424-.975-.975L8.957 12.42 2.351 9.117l17.903-5.371Zm-8.776 11.443Zm8.936-11.977Z"/>
    </svg>
  )
}