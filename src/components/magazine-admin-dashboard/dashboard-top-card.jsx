import arrowDown from '../../assets/icons/arrow-down.svg';
import { cn, formatNumber } from '../../utils/util-functions';

export default function DashboardTopCard({
  title,
  hasIncreased = false,
  percentage = null,
  value,
  icon,
}) {
  const formattedValue = formatNumber(value);

  return (
    <div className='flex items-center px-3 py-4 shadow-sl border border-[#F4F4F4] gap-1 rounded-sl h-[77px]'>
      <img src={icon} alt='icon' width={30} />
      <div className='ml-5'>
        <p>{formattedValue}</p>
        <p className='text-gray-600 text-sm'>{title}</p>
      </div>

      {percentage !== null ? (
        <div>
          <div className='flex items-center gap-1  pl-4'>
            <img
              src={arrowDown}
              alt=''
              className={cn('h-7', hasIncreased ? 'rotate-180' : '')}
              // width={28}
            />
            <p
              className={cn(
                '',
                hasIncreased ? 'text-green-600' : 'text-[#ED1F24]'
              )}
            >
              {percentage.toFixed(1)}%
            </p>
          </div>
          <p className='text-gray-600 text-xs mt-2'>per day</p>
        </div>
      ) : null}
    </div>
  );
}
