import * as React from "react";
import { cn } from "../lib/utils";
import { BigLink } from "./elements-biglink";
import { Button } from "./elements-button";

interface SimpleCenterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  h1: string;
  description: string;
  button_one_text?: string;
  button_one_action?: () => void;
  button_link_text?: string;
  button_link_action?: () => void;
  biglink?: string;
  biglink_action?: () => void;
  blur_elements?: boolean;
  blur_elements_color_from?: string;
  blur_elements_color_to?: string;
}
const SimpleCenter = React.forwardRef<HTMLDivElement, SimpleCenterProps>(
  (
    {
      h1,
      description,
      biglink,
      className,
      button_one_text,
      button_link_text,
      button_one_action,
      button_link_action,
      biglink_action,
      blur_elements,
      blur_elements_color_from,
      blur_elements_color_to,
      ...props
    },
    ref
  ) => {
    let from = "from-[#ff80b5]";
    let to = "to-[#9089fc]";
    if (blur_elements_color_from) {
      from = `from-[${blur_elements_color_from}]`;
    }
    if (blur_elements_color_to) {
      to = `to-[${blur_elements_color_to}]`;
    }
    const topElem = (
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className={cn(
            "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
            from,
            to
          )}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    );
    const bottomElem = (
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className={cn(
            "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
            from,
            to
          )}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    );

    return (
      <div
        ref={ref}
        {...props}
        className={cn("relative isolate px-6 pt-14 lg:px-8", className)}
      >
        {blur_elements && topElem}
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            {biglink && <BigLink onClick={biglink_action} text={biglink} />}
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              {h1}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              {description}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              {button_one_text && (
                <Button onClick={button_one_action}>{button_one_text}</Button>
              )}
              {button_link_text && (
                <Button onClick={button_link_action} variant='link' arrow>
                  {button_link_text}
                </Button>
              )}
            </div>
          </div>
        </div>
        {blur_elements && bottomElem}
      </div>
    );
  }
);
SimpleCenter.displayName = "SimpleCenter";

export { SimpleCenter };
