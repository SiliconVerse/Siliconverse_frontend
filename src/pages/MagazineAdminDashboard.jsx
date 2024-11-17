import { Navigate, useSearchParams } from 'react-router-dom';
import ContentManagement from '../components/magazine-admin-dashboard/content-management';
import MagazineAdminSettings from '../components/magazine-admin-dashboard/magazine-admin-settings';
import MagazineDashboard from '../components/magazine-admin-dashboard/magazine-dashboard';
import MagazineAdminNotification from '../components/magazine-admin-dashboard/magazine-notification';

export default function MagazineAdminDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get('tab');

  const tabs = {
    'content-management': (
      <ContentManagement
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    ),
    notification: <MagazineAdminNotification />,
    dashboard: <MagazineDashboard />,
    settings: <MagazineAdminSettings />,
    advertising: '',
    'message-center': '',
  };

  if (!tab) {
    return <Navigate to={'?tab=content-management'} />;
  }

  return <main className='my-10 mx-5'>{tabs[tab]}</main>;
}
