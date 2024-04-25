interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Enter = ({ size = 24, onClick, className }: PropsType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="16" fill="none" viewBox="0 0 39 16">
      <rect width="39" height="16" fill="#F0F2F5" rx="4" />
      <path
        fill="#939599"
        d="M4.654 12V4.93h4.6v1.064h-3.33v1.934H9.01v1.064H5.924v1.934h3.35V12h-4.62Zm11.381-7.07V12h-1.133l-3.35-4.834h-.058V12h-1.27V4.93h1.153l3.33 4.834h.068V4.93h1.26Zm.746 1.064V4.93h5.635v1.064h-2.178V12h-1.27V5.994h-2.187ZM23.162 12V4.93h4.6v1.064h-3.33v1.934h3.086v1.064h-3.086v1.934h3.35V12h-4.62Zm5.57 0V4.93h2.657c1.62 0 2.485.908 2.49 2.256-.005.961-.444 1.674-1.274 2.011L34.133 12h-1.416L31.33 9.412h-1.328V12h-1.27Zm1.27-3.652h1.191c.957.005 1.387-.406 1.387-1.162 0-.752-.43-1.192-1.387-1.192h-1.191v2.354Z"
      />
    </svg>
  )
}
