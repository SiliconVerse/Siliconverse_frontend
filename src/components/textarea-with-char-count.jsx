import { useState } from 'react';
import { cn } from '../utils/util-functions';

export default function TextareaWithCharCount({
  maxCharLimit = 200,
  onChange,
  value,
  wrapperStyles,
  className = '',
  labelStyles = '',
  label = '',
  rows = 2,
  ...otherProps
}) {
  const [charCount, setCharCount] = useState(value?.length || 0);

  const handleChange = (event) => {
    onChange(event);
    setCharCount(event.target.value.length);
  };
  return (
    <label className={cn('w-full flex flex-col gap-1', wrapperStyles)}>
      <span className={cn('capitalize font-medium', labelStyles)}>{label}</span>
      <textarea
        name='bio'
        value={value}
        onChange={handleChange}
        maxLength={maxCharLimit}
        className={cn(
          'w-full border px-2 rounded outline-none focus-visible:outline-primaryColor/30',
          className
        )}
        rows={rows}
        {...otherProps}
      ></textarea>
      <span className='text-[#666] text-sm text-right block'>
        {`${charCount}/${maxCharLimit}`}
      </span>
    </label>
  );
}
