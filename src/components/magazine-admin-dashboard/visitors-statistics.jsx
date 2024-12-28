import { useState } from 'react';
import { renderToString } from 'react-dom/server';
import SimpleLineChart from '../charts/simple-line-chart';
import Dropdown from '../dropdown';

export default function VisitorsStatistics() {
  const [visitorStatsFilter, setVisitorStatsFilter] = useState('monthly');

  const visitorStatsFilters = [
    {
      label: 'Monthly',
      value: 'monthly',
    },
    {
      label: 'Weekly',
      value: 'weekly',
    },
    {
      label: 'Daily',
      value: 'daily',
    },
  ];

  const visitorStatsOptionLabels = {
    monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept'],
    weekly: ['Last week', '', '', '', 'This week', '', ''],
    daily: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  };

  const visitorStatsData = {
    monthly: [
      {
        name: 'Column',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752],
      },
      {
        name: 'Line',
        type: 'line',
        data: [123, 142, 135, 127, 143, 122, 117, 131, 122],
        tooltip: {
          enabled: false,
        },
      },
    ],
    daily: [
      {
        name: 'Column',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201],
      },
      {
        name: 'Line',
        type: 'line',
        data: [100, 142, 135, 217, 143, 122, 117],
        tooltip: {
          enabled: false,
        },
      },
    ],
    weekly: [
      {
        name: 'Column',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201],
      },
      {
        name: 'Line',
        type: 'line',
        data: [123, 142, 135, 127, 143, 22, 17],
        tooltip: {
          enabled: false,
        },
      },
    ],
  };

  const visitorStatsOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4],
      curve: 'smooth',
    },

    dataLabels: {
      enabled: false,
    },
    labels: visitorStatsOptionLabels[visitorStatsFilter],
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors: ['rgba(255, 95, 21,0.1)', '#FF5F15'],

    grid: {
      show: false,
    },

    legend: {
      show: false,
    },
    tooltip: {
      shared: false,
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        const label = w.globals.categoryLabels[dataPointIndex];

        const prep = {
          daily: 'on',
          weekly: 'this',
          monthly: 'in',
        };

        return renderToString(
          <div className='flex items-center gap-1 shadow-[0_0_2px_0_rgba(0,0,0,0.2)] rounded-[5px] px-3 py-1 font-bold'>
            <p className='text-primaryColor'>{data}:</p>
            <p className='text-[#848484]'>{` Low visits ${
              prep[visitorStatsFilter]
            } ${label || ''}`}</p>
          </div>
        );
      },
    },
    // xaxis: {
    //   tooltip: {
    //     enabled: false,
    //   },
    // },
  };
  return (
    <section className='shadow-ml p-4'>
      <div className='flex items-center justify-between'>
        <h2>Visitors Statistics</h2>
        <Dropdown
          selectedOption={visitorStatsFilter}
          options={visitorStatsFilters}
          handleChange={setVisitorStatsFilter}
          height='15px'
          wrapperStyles=''
          className={'w-fit text-sm'}
          placeholder='Monthly'
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
      <SimpleLineChart
        data={visitorStatsData[visitorStatsFilter]}
        options={visitorStatsOptions}
        className='mt-10 mb-12'
      />
      <div className='flex items-center gap-1'>
        <p className='text-[#2E2E30] font-semibold'>30%</p>
        <p className='text-gray-600'>
          Your visit performance is 30% lesser compare to last month
        </p>
      </div>
    </section>
  );
}
