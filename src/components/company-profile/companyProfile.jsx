import { useState } from 'react';
import styles from './companyProfile.module.css';
import CompanyProfileForm from './companyProfileForm';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { CiEdit } from "react-icons/ci";
const CompanyProfile = () => {

  const {user, isAuthenticated, isLoading} = useKindeAuth();


  if(isLoading){
    return <p> Name Loading...</p>
  }

  const userInfomation = {
    ceo: 'Olaoluwa vincent',
    state: 'Lagos',
    country: 'Nigeria',
    address: 'Shagari Estate Alimosho',
    organisation: 'Silicon Verse',
    type: 'Tech Hub',
  };
  const [userData] = useState(userInfomation);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.head}>
          <h3>My Information</h3>
          <p>
            Updating your information will offer you the most relevant content
            and conversations
          </p>

          <div className="">
            <button className={styles.btn}> <CiEdit/>  Edit</button>
          </div>
        </div>
        <div className={styles.userInfo}>
          { isAuthenticated ? (
          <aside>
            <h5>Name of CEO</h5>
            <p>{user.given_name} <span style={{marginLeft:"20px"}}>{user.family_name}</span></p>
          </aside>
          ) : (
            <p> Name Loading...</p>
          )}
          <aside>
            <h5>Location</h5>
            <p>
              {userData.state} <span>{`(${userData.country})`}</span>
            </p>
          </aside>
          <aside>
            <h5>Address</h5>
            <p>{userData.address}</p>
          </aside>
          <aside>
            <h5>Name of Company or Organisation</h5>
            <p>{userData.organisation}</p>
          </aside>
          <aside>
            <h5>Company Type</h5>
            <p>{userData.type}</p>
          </aside>
        </div>
      </section>
      <CompanyProfileForm />
    </>
  );
};
export default CompanyProfile;
