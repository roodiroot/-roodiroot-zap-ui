import * as React from "react";

// VARIANT TREE
interface ListElementTreeProps {
  name: string;
  description: string;
  Icon: React.ElementType;
}
const ListElementTree: React.FC<ListElementTreeProps> = ({
  name,
  description,
  Icon,
}) => {
  return (
    <div className='relative pl-10 mt-8'>
      <Icon
        className='absolute w-5 h-5 top-1 left-1 text-accent-600'
        aria-hidden='true'
      />
      <span className='font-semibold text-gray-900 '>{name}</span>{" "}
      <span>{description}</span>
    </div>
  );
};
interface InfoSectionTreeProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
  description: string;
  img: string;
  adv_list: ListElementTreeProps[];
  button_link_text?: string;
  button_link_action?: () => void;
  pattern?: React.ReactNode;
}
const InfoSectionTree = React.forwardRef<HTMLDivElement, InfoSectionTreeProps>(
  (
    {
      title,
      description,
      subtitle,
      img,
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
        className={`py-24 sm:py-32 relative ${className ? className : ""}`}
      >
        {pattern}
        <div className='w-full max-w-7xl mx-auto lg:px-8 md:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='px-6 lg:px-0 lg:pt-4 lg:pr-4'>
              <div className='max-w-2xl mx-auto lg:max-w-lg lg:mx-0'>
                <p className='text-base font-semibold leading-7 text-accent-600'>
                  {subtitle}
                </p>
                <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  {title}
                </h2>
                <p className='text-lg leading-8 text-gray-600 mt-6'>
                  {description}
                </p>
                <dl className='mt-10 max-w-xl lg:max-w-none text-gray-600 text-base leading-7'>
                  {adv_list.map((l) => (
                    <ListElementTree
                      key={l.name}
                      name={l.name}
                      description={l.description}
                      Icon={l.Icon}
                    />
                  ))}
                </dl>
              </div>
            </div>
            <div className='sm:px-6 lg:px-0'>
              <div className='relative isolate overflow-hidden bg-accent-600 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:maw-w-none'>
                <div className='absolute top-0 bottom-0 left-0 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-lime-100/20 ring-1'></div>
                <img
                  src={img}
                  alt='adv'
                  width={912}
                  height={540}
                  className='block -mb-12 w-[57rem] max-w-none align-middle rounded-t-xl ring-1 bg-slate-300 h-auto'
                />
                <div className='absolute inset-0 ring-1 '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
InfoSectionTree.displayName = "InfoSectionTree";

export { InfoSectionTree };
