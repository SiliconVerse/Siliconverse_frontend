import { lazy, Suspense } from 'react';
import { cn } from '../../utils/util-functions';
import Spinner from '../spinner';

const Chart = lazy(() => import('react-apexcharts'));

export default function SimpleBarChart({
  className = '',
  data,
  height = 350,
  options,
}) {
  if (!data || !options) {
    throw new Error('SimpleBarChart is missing data and options');
  }

  return (
    <div className={cn('w-full', className)}>
      <Suspense fallback={<Spinner className={'text-primaryColor'} />}>
        <Chart series={data} options={options} type='bar' height={height} />
      </Suspense>
    </div>
  );
}
