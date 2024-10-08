import { useSearchParams } from 'react-router-dom';
import CompanyHistory from '../components/company-profile/CompanyHistory';
import CompanyCreateJobs from '../components/company-profile/CompanyCreateJobs';
import CompanyPreference from '../components/company-profile/CompanyPreference';
import CompanyProfile from '../components/company-profile/companyProfile';
import CompanySettings from '../components/company-profile/CompanySettings';

const CompanyProfilePage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  const tabs = {
    settings: <CompanySettings />,
    create: <CompanyCreateJobs />,
    applications: <CompanyHistory />,
    preference: <CompanyPreference />,
  };

  return <div className='p-5'>{tabs[tab] || <CompanyProfile />}</div>;
};
export default CompanyProfilePage;
