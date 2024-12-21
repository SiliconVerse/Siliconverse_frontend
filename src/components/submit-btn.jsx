import { cn } from '../utils/util-functions';
import Spinner from './spinner';

const SubmitButton = ({ text, isLoading, className }) => {
  return (
    <button
      className={cn(
        'flex gap-4 text-center justify-center items-center transition-all duration-200 ease-linear',
        className
      )}
      type='submit'
      disabled={isLoading}
    >
      {!isLoading && text}
      {isLoading && <Spinner />}
    </button>
  );
};

export default SubmitButton;

export const ClickButtonType = ({ text, isLoading, className, onclickFn }) => {
  return (
    <button
      onClick={onclickFn}
      className={
        'flex gap-4 text-center justify-center items-center ' + className
      }
      type='submit'
      disabled={isLoading}
    >
      {!isLoading && text}
      {isLoading && <Spinner />}
    </button>
  );
};
