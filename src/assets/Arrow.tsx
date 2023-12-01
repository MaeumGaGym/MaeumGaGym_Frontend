interface PropsType {
  direction?: "left" | "top" | "right" | "bottom";
  size?: number;
  onClick?: () => void;
  className?: string;
}

const rotate = {
  left: "rotate-[0deg]",
  top: "rotate-[90deg]",
  right: "rotate-[180deg]",
  bottom: "rotate-[270deg]",
};

export const Arrow = ({
  direction = "left",
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
      className={`cursor-pointer ${rotate[direction]} ${className}`}
    >
      <path d="M20 11.0001V13.0001H8.00003L13.5 18.5001L12.08 19.9201L4.16003 12.0001L12.08 4.08008L13.5 5.50008L8.00003 11.0001H20Z" fill="currentColor" />
    </svg>
  )
}