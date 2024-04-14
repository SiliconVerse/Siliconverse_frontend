import { Link } from 'react-router-dom';
import UserProfile from '../user-profile/userProfile';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <Link to={'/'}>
          <h2 className={styles.logo}>Silicon Verse</h2>
        </Link>
      </div>
      <UserProfile />
    </div>
  );
};
export default Header;
