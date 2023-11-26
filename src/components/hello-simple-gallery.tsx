import * as React from "react";
//$ npx @roodiroot/zap-ui add elements-button
import { Button } from "./elements-button";

interface SimpleGalleryProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  h1: string;
  description: string;
  img_list: string[];
  button_one_text?: string;
  button_one_action?: () => void;
  button_link_text?: string;
  button_link_action?: () => void;
  biglink?: string;
  biglink_action?: () => void;
  pattern?: React.ReactNode;
}
const SimpleGallery = React.forwardRef<HTMLDivElement, SimpleGalleryProps>(
  (
    {
      h1,
      description,
      img_list,
      className,
      biglink,
      button_one_text,
      button_link_text,
      button_one_action,
      button_link_action,
      biglink_action,
      pattern,
      ...props
    },
    ref
  ) => {
    // [mask-image:radial-gradient(white_50%,transparent_80%)]
    return (
      <div
        ref={ref}
        {...props}
        className={`relative isolate, ${className ? className : ""}`}
      >
        {pattern}
        <div className='overflow-hidden'>
          <div className='pb-32 max-w-7xl mx-auto px-6 pt-36 sm:pt-[15rem] lg:pt-32 lg:px-8'>
            <div className='max-w-2xl mx-auto lg:flex gap-x-14 lg:max-w-none lg:items-center lg:mx-0'>
              <div className='shrink-0 mx-auto max-w-xl lg:mx-0'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  {h1}
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600 sm:max-w-[28rem]'>
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
              <div className='w-full mt-14 flex gap-8 sm:justify-start sm:pl-20 lg:pl-0 lg:mt-0'>
                <div className='min-w-[11rem] w-44 pt-32 sm:pt-80 lg:pt-36 xl:pt-80 lg:order-last xl:order-none '>
                  <div className='relative aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg overflow-hidden'>
                    <img
                      src={img_list[6]}
                      alt='cutest kitten"'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 rounded-xl ring-1 ring-gray-300'></div>
                  </div>
                </div>
                <div className='min-w-[11rem] w-44 sm:pt-52 xl:pt-36 flex flex-col gap-8'>
                  <div className='relative aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg  overflow-hidden'>
                    <img
                      src={img_list[1]}
                      alt='cutest kitten"'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 rounded-xl ring-1 ring-gray-300'></div>
                  </div>
                  <div className='relative aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg overflow-hidden'>
                    <img
                      src={img_list[2]}
                      alt='cutest kitten"'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 rounded-xl ring-1 ring-gray-300'></div>
                  </div>
                </div>
                <div className='min-w-[11rem] w-44 pt-32 sm:pt-0 flex flex-col gap-8'>
                  <div className='relative aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg overflow-hidden'>
                    <img
                      src={img_list[3]}
                      alt='cutest kitten"'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 rounded-xl ring-1 ring-gray-300'></div>
                  </div>
                  <div className='relative aspect-[2/3] w-full h-auto rounded-xl object-cover shadow-lg overflow-hidden'>
                    <img
                      src={img_list[4]}
                      alt='cutest kitten"'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 rounded-xl ring-1 ring-gray-300'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
SimpleGallery.displayName = "SimpleGallery";

export { SimpleGallery };
