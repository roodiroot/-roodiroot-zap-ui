import * as React from "react";

interface TestemonialKuiperBeltProps {
  name: string;
  text: string;
  img: string;
  date: string;
  className?: string;
}
const TestemonialKuiperBelt: React.FC<TestemonialKuiperBeltProps> = ({
  name,
  text,
  img,
  date,
  className,
}) => {
  return (
    <div
      className={`pt-8 sm:inline-block sm:w-full sm:px-4 ${
        className ? className : ""
      }`}
    >
      <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6'>
        <blockquote className='text-gray-600'>
          <p>{text}</p>
        </blockquote>
        <figcaption className='mt-6 flex items-center gap-x-4'>
          <img
            src={img}
            width={40}
            height={40}
            alt='лицо счастливого человека'
            className='align-middle block w-10 h-10 rounded-full bg-gray-50 object-cover'
          />
          <div>
            <div className='font-semibold text-gray-900'>{name}</div>
            <div className='text-gray-600'>{date}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
interface TestemonialsKuiperBeltBlockProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  testimonials_list: TestemonialKuiperBeltProps[];
}
const TestemonialsKuiperBeltBlock = React.forwardRef<
  HTMLDivElement,
  TestemonialsKuiperBeltBlockProps
>(({ title, description, testimonials_list, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`bg-white py-24 sm:py-32 ${className ? className : ""}`}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-accent-600'>
            {title}
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {description}
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0px]'>
            {testimonials_list.map((l) => (
              <TestemonialKuiperBelt
                key={l.name}
                name={l.name}
                text={l.text}
                img={l.img}
                date={l.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

TestemonialsKuiperBeltBlock.displayName = "TestemonialsKuiperBeltBlock";
export { TestemonialsKuiperBeltBlock };
