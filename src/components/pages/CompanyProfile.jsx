import { useLocation, useSearchParams } from 'react-router-dom';

const CompanyProfile = () => {
  const [searchParams] = useSearchParams();
  const userParam = searchParams.get('user');
  const location = useLocation();

  return (
    <div>
      {!location.search && location.pathname == '/profile' && (
        <h1>Company Profile Page</h1>
      )}

      {userParam == 'preference' && <p>preference</p>}
      {userParam == 'settings' && <p>settings</p>}
      {userParam == 'history' && <p>history</p>}
      {userParam == 'projects' && <p>projects</p>}
    </div>
  );
};
export default CompanyProfile;
