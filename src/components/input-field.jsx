export default function InputField({
  type = 'text',
  value,
  onChange,
  label,
  id,
  required = true,
  children,
  ...otherProps
}) {
  return (
    <label className='flex flex-col gap-1 relative'>
      {label}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className='border border-black/40 rounded-md py-1 w-full px-2 focus-visible:border-primaryColor outline-none focus-visible:outline-primaryColor/20'
        required={required}
        {...otherProps}
      />
      {children}
    </label>
  );
}
