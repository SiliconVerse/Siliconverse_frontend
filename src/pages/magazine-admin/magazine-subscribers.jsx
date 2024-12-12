import { EllipsisVerticalIcon, MoveRightIcon } from 'lucide-react';
import { demographics } from '../../components/magazine-admin-dashboard/magazine-temp-data';
import Subscribers from '../../components/magazine-admin-dashboard/subscribers';
import VisitorsStatistics from '../../components/magazine-admin-dashboard/visitors-statistics';
import { subscribers } from '../../utils/temp-data';
import { cn, formatNumber, getTimeAgo } from '../../utils/util-functions';

export default function MagazineSubscribers() {
  const tempData = {
    topMonth: 'January',
    year: 2025,
    newSubscribersNo: 215_000,
    topYear: 2025,
  };

  const topSubs = subscribers.slice(0, 3);

  const sortedDemographics = demographics.toSorted((a, b) => b.value - a.value);

  return (
    <>
      <section className='space-y-6 lg:grid lg:grid-cols-2 gap-6 lg:space-y-0'>
        <VisitorsStatistics />

        <Subscribers
          subscribers={subscribers}
          title={'Most active subscribers'}
        />
      </section>

      <section className='lg:grid lg:grid-cols-2 my-6 gap-6 space-y-6 lg:space-y-0'>
        <div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='shadow-ml rounded-2xl p-4'>
              <h3 className='text-gray-500 font-medium'>Top month</h3>
              <p className='text-[#8C340C] font-medium text-xl mt-2'>
                {tempData.topMonth}
              </p>
              <p className='text-primaryColor'>{tempData.topYear}</p>
              <p className='mt-2 font-medium'>{`+${formatNumber(
                tempData.newSubscribersNo
              )} Subscribers`}</p>
            </div>
            <div className='shadow-ml rounded-2xl p-4'>
              <h3 className='text-gray-500 font-medium'>Top year</h3>
              <p className='text-[#8C340C] font-medium text-xl mt-6 mb-2'>
                {tempData.topYear}
              </p>
              <p>{`+${formatNumber(tempData.newSubscribersNo)} Subscribers`}</p>
            </div>
          </div>
          <div className='shadow-ml rounded-2xl p-2 py-4 lg:px-4 space-y-4'>
            <h3 className='text-gray-500 font-medium'>Top subscribers</h3>

            <ul className='flex flex-wrap gap-5'>
              {topSubs.map((subscriber) => (
                <li
                  key={subscriber.id}
                  className='relative w-fit after:content-[""] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:border-r  after:w-full after:h-4/6 after:last:border-none px-2 md:px-5 first:pl-2 last:pr-2 after:border-black'
                >
                  <img
                    src={subscriber.profilePicture}
                    alt={subscriber.firstName}
                    width={30}
                    height={30}
                    className='w-7 rounded-full'
                  />
                  <h4 className='capitalize font-medium mt-1'>{`${subscriber.firstName} ${subscriber.lastName}`}</h4>
                  <p className='text-[#454545]'>{subscriber.email}</p>
                  <button className='flex items-center gap-3 text-primaryColor mt-1'>
                    <span>Contact</span>
                    <MoveRightIcon size={20} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Subscribers
          subscribers={subscribers}
          title={'Least active subscribers'}
        />
      </section>

      <section className='space-y-6 my-6 lg:grid lg:grid-cols-2 gap-6 lg:space-y-0'>
        <div className='w-full p-6 shadow-ml rounded-sl space-y-[1.2rem]'>
          <h3 className='text-[#BDBDBD]'>Demographics</h3>

          <div className='space-y-3 w-full'>
            {sortedDemographics.map((demographic) => {
              const width =
                (demographic.value / sortedDemographics[0].value) * 100;

              return (
                <div
                  key={demographic.id}
                  className={cn(
                    'flex justify-between items-center rounded text-[#131313] bg-demo font-medium text-sm w-full px-2 py-[6px]'
                  )}
                  style={{ width: `${width}%` }}
                >
                  <p className='uppercase'>{demographic.country}</p>
                  <p>{formatNumber(demographic.value)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <section className='border border-[#F4F4F4] shadow-ml p-4'>
          <h2>Inactive subscribers</h2>

          <div className='overflow-x-auto space-y-5 scrollbar pb-10'>
            <div className='grid grid-cols-[15rem_12rem_8rem_7rem] gap-10 text-gray-700 my-3'>
              <p>Name</p>
              <p>Email</p>
              <p>Last engagements</p>
              <p>Send mail</p>
            </div>

            <ul className=''>
              {subscribers.map((subscriber) => {
                const timeAgo = getTimeAgo(subscriber.lastengagement);

                return (
                  <li
                    key={subscriber.id}
                    className='grid grid-cols-[15rem_12rem_8rem_7rem] gap-10'
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
                    <p>{`${timeAgo}`}</p>
                    <div className='flex items-center gap-5'>
                      <button className='flex items-center gap-3 text-primaryColor mt-1'>
                        <span>Contact</span>
                        <MoveRightIcon size={20} />
                      </button>

                      <button className='text-black/50'>
                        <EllipsisVerticalIcon size={20} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
