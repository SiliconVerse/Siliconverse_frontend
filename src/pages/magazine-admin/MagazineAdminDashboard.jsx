import DashboardFirstSection from '../../components/magazine-admin-dashboard/dashboard-first-section';
import DashboardSecondSection from '../../components/magazine-admin-dashboard/dashboard-second-section';
import DashboardThirdSection from '../../components/magazine-admin-dashboard/dashboard-third-section';
import { keywords, subscribers, tempUploads } from '../../utils/temp-data';

export default function MagazineAdminDashboard() {
  const data = {
    totalVisits: 600_000,
    articlesPublished: 123,
    visitors: 45_000,
    totalComments: 450_000,
  };

  return (
    <>
      <DashboardFirstSection data={data} />
      <DashboardSecondSection subscribers={subscribers} />
      <DashboardThirdSection keywords={keywords} allUploads={tempUploads} />
    </>
  );
}
