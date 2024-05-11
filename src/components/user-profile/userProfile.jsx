import styles from './userProfile.module.css';
import profileImg from '../../assets/userProfileImg.png';
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const UserProfile = () => {
  const {user, isAuthenticated, isLoading} = useKindeAuth();

    if(isLoading){
      return <p>Loading</p>
    }

  return (
      isAuthenticated ? (
    <div className={styles.profile}>
      <img
        src={profileImg}
        alt='profile picture'
        className={styles.profileImg}
      />
      <h4 className={styles.profile_name}>{user.given_name} {user.family_name}</h4>
    </div> 
    ):(
      <p> Please Sign Up or Log In</p> 
    )
  );
};
export default UserProfile;
