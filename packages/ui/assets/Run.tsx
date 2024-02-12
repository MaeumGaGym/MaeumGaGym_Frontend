interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Run = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <path
        d="M26 9C26 10.6569 24.6569 12 23 12C21.3431 12 20 10.6569 20 9C20 7.34315 21.3431 6 23 6C24.6569 6 26 7.34315 26 9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8 13.6C14.0833 13.2223 14.5279 13 15 13H24C24.5682 13 25.0876 13.321 25.3416 13.8292L26.9271 17H30.5C31.3284 17 32 17.6716 32 18.5C32 19.3284 31.3284 20 30.5 20H26C25.4318 20 24.9124 19.679 24.6584 19.1708L23.0729 16H22.9668L20.4485 21.5539C20.5868 21.6226 20.7314 21.6937 20.8834 21.7685L20.8851 21.7694C21.1265 21.8882 21.3867 22.0163 21.6708 22.1584C22.463 22.5545 23.2619 22.9794 23.8263 23.4415C24.1099 23.6736 24.449 24.0051 24.6653 24.4546C24.9124 24.9681 24.9679 25.5787 24.7208 26.1772C24.5044 26.7011 24.1149 27.0705 23.77 27.3267C23.4112 27.5931 22.9752 27.8287 22.4936 28.0465C21.5298 28.4826 20.1806 28.937 18.4121 29.4423C17.6155 29.6699 16.7853 29.2086 16.5577 28.4121C16.3301 27.6155 16.7914 26.7853 17.5879 26.5577C19.3073 26.0665 20.4819 25.6621 21.2412 25.3204C20.9942 25.1814 20.6924 25.0232 20.3292 24.8416C20.0887 24.7214 19.8487 24.6032 19.6144 24.4878C19.1562 24.2621 18.7198 24.0472 18.3459 23.8496C18.1435 23.7426 17.9395 23.6307 17.74 23.5122L17.7223 23.5016C17.3717 23.2924 17.0355 23.0625 16.7466 22.8024C16.2613 22.3657 15.8244 21.767 15.7163 20.9561C15.6137 20.1863 15.8413 19.4633 16.1584 18.8292L17.5729 16H15.75L13.2 19.4C12.7029 20.0627 11.7627 20.1971 11.1 19.7C10.4373 19.2029 10.3029 18.2627 10.8 17.6L13.8 13.6Z"
        fill="currentColor"
      />
      <path
        d="M15.0506 21.5239C15.2461 22.5169 15.9892 23.364 17.0334 23.9346L10.7358 33.0854C10.2662 33.7679 9.3322 33.9404 8.64976 33.4707C7.96733 33.0011 7.79483 32.0671 8.26448 31.3847L15.0506 21.5239Z"
        fill="currentColor"
      />
    </svg>
  )
}
