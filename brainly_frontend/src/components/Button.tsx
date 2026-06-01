import type { ReactElement } from "react";

type varients = "primary" | "secondary";

export interface ButtonProps {
  varient: varients;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  fullwidth?: boolean;
}

const varientStyles = {
  primary:
    "bg-[#474646] text-white hover:bg-black shadow-md shadow-gray-500 transition-all duration-300",

  secondary:
    "bg-white text-[#474646] border border-zinc-300 hover:bg-zinc-100 transition-all duration-300",
};

const sizeStyles = {
  sm: "px-3 py-1.5 rounded-lg text-sm",
  md: "px-5 py-2.5 rounded-xl",
  lg: "px-8 py-3 rounded-xl text-lg",
};

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`
        ${varientStyles[props.varient]}
        ${sizeStyles[props.size]}
        ${props.fullwidth ? "w-full flex justify-center items-center" : ""}
      `}
    >
      <div className="flex items-center justify-center">
        {props.startIcon && (
          <div className="mr-2 flex items-center">
            {props.startIcon}
          </div>
        )}

        {props.text}

        {props.endIcon && (
          <div className="ml-2 flex items-center">
            {props.endIcon}
          </div>
        )}
      </div>
    </button>
  );
}