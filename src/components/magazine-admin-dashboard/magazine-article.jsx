import { format } from 'date-fns';
import { EllipsisVertical } from 'lucide-react';
import {
  formatDayWithOrdinal,
  formatNumber,
  formatTime12Hours,
} from '../../utils/util-functions';

export default function MagazineArticle({
  createdAt,
  views,
  comments,
  id,
  image,
  title,
  AdDuration,
  targetAudience,
}) {
  const formattedViews = formatNumber(views);

  const formattedComments = formatNumber(comments);

  const formatCustomDate = (datetimeString) => {
    const date = new Date(datetimeString);

    const day = formatDayWithOrdinal(date);

    const month = format(date, 'MMM');

    const time = formatTime12Hours(date);

    return `${day} ${month} at ${time}`;
  };

  const publishedDate = formatCustomDate(createdAt);

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

        <h3>{title}</h3>
      </div>

      <p>{publishedDate}</p>

      <p className=''>
        <span className=''>{`${formattedViews} reads`}</span>{' '}
        <span>{`${formattedComments} comments`}</span>
      </p>
      <p>{AdDuration}</p>
      <p>{targetAudience}</p>
      <div className='flex justify-between items-start gap-3'>
        <button className='py-2 px-4 bg-primaryColor text-white rounded-md h-8 inline-flex justify-center items-center'>
          Edit
        </button>
        <button aria-label='more options' className='opacity-50'>
          <EllipsisVertical />
        </button>
      </div>
    </div>
  );
}
