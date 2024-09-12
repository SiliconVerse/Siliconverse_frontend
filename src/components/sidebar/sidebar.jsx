import { useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import {
  company_profile_links,
  user_profile_links,
} from '../../utils/sidebarLinks';
import SidebarPhoto from '../side-bar-photo';
import styles from './sidebar.module.css';

const SideBar = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { user, signout } = useAuth();

  const pathName = useMemo(() => location.pathname, [location]);

  const role = user?.role;

  const urlLocationMemo = useMemo(() => {
    const isCompany = !!location.pathname.includes('/company-profile');
    if (isCompany) {
      return company_profile_links;
    }
    return user_profile_links;
  }, [pathName]);

  function getActiveRoute(route) {
    if (!pathName.includes('profile')) return false;
    if (route.includes('=')) {
      const userValue = route.split('=')[1];
      const userParam =
        pathName == '/company-profile'
          ? searchParams.get('company')
          : searchParams.get('user');
      return userValue === userParam;
    } else {
      return !location.search;
    }
  }

  return (
    <div className={styles.sidebar + ' font-roboto'}>
      <div className='w-24 aspect-square mx-auto'>
        <aside className='relative rounded-full aspect-square group'>
          {/* Profile Picture */}
          <SidebarPhoto key={'desktop'} />
        </aside>
        <aside className={'space-y-1 text-center font-bold'}>
          <h2>{user?.firstName}</h2>
          <div className='flex gap-2 font-normal'>
            <p>{user?.country}</p>-<p>{user?.stateOfResdidence}</p>
          </div>
        </aside>
      </div>

      <div className={styles.links}>
        {urlLocationMemo.map((item, index) => (
          <Link
            to={item.url}
            key={index + 1}
            className={getActiveRoute(item.url) ? styles.active : ''}
          >
            {item.link}
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <button onClick={() => signout()} className={`${styles.btn_help} my-3`}>
          Log Out
        </button>
        <Link to='/help' className={pathName === '/help' ? 'bg-red-900' : ''}>
          <button className={styles.btn_help}>Help Center</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
