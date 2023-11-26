import * as React from "react";
import { cn } from "../lib/utils";

//BUTTON
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "link";
  arrow?: boolean;
  props?: Element;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, arrow, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`
        "text-sm font-semibold"
          ${
            !variant &&
            "rounded-md bg-accent-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          }
          ${variant === "link" && "leading-6 text-gray-900"}
          ${className ? className : ""}
        `}
      >
        {children}
        {arrow && <span aria-hidden='true'>&rarr;</span>}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
