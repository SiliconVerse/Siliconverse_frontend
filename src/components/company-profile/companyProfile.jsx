import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useAuth } from "../../hooks/userAuth";
import CompanyProfileEditForm from "./company-profile-edit-form";
import styles from "./companyProfile.module.css";

const CompanyProfile = () => {
  const { user } = useAuth();
  const [editCompanyProfile, setEditCompanyProfile] = useState(false);

  const openEditModal = () => {
    setEditCompanyProfile(true);
  };

  const closeEditModal = () => {
    setEditCompanyProfile(false);
  };

  if (!user) return null;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.head}>
          <h3>My Information</h3>
          <p className="">
            Updating your information will offer you the most relevant content
            and conversations
          </p>

          <div className="">
            <button
              className={styles.btn}
              onClick={openEditModal}>
              {" "}
              <CiEdit /> Edit
            </button>
          </div>
        </div>
        <div className={styles.userInfo}>
          <aside>
            <h5>CEO</h5>
            <p>{user.ceo || "-"}</p>
          </aside>
          <aside>
            <h5>Location</h5>
            <p>
              {user.state || "-"}{" "}
              {user.country ? <span>{`(${user.country})`}</span> : null}
            </p>
          </aside>
          <aside>
            <h5>Address</h5>
            <p>{user.address || "-"}</p>
          </aside>
          <aside>
            <h5>Name of Company or Organisation</h5>
            <p>{user.organizationName || "-"}</p>
          </aside>
          <aside>
            <h5>Company Type</h5>
            <p>{user.type || "-"}</p>
          </aside>
          <aside>
            <h5>BIO</h5>
            <p>{user.bio || "-"}</p>
          </aside>
        </div>
      </section>
      {editCompanyProfile && (
        <CompanyProfileEditForm
          editCompanyProfile={editCompanyProfile}
          setEditCompanyProfile={setEditCompanyProfile}
          closeEditModal={closeEditModal}
          user={user}
        />
      )}
    </>
  );
};

export default CompanyProfile;
