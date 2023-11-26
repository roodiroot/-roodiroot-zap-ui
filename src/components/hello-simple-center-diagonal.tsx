import * as React from "react";
import { cn } from "../lib/utils";
import { BigLink } from "./elements-biglink";
import { Button } from "./elements-button";

interface SimpleCenterVariantDiagonalProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  h1: string;
  description: string;
  img: string;
  button_one_text?: string;
  button_one_action?: () => void;
  button_link_text?: string;
  button_link_action?: () => void;
  biglink?: string;
  biglink_action?: () => void;
}
const SimpleCenterVariantDiagonal = React.forwardRef<
  HTMLDivElement,
  SimpleCenterVariantDiagonalProps
>(
  (
    {
      h1,
      description,
      img,
      biglink,
      className,
      button_one_text,
      button_link_text,
      button_one_action,
      button_link_action,
      biglink_action,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props} className={cn("relative", className)}>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pt-14 w-full lg:max-w-2xl'>
            <svg
              className='absolute hidden lg:block  top-0 bottom-0 right-8 h-full w-80 fill-white translate-x-[50%]'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='0,0 90,0 50,100 0,100'></polygon>
            </svg>
            <div className='relative px-6 py-32 sm:py-40 lg:pl-8 lg:py-56'>
              <div className='mx-auto max-w-2xl lg:max-w-xl lg:mx-0'>
                <div className='hidden sm:mb-8 sm:flex sm:justify-start'>
                  {biglink && (
                    <BigLink onClick={biglink_action} text={biglink} />
                  )}
                </div>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  {h1}
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  {description}
                </p>
                <div className='mt-10 flex items-center justify-start gap-x-6'>
                  {button_one_text && (
                    <Button onClick={button_one_action}>
                      {button_one_text}
                    </Button>
                  )}
                  {button_link_text && (
                    <Button onClick={button_link_action} variant='link' arrow>
                      {button_link_text}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[50%]'>
          <img
            src={img}
            alt=''
            className='w-full h-full object-cover block aspect-[4/3] lg:aspect-auto'
          />
        </div>
      </div>
    );
  }
);
SimpleCenterVariantDiagonal.displayName = "SimpleCenterVariantDiagonal";

export { SimpleCenterVariantDiagonal };
