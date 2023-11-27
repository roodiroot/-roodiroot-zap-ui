import * as React from "react";

// VARIANT FIVE
interface InfoSectionFiveProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  img: string;
  pattern: React.ReactNode;
}
const InfoSectionFive = React.forwardRef<HTMLDivElement, InfoSectionFiveProps>(
  ({ title, description, img, pattern, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 ${
          className ? className : ""
        }`}
      >
        {pattern}
        <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:gap-x-8'>
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto'>
            {title}
          </h1>
          <div className='mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1'>
            <p className='text-lg leading-8 text-gray-600'>{description}</p>
          </div>
          <img
            src={img}
            alt='main'
            className='mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36'
          />
        </div>
      </div>
    );
  }
);
InfoSectionFive.displayName = "InfoSectionFive";

export { InfoSectionFive };
