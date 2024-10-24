import { ChevronDown, ChevronUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import {
  company_profile_links,
  user_profile_links,
} from '../../utils/sidebarLinks';
import styles from './sidebar.module.css';

function MobileSideBar() {
  const [searchParams] = useSearchParams();
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const pathName = useMemo(() => location.pathname, [location]);
  const { user, signout } = useAuth();

  const mainPath = `${user?.role}-profile` || '';

  //   for closing the menu onClick
  const handleLinkClick = () => showNav && setShowNav(false);

  //   For Displaying either company links or user links
  const urlLocationMemo = useMemo(() => {
    const isCompany = !!location.pathname.includes('/company-profile');
    if (isCompany) {
      return company_profile_links;
    }
    return user_profile_links;
  }, [pathName]);

  //   For getting Active States
  const getActiveRoute = (route) => {
    if (route.includes('=')) {
      const userValue = route.split('=')[1];
      const userParam = searchParams.get('tab');
      return userValue === userParam;
    } else {
      return !location.search;
    }
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className='grid col-span-12 md:hidden z-20'>
      <button
        onClick={handleShowNav}
        className='flex w-full bg-primaryColor/50 justify-between p-2'
      >
        <span>{user?.firstName}</span> <ChevronDown size='28' />
      </button>
      <div
        className={
          showNav
            ? 'grid md:hidden bg-primaryColor h-full absolute top-0 right-0 w-full'
            : 'hidden'
        }
      >
        <div className={styles.links}>
          <button
            onClick={handleShowNav}
            className='flex w-full bg-primaryColor/50 justify-between p-2'
          >
            <span>{user?.firstName}</span> <ChevronUp size='28' />
          </button>
          {urlLocationMemo.map((item, index) => (
            <Link
              to={`/${mainPath}${item.url}`}
              key={index + 1}
              onClick={handleLinkClick}
              className={getActiveRoute(item.url) ? styles.active : ''}
            >
              {item.link}
            </Link>
          ))}
        </div>
        <div className={styles.footer}>
          <button onClick={signout} className={`${styles.btn_help} my-3`}>
            Log Out
          </button>
          <Link
            to='/help'
            className={`${styles.btn_help} block text-center`}
            onClick={handleShowNav}
          >
            Help Center
          </Link>
        </div>
      </div>
    </section>
  );
}
export default MobileSideBar;
