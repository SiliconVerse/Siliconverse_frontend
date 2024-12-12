import { EllipsisVertical } from 'lucide-react';
import { cn } from '../../utils/util-functions';

export default function SponsoredAd({ ad }) {
  const {
    id,
    title,
    image,
    brand,
    impression,
    adDuration,
    status,
    targetAudience,
  } = ad;
  return (
    <div className='grid grid-cols-[20rem_12rem_10rem_10rem_10rem_7rem] gap-6'>
      <div className='flex gap-2'>
        <img
          src={image}
          alt={title}
          width={56}
          height={49}
          className='w-14 rounded-sm'
        />

        <div>
          <h3>{title}</h3>
          <p>ID: {id}</p>
        </div>
      </div>

      <p>{brand}</p>
      <p>{impression}</p>
      <p>{adDuration}</p>
      <p>{targetAudience}</p>
      <div className='flex justify-between items-start gap-3'>
        <p
          className={cn(
            'py-1 px-2 text-white rounded-md min-w-20 inline-flex justify-center items-center border border-white capitalize',
            status === 'active' ? 'bg-primaryColor' : 'bg-[#A3A3A3]'
          )}
        >
          {status}
        </p>
        <button aria-label='more options' className='opacity-50'>
          <EllipsisVertical />
        </button>
      </div>
    </div>
  );
}
