import * as React from "react";

// VARIANT TWO
interface ListElementTwoProps {
  name: string;
  description: string;
  Icon: React.ElementType;
}
const ListElementTwo: React.FC<ListElementTwoProps> = ({
  name,
  description,
  Icon,
}) => {
  return (
    <div className='relative pl-16'>
      <dt className='text-base font-semibold leading-7 text-gray-900'>
        <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-600'>
          <Icon className='h-6 w-6 text-white' aria-hidden='true' />
        </div>
        {name}
      </dt>
      <dd className='mt-2 text-base leading-7 text-gray-600'>{description}</dd>
    </div>
  );
};
interface InfoSectionTwoProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
  description: string;
  adv_list: ListElementTwoProps[];
  button_link_text?: string;
  button_link_action?: () => void;
  pattern?: React.ReactNode;
}
const InfoSectionTwo = React.forwardRef<HTMLDivElement, InfoSectionTwoProps>(
  (
    {
      title,
      description,
      subtitle,
      adv_list,
      className,
      button_link_text,
      button_link_action,
      pattern,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`relative py-24 sm:py-32 overflow-hidden ${
          className ? className : ""
        }`}
      >
        {pattern}
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-accent-600'>
              {subtitle}
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {title}
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              {description}
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {adv_list.map((l) => (
                <ListElementTwo
                  key={l.name}
                  name={l.name}
                  Icon={l.Icon}
                  description={l.description}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
);
InfoSectionTwo.displayName = "InfoSectionTwo";

export { InfoSectionTwo };
