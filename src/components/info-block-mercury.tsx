import * as React from "react";
//$ npx @roodiroot/zap-ui add elements-button
import { Button } from "./elements-button";

// VARIANT ONE
interface ListElementProps {
  title: string;
  description: string;
  first: string;
  second: string;
}
const ListElement: React.FC<ListElementProps> = ({
  title,
  description,
  first,
  second,
}) => {
  return (
    <li className='py-8 border-b border-gray-100'>
      <div className='relative flex flex-wrap gap-x-3'>
        <div className='sr-only'>Название</div>
        <div className='w-full font-semibold text-lg text-gray-900 -space-x-1'>
          {title}
        </div>
        <div className='sr-only'>Описание</div>
        <div className='mt-2 w-full leading-8 text-gray-600'>{description}</div>
        <div className='mt-4 leading-7 font-semibold text-gray-900'>
          {first}
        </div>
        <div className='mt-4 flex items-center gap-3 leading-7 text-gray-600'>
          <svg
            viewBox='0 0 2 2'
            className='flex-none w-0.5 h-0.5 fill-gray-600'
            aria-hidden='true'
          >
            <circle cx='1' cy='1' r='1'></circle>
          </svg>
          {second}
        </div>
      </div>
    </li>
  );
};
interface InfoSectionOneProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  img: string;
  adv_list: ListElementProps[];
  button_link_text?: string;
  button_link_action?: () => void;
}
const InfoSectionOne = React.forwardRef<HTMLDivElement, InfoSectionOneProps>(
  (
    {
      title,
      description,
      img,
      adv_list,
      className,
      button_link_text,
      button_link_action,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`bg-white py-24 sm:py-32 ${className ? className : ""}`}
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto flex flex-col items-end max-w-2xl justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row'>
            <div className='w-full lg:max-w-lg lg:flex-auto'>
              <h2 className='text-3xl sm:text-4xl font-bold -space-x-1'>
                {title}
              </h2>
              <p className='mt-10 text-lg leading-8 text-gray-600'>
                {description}
              </p>
              <img
                src={img}
                alt='adv'
                width={1000}
                height={1000}
                className='mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]'
              />
            </div>
            <div className='w-full lg:max-w-lg lg:flex-auto'>
              <h3 className='sr-only'>Преимущества</h3>
              <ul className='-my-8'>
                {adv_list.map((f: ListElementProps) => (
                  <ListElement
                    key={f.title}
                    title={f.title}
                    description={f.description}
                    first={f.first}
                    second={f.second}
                  />
                ))}
              </ul>
              <div className='mt-8 flex pt-8'>
                {button_link_text && (
                  <Button
                    className='text-accent-600'
                    onClick={button_link_action}
                    variant='link'
                    arrow
                  >
                    {button_link_text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
InfoSectionOne.displayName = "InfoSectionOne";

export { InfoSectionOne };
