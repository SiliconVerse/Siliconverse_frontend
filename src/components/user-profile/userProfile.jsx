import styles from './userProfile.module.css';
import profileImg from '../../assets/userProfileImg.png';

const UserProfile = () => {
  return (
    <div className={styles.profile}>
      <img
        src={profileImg}
        alt='profile picture'
        className={styles.profileImg}
      />
    </div>
  );
};
export default UserProfile;
