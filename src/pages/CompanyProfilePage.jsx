import { useLocation, useSearchParams } from 'react-router-dom';
import CompanyProfile from '../components/company-profile/companyProfile';
import { Settings } from 'lucide-react';

const CompanyProfilePage = () => {
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get('user');
  const location = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '20px',
      }}>
      {!location.search && location.pathname == '/profile' && (
        <CompanyProfile />
      )}

      {userParam == 'preference' && <Settings />}
      {userParam == 'settings' && <Settings />}
      {userParam == 'history' && <p>history</p>}
      {userParam == 'projects' && <p>projects</p>}
    </div>
  );
};
export default CompanyProfilePage;
