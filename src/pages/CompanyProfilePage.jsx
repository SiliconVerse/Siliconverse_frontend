import { useLocation, useSearchParams } from 'react-router-dom';
import CompanyProfile from '../components/company-profile/companyProfile';
import CompanySettings from '../components/company-profile/CompanySettings';
import CompanyPortfolio from '../components/company-profile/CompanyPortfolio';
import CompanyHistory from '../components/company-profile/CompanyHistory';
import CompanyPreference from '../components/company-profile/CompanyPreference';

const CompanyProfilePage = () => {
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get('company');
  const location = useLocation();

  return (
    <div className='p-5'>
      {!location.search && location.pathname == '/company-profile' && (
        <CompanyProfile />
      )}

      {userParam == 'settings' && <CompanySettings />}
      {userParam == 'portfolio' && <CompanyPortfolio />}
      {userParam == 'history' && <CompanyHistory />}
      {userParam == 'preference' && <CompanyPreference />}
    </div>
  );
};
export default CompanyProfilePage;
