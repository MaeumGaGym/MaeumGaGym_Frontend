import {iconName, IconSet} from "./constants";
import React from "react";

interface IconProps {
    icon: iconName;
    size?: number;
    color?: string;
    clicked?: () => void;
}

const Icon = ({icon, size, color, clicked}: IconProps) => (
    <svg
        height={size ?? 24}
        viewBox={IconSet[icon].viewBox}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        onClick={clicked}
    >
        <path d={IconSet[icon].path}/>
    </svg>
)

export default Icon
