import { cn } from '../utils/util-functions';

export default function InputField({
  label = '',
  type = 'text',
  value,
  id,
  onChange,
  wrapperStyles,
  className = '',
  labelStyles = '',
  children,
  ...otherInputProps
}) {
  return (
    <div className={cn('w-full flex flex-col gap-1', wrapperStyles)}>
      <label htmlFor={id} className={cn('capitalize font-medium', labelStyles)}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full border h-11 px-2 rounded outline-none focus-visible:outline-primaryColor/30',
          className
        )}
        {...otherInputProps}
      />
      {children}
    </div>
  );
}
