import { useAuth } from "../../hooks/userAuth";
import UserData from "../user-data";
import CompanyProfileForm from "../company-profile/companyProfileForm";
import SidebarPhoto from "../side-bar-photo";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <section>
      <div className="md:hidden aspect-square h-32 mx-auto relative mb-4 rounded-full">
        <SidebarPhoto key={"mobile"} />
      </div>
      <div className="mt-10">
        <h3 className="text-lg md:text-xl font-bold">My Information</h3>
        <p>
          Updating your information will offer you the most relevant content and
          conversations
        </p>
      </div>
      {/* User Initial Details */}
      <div>
        {user && <UserData />}
        <CompanyProfileForm />
      </div>
    </section>
  );
};
export default UserProfile;
