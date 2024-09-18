// import axiosInstance from '../../requests/axios';

import { Eye, FileText } from 'lucide-react';
import { useState } from 'react';
import genericProfileImg from '../../assets/Generic-Profile-Image.webp';
import { formatDate } from '../../utils/util-functions';

export default function ApplicantsDetails({ id }) {
  const [applicant, setApplicant] = useState(tempApplicantsDetails); // remove temp if backend works

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchApplicantDetails = () => {
  //     axiosInstance
  //       .get(``)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   fetchApplicantDetails();
  // }, []);
  return (
    <section className='min-h-[70vh] overflow-x-hidden mb-5 max-w-screen-xl'>
      <div className='border boxShadow overflow-hidden rounded-sl'>
        <div className='max-sm:min-h-36 min-h-[222px] border bg-primaryColor rounded-b-sl flex items-center md:gap-12 gap-24 max-sm:px-5 px-9 max-sm:gap-5'>
          <img
            src={applicant.profilePicture}
            alt={applicant.name}
            width={187}
            height={187}
            className='rounded-full max-sm:w-24 md:w-32 w-44'
          />

          <p className='font-bold max-sm:text-2xl md:text-4xl text-white text-5xl'>
            SILICONVERSE
          </p>
        </div>
        <div className='px-9 max-sm:px-3 py-5 space-y-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 max-sm:gap-2 gap-4'>
            <ApplicantDetailField
              title={'Full name'}
              value={`${applicant.firstName} ${applicant.lastname}`}
              valueStyles={'capitalize text-wrap text-balance'}
            />
            <ApplicantDetailField
              title={'Degree type'}
              value={applicant.degreeType}
              valueStyles={'capitalize'}
            />
            <ApplicantDetailField
              title={'Internship status'}
              value={applicant.status}
              valueStyles={'capitalize'}
            />
            <ApplicantDetailField
              title={'Phone number'}
              value={applicant.phoneNumber}
            />
          </div>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-2 md:gap-4'>
            <ApplicantDetailField
              title={'Email'}
              value={applicant.email}
              containerStyles='col-span-2'
            />
            <ApplicantDetailField
              title={'Location'}
              value={`${applicant.state}(${applicant.country})`}
            />
            <ApplicantDetailField
              title={'University or college'}
              value={applicant.college}
            />
          </div>
          <ApplicantDetailField
            title={'Joined Siliconverse'}
            value={formatDate(applicant.dateJoined)}
            valueStyles={''}
          />
        </div>
      </div>
      <div className='border boxShadow  rounded-sl mt-9 max-sm:px-5 px-10 py-4'>
        <h3 className='font-bold text-lg md:text-xl'>Resume</h3>

        <div className='lg:flex md:gap-10 w-full'>
          <div className='w-full'>
            <p className='text-[#34A853] flex items-center gap-3'>
              <Eye size={20} />
              <span>Visible to Organizations</span>
            </p>
            <div className='border rounded-sl py-5 px-3 flex max-sm:flex-col md:items-center md:justify-between gap-4 mt-2'>
              <div>
                <div className='flex items-center gap-3'>
                  <FileText size={32} />
                  <h5 className='text-2xl font-bold max-sm:text-lg'>{`${applicant.firstName} Resume`}</h5>
                </div>
                <p>{`Date Added: ${formatDate(
                  applicant.resume.dateUpdated
                )}`}</p>
              </div>
              <button className='bg-primaryColor text-white rounded-sl font-bold px-14 py-2 self-center transition-all hover:opacity-75'>
                View
              </button>
            </div>
          </div>
          <div className='flex items-center gap-2 mt-5 lg:mt-0 lg:flex-col md:justify-between'>
            <button className='rounded-sl bg-[#009951] text-white font-bold px-12 py-2 inline-block h-fit max-sm:w-full max-sm:px-0'>
              Accept
            </button>
            <button className='rounded-sl bg-[#FF0505] text-white font-bold max-sm:w-full px-12 py-2 h-fit inline-block max-sm:px-0'>
              Decline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ApplicantDetailField = ({
  title,
  value,
  containerStyles = '',
  valueStyles = '',
}) => {
  return (
    <div className={`flex flex-col justify-start gap-1 ${containerStyles}`}>
      <p className={`text-xl max-sm:text-lg text-nowrap truncate`}>{title}</p>
      <p className={`text-primaryColor md:text-lg truncate ${valueStyles}`}>
        {value}
      </p>
    </div>
  );
};

const tempApplicantsDetails = {
  userId: 102,
  firstName: 'Mary',
  lastname: 'Doe',
  degreeType: 'Bachelors',
  status: 'pending',
  phoneNumber: '0909000000',
  email: 'marydoe@example.com',
  state: 'Kaduna',
  country: 'Nigeria',
  college: 'silicon university',
  dateJoined: '04-02-2024',
  resume: {
    link: '',
    dateCreated: '',
    dateUpdated: '05-06-2024',
  },
  profilePicture: genericProfileImg,
};
