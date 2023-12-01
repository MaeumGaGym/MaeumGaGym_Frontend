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

export const Chevron = ({
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
<path d="M14 6L8 12L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}