import * as React from "react";

// VARIANT FOUR
interface InfoSectionFourProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  supdescription: string;
  img_list: string[];
}
const InfoSectionFour = React.forwardRef<HTMLDivElement, InfoSectionFourProps>(
  (
    { title, description, supdescription, img_list, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`py-32 overflow-hidden sm:py-40 ${
          className ? className : ""
        }`}
      >
        <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
            <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
                {title}
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-600'>
                {description}
              </p>
              <p className='mt-6 text-lg text-gray-600 leading-8'>
                {supdescription}
              </p>
            </div>
            <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
              <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
                <img
                  src={img_list[0]}
                  alt='festival'
                  className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
                <div className='flex order-first w-64 flex-none justify-end self-end lg:w-auto'>
                  <img
                    src={img_list[1]}
                    alt='fest'
                    className='aspect-[4/3] w-96 max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                  <img
                    src={img_list[3]}
                    alt='fest'
                    className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
                <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                  <img
                    src={img_list[2]}
                    alt='fest'
                    className='aspect-[4/3] w-96 max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
InfoSectionFour.displayName = "InfoSectionFour";

export { InfoSectionFour };
