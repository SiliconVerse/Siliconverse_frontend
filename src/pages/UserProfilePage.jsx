import { useSearchParams } from 'react-router-dom';
import ApplyForJobs from '../components/user-profile/ApplyForJobs';
import UserHistory from '../components/user-profile/UserHistory';
import UserPreferences from '../components/user-profile/UserPreferences';
import UserProfile from '../components/user-profile/userProfile';
import UserSettings from '../components/user-profile/UserSettings';

const UserProfilePage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  const tabs = {
    settings: <UserSettings />,
    history: <UserHistory />,
    preference: <UserPreferences />,
    jobs: <ApplyForJobs />,
  };

  return <div className='p-4'>{tabs[tab] || <UserProfile />}</div>;
};
export default UserProfilePage;
