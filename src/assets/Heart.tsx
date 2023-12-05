interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  isFill?: boolean;
}

export const Heart = ({
  size = 24,
  onClick,
  className,
  isFill
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
    {
      isFill ?
      <path d="M12.1346 21.2274C12.0583 21.2969 11.9417 21.2969 11.8654 21.2274L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12.1346 21.2274Z" fill="currentColor" />
      :
      <path d="M11.0549 19.4754L11.0538 19.4744C8.46406 17.126 6.37492 15.2274 4.92445 13.4529C3.48222 11.6884 2.75 10.1384 2.75 8.5C2.75 5.82511 4.83332 3.75 7.5 3.75C9.01327 3.75 10.4781 4.45834 11.4309 5.56846L12 6.23157L12.5691 5.56846C13.5219 4.45834 14.9867 3.75 16.5 3.75C19.1667 3.75 21.25 5.82511 21.25 8.5C21.25 10.1384 20.5178 11.6884 19.0756 13.4529C17.6251 15.2274 15.5359 17.126 12.9462 19.4744L12.9451 19.4754L12 20.3358L11.0549 19.4754Z" stroke="currentColor" stroke-width="1.5"/>
    }
    </svg>
  )
}