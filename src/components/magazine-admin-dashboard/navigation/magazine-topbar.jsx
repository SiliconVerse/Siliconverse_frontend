import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { magazineAdminTopbarLinks } from '../../../utils/magazineAdminLinks';

export default function MagazineTopbar() {
  return (
    <section className='bg-primaryColor text-white py-4 space-y-2 w-full px-5 md:px-10 lg:px-20'>
      {/* Search bar */}

      <div className='flex items-center gap-1 md:gap-6 pt-2 w-full'>
        <label className='relative w-full'>
          <span className='sr-only'>search</span>
          <input
            type='search'
            name='magazine-admin-search'
            id='magazine-admin-search'
            placeholder='Search'
            className='text-black w-full bg-[#F2F4F8] border border-[#C1C7CD] rounded-sl h-8 placeholder:text-[#878B8F] placeholder:font-medium pl-10 outline-none focus-visible:border focus-visible:outline-background-color/20 pr-2'
          />

          {/* search icon */}
          <Search
            className='absolute top-1/2 -translate-y-1/2 left-2'
            color='#21272A'
          />
        </label>
        <button
          type='button'
          className='font-medium bg-[#0F161E] border border-[#0F161E] rounded-sl py-4 px-3 h-8 inline-flex justify-center items-center'
        >
          Search
        </button>
      </div>

      {/* Navigation links */}

      <ul className='flex items-center gap-3 lg:gap-6 flex-wrap mx-6 md:mx-10'>
        {magazineAdminTopbarLinks.map((navLink) => (
          <li key={navLink.id} className='capitalize text-lg'>
            <Link to={navLink.href}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
