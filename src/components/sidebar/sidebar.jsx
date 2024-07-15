import styles from './sidebar.module.css';
import profileBigImg from '../../assets/profileImgBig.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  company_profile_links,
  user_profile_links,
} from '../../utils/sidebarLinks';
import { useMemo, useState } from 'react';

const SideBar = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState(profileBigImg);

  const pathName = useMemo(() => location.pathname, [location]);

  const urlLocationMemo = useMemo(() => {
    const isCompany = !!location.pathname.includes('/company-profile');
    if (isCompany) {
      return company_profile_links;
    }
    return user_profile_links;
  }, [pathName]);

  function editImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function getActiveRoute(route) {
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
        <aside className='relative overflow-hidden rounded-full'>
          <label
            htmlFor='profile'
            className='cursor-pointer'>
            <img
              src={imageUrl}
              alt='Profile Image of user'
              className='h-full w-full object-cover'
            />
          </label>
          <input
            id='profile'
            className='hidden'
            onChange={editImage}
            type='file'
            accept='image/*'
          />
        </aside>
        <aside className={'space-y-1 text-center font-bold'}>
          <h2>Username</h2>
          <p>Nigeria</p>
        </aside>
      </div>

      <div className={styles.links}>
        {urlLocationMemo.map((item, index) => (
          <Link
            to={item.url}
            key={index + 1}
            className={getActiveRoute(item.url) ? styles.active : ''}>
            {item.link}
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <Link to='/help'>
          <button className={styles.btn_help}>Help Center</button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
