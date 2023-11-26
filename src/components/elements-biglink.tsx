import * as React from "react";
//BIGLINK
interface BigLinkProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  text: string;
  button_text?: string;
}
const BigLink = React.forwardRef<HTMLDivElement, BigLinkProps>(
  ({ text, button_text, className, color, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`
        relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20
        ${className ? className : ""}
      `}
      >
        {text}{" "}
        <div
          className={`inline-block cursor-pointer font-semibold
          ${color ? color : "text-accent-600"}`}
        >
          <span className='absolute inset-0' aria-hidden='true' />
          {button_text ? "" : "Перейти"}
          <span aria-hidden='true'>&rarr;</span>
        </div>
      </div>
    );
  }
);
BigLink.displayName = "BigLink";

export { BigLink };
