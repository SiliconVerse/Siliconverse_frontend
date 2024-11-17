import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/userAuth';
import { magazineAdminSidebarLinks } from '../../../utils/magazineAdminLinks';
import SidebarPhoto from '../../side-bar-photo';

export default function MagazineSidebar() {
  const { user, signout } = useAuth();
  const [searchParams] = useSearchParams();

  const [isSidebarVisible, setIsSidebarvisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarvisible((prev) => !prev);
  };

  // check if a tab is the current active tab
  const isActive = (url) => {
    const tab = searchParams.get('tab');

    return tab === url;
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`flex w-full justify-between p-2 h-fit md:hidden ${
          isSidebarVisible ? 'bg-primaryColor' : 'bg-primaryColor/50'
        }`}
      >
        <span>{user?.firstName}</span>{' '}
        <ChevronDown
          size='28'
          className={`transition-all ease-linear duration-300 ${
            isSidebarVisible ? 'rotate-180' : ''
          }`}
        />
      </button>
      <aside
        className={`bg-primaryColor text-white border-r w-full md:col-span-1 flex-col h-full md:flex ${
          isSidebarVisible
            ? 'flex absolute top-10 left-0 md:static md:h-full'
            : 'hidden md:flex '
        }`}
      >
        <div className='mx-auto gap-4 w-1/2 md:flex flex-col py-4 hidden'>
          <div className='relative rounded-full aspect-square group w-24 self-center'>
            <SidebarPhoto key={'desktop'} />
          </div>
          <div className={'space-y-1 text-center'}>
            <h2 className='font-bold text-xl truncate'>
              {user?.firstName} {user?.lastName}
            </h2>
            <p className='text-nowrap text-xl'>{`${
              user?.stateOfResidence || ''
            }${user?.country ? ', ' + user.country : ''}`}</p>
          </div>
        </div>
        <hr className='hidden md:block' />

        <nav className='py-4 flex flex-col gap-6 md:gap-4 px-2 md:w-fit md:mx-auto md:px-0'>
          {magazineAdminSidebarLinks.map((sidebarLink) => {
            const isTabActive = isActive(sidebarLink.href);

            return (
              <Link
                key={sidebarLink.id}
                to={`?tab=${sidebarLink.href}`}
                className={`capitalize md:text-sm relative after:content-[""] after:absolute after:w-[5px] after:h-full after:top-0 after:left-0 pl-2 md:after:-left-2 md:pl-0 after:bg-white  ${
                  isTabActive ? 'after:block' : 'after:hidden'
                }
              `}
              >
                {sidebarLink.name}
              </Link>
            );
          })}
        </nav>

        <hr className='mt-32 md:mt-auto ' />
        <button
          onClick={signout}
          className='border w-3/4 mx-auto py-3 mt-4 capitalize font-medium md:border-none md:py-2 md:w-full md:mt-2 hover:underline'
        >
          sign out
        </button>
      </aside>
    </>
  );
}
