import { MoveRightIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowDown from '../../assets/icons/arrow-down.svg';
import clockLoader from '../../assets/icons/clock-loader.svg';
import { cn } from '../../utils/util-functions';
import SimpleAreaChart from '../charts/simple-area-chart';
import SimpleBarChart from '../charts/simple-bar-chart';
import Dropdown from '../dropdown';
import {
  churnRateOptions,
  churnRateSeries,
  visitorsStatisticsOptions,
  visitorsStatisticsSeries,
} from './magazine-temp-data';

export default function DashboardSecondSection({ subscribers }) {
  const [churnRateFilter, setChurnRateFilter] = useState('monthly');

  const churnRateFilterOptions = [
    {
      label: 'Monthly',
      value: 'monthly',
    },
  ];

  const newSubs = subscribers.slice(0, 8);

  return (
    <section className='my-7 flex flex-wrap gap-9 w-full xl:grid xl:grid-cols-[auto_auto_1fr] max-w-big'>
      <div>
        <div className='px-3 py-4 shadow-sl border border-[#F4F4F4] gap-1 rounded-sl w-64 space-y-4'>
          <h3 className='text-sm'>Avg time users spend reading</h3>
          <div className='flex items-center gap-1 relative'>
            <img src={clockLoader} alt='icon' width={30} />

            <p className='ml-3'>4 hours</p>

            <div className='relative'>
              <div className='flex items-center gap-1  pl-4 relative'>
                <img src={arrowDown} alt='' className={cn('h-7')} />
                <p className={'text-[#ED1F24]'}>10.3%</p>
                <span className='size-4 bg-primaryColor rounded-full inline-block absolute -bottom-5 right-0 after:content-[""] after:absolute after:bg-white after:size-2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:left-1/2 after:rounded-full'></span>
              </div>
            </div>
          </div>
          <p className='text-gray-600 text-xs mt-5 relative left-[6.4rem]'>
            per day
          </p>
        </div>

        <article className='shadow-sl border border-[#F4F4F4] gap-1 rounded-sl p-3 mt-7 w-64 '>
          <h3 className='text-sm  border-b border-[#B1B1B1] pb-5'>
            Visitors Statistics
          </h3>

          <SimpleAreaChart
            data={visitorsStatisticsSeries}
            options={visitorsStatisticsOptions}
            height={150}
          />
          <Link
            to={''}
            className='text-primaryColor flex items-center flex-nowrap gap-3'
          >
            All subscribers
            <MoveRightIcon size={20} />
          </Link>
        </article>
      </div>

      <article className='shadow-sl border border-[#F4F4F4] gap-1 rounded-sl p-3 md:p-5 w-fit'>
        <h3 className='font-medium'>New Subscribers</h3>

        <ul className='mt-4 mb-8'>
          {newSubs.map((sub) => (
            <li key={sub.id} className='flex gap-2 items-center'>
              <img
                src={sub.profilePicture}
                alt={`${sub.firstName} profile`}
                width={25}
                height={25}
                className='rounded-full'
              />
              <p className='truncate'>{`${sub.firstName} ${sub.lastName}`}</p>
            </li>
          ))}
        </ul>
        <Link
          to={''}
          className='text-primaryColor flex items-center flex-nowrap gap-3'
        >
          All subscribers
          <MoveRightIcon size={20} />
        </Link>
      </article>

      <article className='shadow-sl border border-[#F4F4F4] gap-1 rounded-sl p-3 md:p-5'>
        <div className='flex items-center justify-between gap-2'>
          <h3 className='font-medium'>Churn rate</h3>
          <p className='font-medium'>
            <span className=''>Show data:</span>
            <span className='text-primaryColor'> 7 months</span>
          </p>
          <Dropdown
            selectedOption={churnRateFilter}
            options={churnRateFilterOptions}
            handleChange={setChurnRateFilter}
            height='15px'
            wrapperStyles=''
            className={'w-fit text-sm'}
            placeholder='Monthly'
          />
        </div>
        <SimpleBarChart data={churnRateSeries} options={churnRateOptions} />
      </article>
    </section>
  );
}
