import { MoveRightIcon } from 'lucide-react';
import { formatNumber } from '../../utils/util-functions';

export default function Subscribers({ subscribers, title }) {
  return (
    <section className='border border-[#F4F4F4] shadow-ml p-4'>
      <h2>{title}</h2>

      <div className='overflow-x-auto space-y-5 scrollbar pb-10'>
        <div className='grid grid-cols-[15rem_12rem_15rem_7rem] gap-10 text-gray-700 my-3'>
          <p>Name</p>
          <p>Email</p>
          <p>Engagements</p>
          <p>Send mail</p>
        </div>

        <ul className=''>
          {subscribers.map((subscriber) => {
            const reads = formatNumber(subscriber.reads);

            const comments = formatNumber(subscriber.comments);
            return (
              <li
                key={subscriber.id}
                className='grid grid-cols-[15rem_12rem_15rem_7rem] gap-10'
              >
                <div className='flex gap-2 items-center'>
                  <img
                    src={subscriber.profilePicture}
                    alt={subscriber.firstName}
                    width={30}
                    height={30}
                    className='w-7 rounded-full'
                  />
                  <p className='truncate'>{`${subscriber.firstName || ''} ${
                    subscriber.lastName || ''
                  }`}</p>
                </div>
                <p>{subscriber.email}</p>
                <p>{`${reads} reads, ${comments} comments`}</p>
                <button className='flex items-center gap-3 text-primaryColor mt-1'>
                  <span>Contact</span>
                  <MoveRightIcon size={20} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
