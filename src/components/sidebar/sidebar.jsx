/* eslint-disable react/prop-types */
import styles from './sidebar.module.css';
import profileBigImg from '../../assets/profileImgBig.png';
import profileBigIcon from '../../assets/profileImgIcon.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { company_profile_links } from '../../utils/sidebarLinks';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const SideBar = ({ showMenu }) => {
  const {user, isAuthenticated, isLoading} = useKindeAuth();
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

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div className={showMenu ? styles.showMenu : styles.sidebar}>
      { isAuthenticated ? (
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
          <p className={styles.profile_name}>{user.given_name} {user.family_name}</p>
          <p>Ibadan</p>
          <p>Nigeria</p>
        </aside>
      </div>
       ) : (
        <p> Please Sign Up or Log In </p>
      )}
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
        <Link to="/help"><button className={styles.btn_help}>Help Center</button></Link>
        
      </div>
    </div>
  );
};
export default SideBar;
