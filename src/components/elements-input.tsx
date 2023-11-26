import * as React from "react";
import { cn } from "../lib/utils";

//INPUT
interface InputCastomProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputCastom = React.forwardRef<HTMLInputElement, InputCastomProps>(
  ({ className, required, ...props }, ref) => {
    return (
      <div
        className={cn(
          "min-w-0 flex-auto rounded-md border-0 bg-white/5 text-white ring-1 ring-inset sm:text-sm sm:leading-6 placeholder:font-light placeholder:text-white/50",
          className
        )}
      >
        <input
          {...props}
          type='text'
          className='w-full rounded-md h-full bg-inherit px-3.5 py-2 focus:outline focus:outline-white/50'
        />
      </div>
    );
  }
);
InputCastom.displayName = "InputCastom";
export { InputCastom };
