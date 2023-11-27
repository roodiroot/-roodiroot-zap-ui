import * as React from "react";
//$ npx @roodiroot/zap-ui add elements-button
import { Button } from "./elements-button";

interface СTASectionImgProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  img: string;
  head: string | string[];
  description: string;
  button_one_text?: string;
  button_one_action?: () => void;
  button_link_text?: string;
  button_link_action?: () => void;
  pattern?: React.ReactNode;
}
const СTASectionImg = React.forwardRef<HTMLDivElement, СTASectionImgProps>(
  (
    {
      head,
      description,
      img,
      className,
      button_one_text,
      button_link_text,
      button_one_action,
      button_link_action,
      pattern,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`bg-white ${className ? className : ""}`}
      >
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            {pattern}
            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                {typeof head === "string" ? (
                  head
                ) : (
                  <>
                    {head[0]}
                    <br />
                    {head[1]}
                  </>
                )}
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                {description}
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                {button_one_text && (
                  <Button
                    onClick={button_one_action}
                    className='bg-white text-gray-900 hover:bg-white/80'
                  >
                    {button_one_text}
                  </Button>
                )}
                {button_link_text && (
                  <Button
                    onClick={button_link_action}
                    variant='link'
                    className='text-white hover:text-white/80'
                    arrow
                  >
                    {button_link_text}
                  </Button>
                )}
              </div>
            </div>
            <div className='relative mt-16 h-80 lg:mt-8'>
              <img
                className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                src={img}
                alt='cta screenshot'
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

СTASectionImg.displayName = "СTASectionImg";

export { СTASectionImg };
