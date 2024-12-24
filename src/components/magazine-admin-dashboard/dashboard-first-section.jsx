import { PlusCircleIcon } from 'lucide-react';
import clearAll from '../../assets/icons/clear-all.svg';
import createNewFolder from '../../assets/icons/create-new-folder.svg';
import emojiPeople from '../../assets/icons/emoji-people.svg';
import DashboardTopCard from './dashboard-top-card';

export default function DashboardFirstSection({ data }) {
  return (
    <section className='flex gap-5 flex-wrap large:justify-between 2xl:flex-nowrap'>
      <button className='flex gap-2 items-center bg-primaryColor text-white text-nowrap px-5 py-3 rounded-sl shadow-sl h-[77px] 2xl:text-xl'>
        <PlusCircleIcon size={20} />
        Create newsletter
      </button>
      <DashboardTopCard
        title={'Total visits'}
        value={data.totalVisits}
        icon={emojiPeople}
      />
      <DashboardTopCard
        title={'Articles published'}
        value={data.articlesPublished}
        icon={createNewFolder}
      />
      <DashboardTopCard
        title={'Visitors'}
        value={data.visitors}
        icon={emojiPeople}
        hasIncreased={false}
        percentage={10.3}
      />
      <DashboardTopCard
        title={'Comments'}
        value={data.totalComments}
        icon={clearAll}
        hasIncreased={false}
        percentage={10.3}
      />
    </section>
  );
}
