import * as React from "react";

interface BigPhotoBlockProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  img: string;
}
const BigPhotoBlock = React.forwardRef<HTMLDivElement, BigPhotoBlockProps>(
  ({ img, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={`my-32 sm:my-40 xl:mx-auto xl:max-w-7xl xl:px-8 ${
          className ? className : ""
        }`}
      >
        <img
          src={img}
          alt='block-photo'
          className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
        />
      </div>
    );
  }
);

BigPhotoBlock.displayName = "BigPhotoBlock";

export { BigPhotoBlock };
