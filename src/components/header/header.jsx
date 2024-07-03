/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import UserProfile from '../user-profile/userProfile';
import styles from './header.module.css';
import { Menu } from 'lucide-react';

const Header = ({ setShowMenu }) => {
  function handleClick() {
    console.log('clicked');
    setShowMenu((prev) => !prev);
  }
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo}>
        <span className={styles.menu} onClick={handleClick}>
          <Menu />
        </span>
        <Link to={'/'}>
          <h2 className={styles.logo}>Silicon Vers</h2>
        </Link>
      </div>
      <UserProfile />
    </div>
  );
};
export default Header;
