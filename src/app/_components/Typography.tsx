import { FC, ReactNode } from "react";
import "tailwindcss/tailwind.css";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "button";

interface TypographyProps {
  variant: Variant;
  children: ReactNode;
  bold?: boolean;
  restClass?: string;
}

const Typography: FC<TypographyProps> = ({ variant, children, bold, restClass }) => {
  const variantStyles: Record<Variant, string> = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-custom-base",
    body1: "text-base",
    body2: "text-sm",
    button: "text-base ",
  };

  const className = `text-gray-900 ${variantStyles[variant]} ${bold ? "font-bold" : "font-normal"} ${restClass}`;

  return <div className={className}>{children}</div>;
};

export default Typography;
