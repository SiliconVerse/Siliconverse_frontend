import { lazy, Suspense } from 'react';
import { cn } from '../../utils/util-functions';

const Chart = lazy(() => import('react-apexcharts'));

export default function SimpleLineChart({
  className = '',
  data,
  height = 350,
  options,
}) {
  if (!data || !options) {
    throw new Error('SimpleLineChart is missing data and options');
  }

  return (
    <div className={cn('', className)}>
      <Suspense fallback={<p>loading</p>}>
        <Chart series={data} options={options} type='line' height={height} />
      </Suspense>
    </div>
  );
}
