import { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
  className?: string
  kind: keyof typeof ButtonColor
  icon?: ReactNode
  disabled?: boolean
  children?: ReactNode
  fontSize?: keyof typeof FontSize
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const ButtonColor = {
  primary: {
    enabled: 'transition-all bg-blue500 text-white hover:bg-blue600 active:bg-blue700',
    disabled: 'bg-gray400 text-gray200',
  },
  primary2: {
    enabled: 'transition-all bg-blue50 text-blue500 hover:bg-blue100 hover:text-blue600 active:bg-blue200',
    disabled: 'bg-gray100 text-gray300',
  },
  silver: {
    enabled: 'transition-all bg-gray50 text-gray800 hover:bg-gray100 active:bg-gray-200',
    disabled: 'bg-gray100 text-gray300',
  },
  white: {
    enabled:
      'transition-all bg-transparent text-gray600 dark:text-gray200 hover:bg-gray50 dark:hover:bg-gray800 hover:text-blue600 dark:hover:text-blue500 active:bg-gray100',
    disabled: 'bg-transparent text-gray200',
  },
  danger: {
    enabled: 'transition-all bg-red500 text-white hover:bg-red600 active:bg-red700',
    disabled: 'bg-gray400 text-gray200',
  },
  danger2: {
    enabled: 'transition-all bg-red50 text-red500 hover:bg-red100 hover:text-red600 active:bg-red200',
    disabled: 'bg-gray100 text-gray300',
  },
  silverDark: {
    enabled: 'transition-all bg-gray800 text-white hover:bg-gray900 hover:text-white active:bg-gray900',
    disabled: 'bg-gray800 text-gray600',
  },
}

const FontSize = {
  large: 'text-labelLarge',
  small: 'text-labelSmall',
}

export const Button = ({ className, kind, icon, disabled, children, fontSize, onClick = () => {} }: ButtonProps) => {
  const color = ButtonColor[kind][disabled ? 'disabled' : 'enabled']
  const font = FontSize[fontSize ?? 'large']
  return (
    <button
      className={`select-none w-fit h-12 px-3 py-2 gap-2 flex items-center justify-center ${children ? 'rounded-lg' : 'rounded-full'} ${color} ${className ?? ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children && <span className={`${font}`}>{children}</span>}
    </button>
  )
}
