import { useState } from 'react';
import { tempSponsoredAds } from '../../utils/temp-data';
import SponsoredAd from './sponsored-ad';

export default function SponsoredAds() {
  const [sponsoredAds, setSponsoredAds] = useState(tempSponsoredAds);

  const [showAll, setShowAll] = useState(false);

  const displayedAds = showAll ? sponsoredAds : sponsoredAds.slice(0, 10);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className='shadow-ml rounded-sl px-2 py-1'>
      <div className='flex items-center justify-between gap-3 overflow-hidden my-5'>
        <h2 className='text-black font-medium'>Sponsored ads</h2>

        <button className='text-primaryColor' onClick={toggleShowAll}>
          See all
        </button>
      </div>

      <section className='overflow-x-auto space-y-5 scrollbar pb-10'>
        <div className='grid grid-cols-[20rem_12rem_10rem_10rem_10rem_7rem] text-[#BDBDBD] gap-6 capitalize'>
          <p>posts</p>
          <p>brands</p>
          <p>impressions</p>
          <p>ad duration</p>
          <p>target audience</p>
          <p>status</p>
        </div>

        <div className='flex flex-col gap-5 pb-5'>
          {displayedAds.map((ad) => (
            <SponsoredAd key={ad.id} ad={ad} />
          ))}
        </div>
      </section>
    </section>
  );
}
