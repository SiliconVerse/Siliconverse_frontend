import { useLocation, useSearchParams } from "react-router-dom";
import UserProfile from "../components/user-profile/userProfile";
import UserSettings from "../components/user-profile/UserSettings";
import UserProjects from "../components/user-profile/UserProjects";
import UserPortfolio from "../components/user-profile/UserPortfolio";
import UserHistory from "../components/user-profile/UserHistory";
import UserPreferences from "../components/user-profile/UserPreferences";

const UserProfilePage = () => {
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get("user");
  const location = useLocation();

  return (
    <div className="p-4">
      {!location.search && location.pathname == "/talent-profile" && (
        <UserProfile />
      )}

      {userParam == "settings" && <UserSettings />}
      {userParam == "projects" && <UserProjects />}
      {userParam == "portfolio" && <UserPortfolio />}
      {userParam == "history" && <UserHistory />}
      {userParam == "preference" && <UserPreferences />}
    </div>
  );
};
export default UserProfilePage;
