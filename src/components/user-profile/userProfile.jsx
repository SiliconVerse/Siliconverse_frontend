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
      <h4 className={styles.profile_name}>David</h4>
    </div>
  );
};
export default UserProfile;
