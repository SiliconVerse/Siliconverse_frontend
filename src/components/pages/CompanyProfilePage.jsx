import { useLocation, useSearchParams } from 'react-router-dom';
import CompanyProfile from '../company-profile/companyProfile';

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
      }}
    >
      {!location.search && location.pathname == '/profile' && (
        <CompanyProfile />
      )}

      {userParam == 'preference' && <p>preference</p>}
      {userParam == 'settings' && <p>settings</p>}
      {userParam == 'history' && <p>history</p>}
      {userParam == 'projects' && <p>projects</p>}
    </div>
  );
};
export default CompanyProfilePage;
