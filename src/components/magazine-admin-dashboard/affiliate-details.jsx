import { useParams } from 'react-router-dom';
import { tempAffiliates } from '../../utils/temp-data';
import SimpleLineChart from '../charts/simple-line-chart';

export default function AffiliateDetails() {
  const { id } = useParams();

  const index = tempAffiliates.findIndex((affiliate) => affiliate.id === id);

  const affiliate = tempAffiliates[index];

  const series = [
    {
      name: 'Something',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: 'Another thing',
      data: [5, 30, 45, 20, 59, 32, 99, 11, 128],
    },
  ];
  const options = {
    chart: {
      height: 210,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    markers: {
      size: 4,
    },
    title: {
      text: 'Click through rate',
      align: 'left',
      margin: 10,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        color: '#BDBDBD',
      },
    },
    subtitle: {
      text: '35%',
      align: 'left',
      margin: 10,
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'inherit',
        color: '#FF5F15',
      },
    },
    grid: {
      row: {
        colors: ['transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  };

  if (index < 0) {
    return (
      <section>
        <p>not found</p>
      </section>
    );
  }

  return (
    <section className='my-4 md:mt-2'>
      <header className='flex items-center gap-3 md:gap-5 border-b border-[#C0C0C0] py-3 pb-4'>
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

      <section>
        <div>
          <SimpleLineChart data={series} options={options} height={210} />
        </div>
      </section>
    </section>
  );
}
