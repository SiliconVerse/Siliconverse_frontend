/* eslint-disable react/prop-types */
import styles from './sidebar.module.css';
import profileBigImg from '../../assets/profileImgBig.png';
import profileBigIcon from '../../assets/profileImgIcon.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { company_profile_links } from '../../utils/sidebarLinks';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useState } from 'react';

const SideBar = ({ showMenu }) => {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState(profileBigImg);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [locationText, setLocationText] = useState('Location : ');

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

  function editLocation() {
    setIsEditingLocation(!isEditingLocation);
  }

  function handleLocationChange(event) {
    setLocationText(event.target.value);
  }

  function handleLocationBlur() {
    setIsEditingLocation(false);
  }

  function getActiveRoute(route) {
    if (route.includes('=')) {
      const userValue = route.split('=')[1];
      const userParam = searchParams.get('user');
      return userValue === userParam;
    } else {
      return !location.search;
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={showMenu ? styles.showMenu : styles.sidebar}>
      {isAuthenticated ? (
        <div className={styles.profile}>
          <aside className={styles.profile_images}>
            <span style={{ position: 'relative' }}>
              <img
                src={imageUrl}
                alt='Profile Image of user'
                className={styles.profileImg}
              />
              <input
                className={styles.floatIcon}
                onChange={editImage}
                type='file'
                accept='image/*'
              />
            </span>
          </aside>
          <aside className={styles.profile_details}>
            <p className={styles.profile_name}>
              {user.given_name} {user.family_name}
            </p>
            {isEditingLocation ? (
              <input
                type='text'
                value={locationText}
                onChange={handleLocationChange}
                onBlur={handleLocationBlur}
                color='black'
                autoFocus
                className={styles.locationInput}
              />
            ) : (
              <p onClick={editLocation}>{locationText}</p>
            )}
            <p>Nigeria</p>
          </aside>
        </div>
      ) : (
        <p>Please Sign Up or Log In</p>
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
