interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Routine = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="none" viewBox="0 0 25 28">
      <rect width="21" height="24" fill="#fff" rx="2" />
      <rect width="7" height="2" x="12" y="6" fill="#C6C8CC" rx="1" />
      <rect width="7" height="2" x="12" y="12" fill="#C6C8CC" rx="1" />
      <path
        stroke="#0A7FF5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 6 2 2 3-3m-5 7 2 2 3-3"
      />
      <rect width="6" height="10" x="7" y="18" fill="#3193F5" rx="2" />
      <path fill="#0A7FF5" d="M13 21h6v4h-6z" />
      <rect width="6" height="10" x="19" y="18" fill="#3193F5" rx="2" />
    </svg>
  )
}
