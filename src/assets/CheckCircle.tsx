interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
  isFill?: boolean;
}

export const CheckCircle = ({
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
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.6771 9.73593C18.0835 9.362 18.1099 8.72939 17.7359 8.32294C17.362 7.9165 16.7294 7.89014 16.3229 8.26407L10.4783 13.6412L7.67706 11.0641C7.27061 10.6901 6.638 10.7165 6.26407 11.1229C5.89014 11.5294 5.9165 12.162 6.32294 12.5359L9.8012 15.7359C10.1839 16.088 10.7726 16.088 11.1553 15.7359L17.6771 9.73593Z" fill="currentColor" />
          :
          <>
            <path d="M17.6771 9.73593C18.0835 9.362 18.1099 8.72939 17.7359 8.32294C17.362 7.9165 16.7294 7.89014 16.3229 8.26407L10.4783 13.6412L7.67706 11.0641C7.27061 10.6901 6.638 10.7165 6.26407 11.1229C5.89014 11.5294 5.9165 12.162 6.32294 12.5359L9.8012 15.7359C10.1839 16.088 10.7726 16.088 11.1553 15.7359L17.6771 9.73593Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" />
          </>
      }
    </svg>
  )
}