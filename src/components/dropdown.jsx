import Select from 'react-select';
import { cn } from '../utils/util-functions';

export default function Dropdown({
  selectedOption,
  handleChange,
  options,
  label,
  labelStyles = '',
  wrapperStyles = '',
  className,
  height = '46px',
  ...otherProps
}) {
  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'inherit',
      padding: '',
      border: 'none',
      boxShadow: 'none',
      height: height,
    }),
  };

  return (
    <label className={cn('', wrapperStyles)}>
      {label ? <span className={cn('', labelStyles)}>{label}</span> : null}
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={(valueObj) => {
          handleChange(valueObj.value);
        }}
        styles={customStyles}
        className={cn('w-full', className)}
        {...otherProps}
      />
    </label>
  );
}
