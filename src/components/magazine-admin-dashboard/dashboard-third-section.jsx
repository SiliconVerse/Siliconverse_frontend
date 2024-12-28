import { EllipsisVertical } from 'lucide-react';
import useToggle from '../../hooks/use-toggle';
import { cn, formatNumber } from '../../utils/util-functions';

export default function DashboardThirdSection({ allUploads, keywords }) {
  const [showAllUploads, toggleShowAllUploads] = useToggle();

  const uploads = showAllUploads ? allUploads : allUploads.slice(0, 4);

  return (
    <section className='space-y-9  xl:space-y-0 xl:grid xl:grid-cols-[auto_1fr] gap-9 max-w-big relative'>
      <article className='w-fit rounded-sl shadow-sl border border-[#F4F4F4] py-4 px-3 h-fit max-w-64'>
        <h3 className='font-medium'>Most engaged keywords</h3>
        <ul className='mt-[0.625rem]'>
          <li className='text-[#ABABAB] flex justify-between w-full gap-10 mb-4'>
            <span>Name</span>
            <span>Views</span>
          </li>
          {keywords.map((keyword) => (
            <li
              key={keyword.name}
              className='mb-[0.625rem] last:mb-0 flex justify-between w-full gap-10'
            >
              <span className='capitalize'>#{keyword.name}</span>
              <span>
                {formatNumber(keyword.value, { maximumFractionDigits: 1 })}
              </span>
            </li>
          ))}
        </ul>
      </article>
      <article className='rounded-sl shadow-ml border border-[#F4F4F4] p-5 overflow-hidden '>
        <div className='mb-4 overflow-hidden flex items-center justify-between'>
          <h3 className='font-medium'>Uploads</h3>
          <button onClick={toggleShowAllUploads} className='text-primaryColor'>
            See all
          </button>
        </div>

        <div className='overflow-auto space-y-6 scrollbar max-h-80'>
          <div className='grid grid-cols-[20rem_12rem_10rem_7rem] text-[#BDBDBD] gap-6'>
            <p>Posts</p>
            <p>Author</p>
            <p>Views & Comments</p>
            <p>Status</p>
          </div>

          <div className='flex flex-col gap-5 pb-5'>
            {uploads.map((upload) => (
              <div
                key={upload.id}
                className='grid grid-cols-[20rem_12rem_10rem_7rem] gap-6'
              >
                <div className='flex gap-2'>
                  <img
                    src={upload.image}
                    alt={upload.title}
                    width={62}
                    height={62}
                    className='w-16 md:w-24 rounded-sm'
                  />

                  <h3>{upload.title}</h3>
                </div>
                <p className='truncate'>{upload.author}</p>

                <p>
                  {`${formatNumber(upload.views)} views & ${formatNumber(
                    upload.comments
                  )} comments`}
                </p>
                <div className='flex items-start gap-3 w-fit'>
                  <button
                    className={cn(
                      'py-2 px-4 bg-primaryColor text-white rounded-md h-8 inline-flex justify-center items-center capitalize w-20',
                      upload.status === 'inactive' && 'bg-gray-700'
                    )}
                  >
                    {upload.status}
                  </button>
                  <button aria-label='more options' className='opacity-50'>
                    <EllipsisVertical />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
