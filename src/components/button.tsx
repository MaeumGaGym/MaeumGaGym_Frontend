'use client'
import Icon from "@/assets/Icon";
import { iconName } from "@/assets/constants";
import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  className?: string
  kind: keyof typeof ButtonColor;
  iconName?: iconName;
  disabled?: boolean;
  children: ReactNode;
  width?: number;
  height?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

const ButtonColor = {
  primary: {
    enabled: "bg-blue500 text-white hover:bg-blue600 active:bg-blue700",
    disabled: "bg-gray400 text-gray200"
  },
  primary2: {
    enabled: "bg-blue50 text-blue500 hover:bg-blue100 hover:text-blue600 active:bg-blue200",
    disabled: "bg-gray100 text-gray300"
  },
  silver: {
    enabled: "bg-gray50 text-gray800 hover:bg-gray100 active:bg-gray-200",
    disabled: "bg-gray100 text-gray300"
  },
  white: {
    enabled: "bg-transparent text-gray600 hover:bg-gray50 hover:text-blue600 active:bg-gray100",
    disabled: "bg-transparent text-gray200"
  },
  danger: {
    enabled: "bg-red500 text-white hover:bg-red600 active:bg-red700",
    disabled: "bg-gray400 text-gray200"
  },
  danger2: {
    enabled: "bg-red50 text-red500 hover:bg-red100 hover:text-red600 active:bg-red200",
    disabled: "bg-gray100 text-gray300"
  },
}

const Button = ({
  className,
  kind,
  iconName,
  disabled,
  children,
  onClick = () => { }
}: ButtonProps) => {
  const color = ButtonColor[kind][disabled ? "disabled" : "enabled"];

  return (
    <button className={`w-fit h-fit px-3 py-2 gap-2 flex items-center justify-center rounded-lg ${color} ${className ?? ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconName && <Icon icon={iconName} color="currentColor" />}
      <span className="text-LabelLarge">{children}</span>
    </button>
  )
}

export default Button;