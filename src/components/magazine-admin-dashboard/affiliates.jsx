import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';
import { tempAffiliates } from '../../utils/temp-data';
import { cn } from '../../utils/util-functions';

export default function Affiliates() {
  const [affiliates, setAffiliates] = useState(tempAffiliates);
  const [showAll, setShowAll] = useState(false);

  const displayedAffiliates = showAll ? affiliates : affiliates.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className='shadow-ml rounded-sl py-1 px-2'>
      <div className='flex items-center justify-between gap-3 overflow-hidden my-5 mt-10'>
        <h2 className='text-black font-medium'>Affiliate</h2>

        <button className='text-primaryColor' onClick={toggleShowAll}>
          See all
        </button>
      </div>

      <section className='overflow-x-auto space-y-5 scrollbar pb-10'>
        <div className='grid grid-cols-[20rem_12rem_10rem_10rem_10rem_7rem] text-[#BDBDBD] gap-6 capitalize'>
          <p>posts</p>
          <p>brands</p>
          <p>earning</p>
          <p>commission</p>
          <p>payment method</p>
          <p>status</p>
        </div>

        <div className='flex flex-col gap-5 pb-5'>
          {displayedAffiliates.map((affiliate) => (
            <div
              className='grid grid-cols-[20rem_12rem_10rem_10rem_10rem_7rem] gap-6'
              key={affiliate.id}
            >
              <div className='flex gap-2'>
                <img
                  src={affiliate.image}
                  alt={affiliate.title}
                  width={56}
                  height={49}
                  className='w-14 rounded-sm'
                />

                <div>
                  <h3>{affiliate.title}</h3>
                  <p>ID: {affiliate.id}</p>
                </div>
              </div>

              <p>{affiliate.brand}</p>
              <p>{affiliate.earning}</p>
              <p>{affiliate.commission}%</p>
              <p>{affiliate.paymentMethod}</p>
              <div className='flex justify-between items-start gap-3'>
                <p
                  className={cn(
                    'py-1 px-2 text-white rounded-md min-w-20 inline-flex justify-center items-center border border-white capitalize',
                    affiliate.status === 'active'
                      ? 'bg-primaryColor'
                      : 'bg-[#A3A3A3]'
                  )}
                >
                  {affiliate.status}
                </p>
                <button aria-label='more options' className='opacity-50'>
                  <EllipsisVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
