import { ButtonHTMLAttributes, FC, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: "outlined" | "filled";
}

const Button: FC<ButtonProps> = ({ children, fill, ...props }) => {
  return (
    <button
      className={`text-gray inline-block w-full px-16 py-3.5 text-center align-middle text-lg font-bold leading-normal transition-all bg-${fill === "filled" ? "blue-500" : "white"} hover:shadow-xs tracking-tight-rem cursor-pointer rounded-lg border-0 ease-in hover:-translate-y-px active:opacity-85  ${fill === "filled" ? "bg-150 bg-x-25 border-2 border-orange-500" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const PrimaryButton = memo(Button);
