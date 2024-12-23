import { PlusCircle } from 'lucide-react';
import useToggle from '../../hooks/use-toggle';
import { tempArticles } from '../../utils/temp-data';
import MagazineArticle from './magazine-article';

export default function MagazineArticles({ handleShowPublish }) {
  const [showAllArticles, toggleShowAllArticles] = useToggle();

  const filteredArticles = showAllArticles
    ? tempArticles
    : tempArticles.slice(0, 10);

  return (
    <>
      <button
        onClick={handleShowPublish}
        className='text-nowrap h-[45px] shadow-[0_1px_4px_rgbargba(12,12,13,0.05)] bg-primaryColor text-white rounded-sl py-5 px-3 inline-flex justify-center items-center capitalize gap-3'
      >
        <PlusCircle />
        publish article
      </button>

      <section className='mt-4 py-5 px-3 md:px-6'>
        <header className='flex items-center justify-between gap-3 overflow-hidden my-5'>
          <h1 className='text-black font-medium'>Published articles</h1>

          <button onClick={toggleShowAllArticles} className='text-primaryColor'>
            See all
          </button>
        </header>

        <section className='overflow-x-auto space-y-5 scrollbar'>
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
