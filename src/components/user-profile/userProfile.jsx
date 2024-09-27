import { useAuth } from "../../hooks/userAuth";
import UserData from "../user-data";
import CompanyProfileForm from "../company-profile/companyProfileForm";
import SidebarPhoto from "../side-bar-photo";
import './userProfile.css'

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <main className="profile__main">

      <section className='profile_section_one'>
        <div className="md:hidden aspect-square h-32 mx-auto relative mb-4 rounded-full group">
          <SidebarPhoto key={"mobile"} />
        </div>
        <div className="mt-10">
          <h3 className="text-lg md:text-xl font-bold">My Information</h3>
          <p className='profile_sub_txt'>
            Updating your information will offer you the most relevant content and
            conversations
          </p>
        </div> 
          {/* { User Initial Details } */}
          {user && <UserData />}
      </section>

      <section className='profile_section_two'>
        <div>
          <CompanyProfileForm />
        </div>
      </section>
    </main>
  );
};
export default UserProfile;
