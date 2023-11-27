import * as React from "react";
//$ npx @roodiroot/zap-ui add elements-input
import { InputCastom } from "./elements-input";
//$ npx @roodiroot/zap-ui add elements-button
import { Button } from "./elements-button";

const FeedbackForm = ({ ...props }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      {...props}
      className='max-w-md mt-10 mx-auto flex gap-4'
    >
      <label htmlFor='phone_namber' className='sr-only'>
        Номер телефона
      </label>
      <InputCastom placeholder='Введите ваш номер телефона' required />
      <Button
        onClick={() => console.log(123)}
        className='bg-white text-slate-950 hover:bg-white/80'
      >
        Отправить
      </Button>
    </form>
  );
};
interface NewsletterSectionCenterProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  header: string;
  description: string;
  pattern?: React.ReactNode;
}
const NewsletterSectionCenter = React.forwardRef<
  HTMLDivElement,
  NewsletterSectionCenterProps
>(({ header, description, pattern, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`max-w-7xl mx-auto sm:px-6 lg:px-8 pt-24 sm:pt-32 isolation-auto ${
        className ? className : ""
      }`}
    >
      <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:rounded-3xl shadow-2xl sm:px-24 lg:px-32'>
        {pattern}
        <h2 className='text-white mx-auto max-w-2xl text-center text-3xl sm:text-4xl font-bold tracking-tight'>
          {header}
        </h2>
        <p className='mt-2 mx-auto text-center max-w-xl text-lg leading-8 text-gray-300'>
          {description}
        </p>
        <FeedbackForm />
      </div>
    </div>
  );
});
NewsletterSectionCenter.displayName = "NewsletterSectionCenter";
export { NewsletterSectionCenter };
