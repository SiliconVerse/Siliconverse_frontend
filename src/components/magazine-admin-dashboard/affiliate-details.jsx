import { useParams } from 'react-router-dom';
import { tempAffiliates } from '../../utils/temp-data';
import { formatNumber } from '../../utils/util-functions';
import SimpleDonutChart from '../charts/simple-donut-chart';
import SimpleLineChart from '../charts/simple-line-chart';
import {
  adSpendAllocationOptions,
  adSpendAllocationSeries,
  clickThroughRateOptions,
  clickThroughRateSeries,
  demographics,
  engagementRateOptions,
  engagementRateSeries,
  reachOptions,
  reachSeries,
  trafficSourceDistributionOptions,
  trafficSourceDistributionSeries,
} from './magazine-temp-data';

export default function AffiliateDetails() {
  const { id } = useParams();

  const index = tempAffiliates.findIndex((affiliate) => affiliate.id === id);

  const affiliate = tempAffiliates[index];

  const sortedDemographics = demographics.toSorted((a, b) => b.value - a.value);

  if (index < 0) {
    return (
      <section>
        <p>not found</p>
      </section>
    );
  }

  return (
    <>
      <header className='flex items-center gap-3 md:gap-5 border-b border-[#C0C0C0] py-3 pb-4 mb-14'>
        <img
          src={affiliate.image}
          alt={affiliate.title}
          width={124}
          height={108}
          className='bg-[#ABA0A0] rounded'
        />
        <div className='space-y-2 md:space-y-[0.625rem]'>
          <h1 className='md:text-xl'>{affiliate.title}</h1>
          <p>ID: {affiliate.id}</p>
        </div>
      </header>

      <section className='flex flex-wrap gap-9 max-w-[1440px] items-center justify-center md:items-start md:justify-start'>
        <div className='gap-5 w-fit flex md:flex-col'>
          <div className='shadow-sl rounded-sl border border-[#F4F4F4] w-fit px-4 py-3 space-y-2'>
            <p className='text-[#BDBDBD]'>Impressions</p>
            <p>{formatNumber(affiliate.impressions)}</p>
          </div>
          <div className='shadow-sl rounded-sl border border-[#F4F4F4] w-fit px-4 py-3 space-y-2'>
            <p className='text-[#BDBDBD]'>Impressions</p>
            <p>{formatNumber(affiliate.impressions)}</p>
          </div>
        </div>

        <SimpleLineChart
          data={clickThroughRateSeries}
          options={clickThroughRateOptions}
          height={300}
          className='shadow-sl rounded-sl border border-[#F4F4F4] max-w-72'
        />

        <SimpleLineChart
          data={engagementRateSeries}
          options={engagementRateOptions}
          height={300}
          className='shadow-sl rounded-sl border border-[#F4F4F4] max-w-72'
        />

        <SimpleLineChart
          data={reachSeries}
          options={reachOptions}
          height={300}
          className='shadow-sl rounded-sl border border-[#F4F4F4] max-w-72'
        />

        <SimpleDonutChart
          data={trafficSourceDistributionSeries}
          options={trafficSourceDistributionOptions}
          className='rounded-sl border border-[#F1F1F1] px-6 py-4 md:max-w-80 xl:max-w-[23.75rem]'
        />
        <SimpleDonutChart
          data={adSpendAllocationSeries}
          options={adSpendAllocationOptions}
          className='rounded-sl border border-[#F1F1F1] px-6 py-4 md:max-w-80 xl:max-w-[23.75rem]'
        />

        <div className='max-w-sm md:max-w-fit p-6 shadow-ml rounded-sl space-y-[1.2rem]'>
          <h3 className='text-[#BDBDBD]'>Demographics</h3>

          <div className='space-y-3'>
            {sortedDemographics.map((demographic) => (
              <div
                key={demographic.id}
                className='flex justify-between items-center rounded text-[#131313] bg-demo font-medium text-sm min-w-44 px-2 py-[6px]'
              >
                <p className='uppercase'>{demographic.country}</p>
                <p>{formatNumber(demographic.value)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
