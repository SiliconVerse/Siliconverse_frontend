/* eslint-disable react/prop-types */
import styles from './sidebar.module.css';
import profileBigImg from '../../assets/profileImgBig.png';
import profileBigIcon from '../../assets/profileImgIcon.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { company_profile_links } from '../../utils/sidebarLinks';

const SideBar = ({ showMenu }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  function getActiveRoute(route) {
    if (route.includes('=')) {
      const userValue = route.split('=')[1];
      const userParam = searchParams.get('user');
      if (userValue === userParam) {
        return true;
      }
      return false;
    } else {
      if (!location.search) {
        return true;
      }
      return false;
    }
  }

  return (
    <div className={showMenu ? styles.showMenu : styles.sidebar}>
      <div className={styles.profile}>
        <aside className={styles.profile_images}>
          <span style={{ position: 'relative' }}>
            <img
              src={profileBigImg}
              alt='Profile Image of user'
              className={styles.profileImg}
            />
            <img
              src={profileBigIcon}
              alt='Profile Image of user'
              className={styles.floatIcon}
            />
          </span>
        </aside>
        <aside className={styles.profile_details}>
          <p className={styles.profile_name}>Olaoluwa Vincent</p>
          <p>Ibadan</p>
          <p>Nigeria</p>
        </aside>
      </div>
      <div className={styles.links}>
        {company_profile_links.map((item, index) => (
          <Link
            to={item.url}
            key={index + 1}
            className={getActiveRoute(item.url) ? styles.active : ''}
          >
            {item.link}
          </Link>
        ))}
      </div>
      <div className={styles.signout}>
        <button>SignOut</button>
      </div>
      <div className={styles.footer}>
        <button className={styles.btn_help}>Help Center</button>
      </div>
    </div>
  );
};
export default SideBar;
