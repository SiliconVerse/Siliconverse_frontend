import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import randomImg from '../../assets/regImg.png';
import MagazineArticle from './magazine-article';

export default function MagazineArticles({ handleShowPublish }) {
  const [showAllArticles, setShowAllArticles] = useState(false);

  const filteredArticles = showAllArticles
    ? tempArticles
    : tempArticles.slice(0, 10);

  const toggleShowAllArticles = () => {
    setShowAllArticles((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={handleShowPublish}
        className='text-nowrap h-[45px] shadow-[0_1px_4px_rgbargba(12,12,13,0.05)] bg-primaryColor text-white rounded-sl py-5 px-3 inline-flex justify-center items-center capitalize gap-3'
      >
        <PlusCircle />
        publish article
      </button>

      <section className='mt-4 py-5 px-6'>
        <header className='flex items-center justify-between gap-3 overflow-hidden my-5'>
          <h1 className='text-black font-medium'>Published articles</h1>

          <button onClick={toggleShowAllArticles} className='text-primaryColor'>
            See all
          </button>
        </header>

        <section className='overflow-x-auto space-y-5'>
          {/* articles heading */}
          <div className='grid grid-cols-[20rem_12rem_10rem_10rem_10rem_7rem] text-[#BDBDBD] gap-6'>
            <p>Posts</p>
            <p>Published</p>
            <p>Reach</p>
            <p>Ad Duration</p>
            <p className='text-nowrap'>Target Audience</p>
            <p>Status</p>
          </div>

          {/* articles list */}
          <div className='flex flex-col gap-5 pb-5'>
            {filteredArticles.map((publishedArticle) => (
              <MagazineArticle
                key={publishedArticle.id}
                {...publishedArticle}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

const tempArticles = [
  {
    id: 0,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 1,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 2,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 3,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 4,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 5,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 6,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 7,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 8,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 9,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 10,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 11,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 12,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 13,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 14,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 15,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
  {
    id: 16,
    image: randomImg,
    title: 'Boost Your Productivity with These Top 5 apps',
    createdAt: '2024-09-01T12:30:00',
    views: 50000,
    comments: 3000,
    AdDuration: 'January 1, 2024 - february 28, 2024',
    targetAudience: 'Age 18-25, Tech Enthusiasts',
  },
];
