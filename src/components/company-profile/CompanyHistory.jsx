import { useSearchParams } from 'react-router-dom';
import ApplicantsDetails from './applicants-details';
import Applications from './applications';

export default function CompanyHistory() {
  const [searchParams, setSearchParams] = useSearchParams();

  const applicantsId = searchParams.get('id');

  const viewApplicantsDetails = (id) => {
    setSearchParams({ tab: 'applications', id });
  };

  return (
    <>
      {applicantsId ? (
        <ApplicantsDetails id={applicantsId} />
      ) : (
        <Applications handleViewApplicantDetails={viewApplicantsDetails} />
      )}
    </>
  );
}
