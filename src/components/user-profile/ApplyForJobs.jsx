import { PiClockClockwiseThin } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';
import { jobs } from '../../utils/jobs';
import { getTimeAgo } from '../../utils/util-functions';
import JobDetails from './JobDetails';

export default function ApplyForJobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const jobId = searchParams.get('jobId');

  if (jobId) {
    return <JobDetails jobId={jobId} setSearchParams={setSearchParams} />;
  }

  return (
    <section className='max-w-screen-xl px-5 py-2'>
      <h2 className='font-semibold text-2xl max-sm:text-xl'>
        Find your desired job here!
      </h2>
      <p className='font-medium text-[#4A4A4A]/70 mt-1 mb-5 '>
        Explore our newest job opportunities to discover and apply for the top
        positions available today!
      </p>

      <ul className='space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.jobId} {...job} />)
        ) : (
          <li>No jobs available yet</li>
        )}
      </ul>
    </section>
  );
}

function JobCard({
  jobTitle,
  jobId,
  companyName,
  companyLogo,
  description,
  datePosted,
  category,
  availability,
  totalApplicants,
  level,
}) {
  const timeAgo = getTimeAgo(datePosted);

  const [_, setSearchParams] = useSearchParams();

  const viewJobDetails = (id) => {
    setSearchParams({ tab: 'jobs', jobId: id });
  };
  return (
    <li className='space-y-3 border-[0.4px] border-[#FF9462] rounded-[20px] p-6'>
      <div className='flex items-center gap-4'>
        <img
          src={companyLogo}
          alt={companyName}
          width={64}
          height={64}
          className='w-10 rounded-sl '
        />
        <div>
          <h3 className='capitalize font-medium text-xl max-sm:text-lg'>
            {jobTitle}
          </h3>
          <p className='flex items-center gap-1'>
            <span className='truncate capitalize'>{companyName}</span>
            <span className='size-1 rounded-full bg-[#E85613]'></span>
            <span className='truncate'>{`${totalApplicants} applicant${
              totalApplicants > 1 ? 's' : ''
            }`}</span>
          </p>
        </div>
      </div>
      <div className='text-sm flex justify-between items-center max-w-72'>
        <p className='text-primaryColor'>{availability}</p>
        <p className='text-[#34C759] capitalize'>{category}</p>
        <p className='text-[#AF52DE] capitalize'>{level}</p>
      </div>

      {/* Job description */}
      <p className='line-clamp-[8]'>{description}</p>

      {/* time posted and read more */}
      <div className='flex items-center justify-between gap-1'>
        <p className='flex items-center gap-2 text-sm truncate'>
          <PiClockClockwiseThin size={30} />
          <span className='text-[#4A4A4A]/70 truncate'>Posted {timeAgo}</span>
        </p>

        <button
          className='rounded-lg text-white bg-primaryColor py-3 text-nowrap px-5 text-sm transition-all duration-200 ease-in-out hover:bg-opacity-75'
          onClick={() => viewJobDetails(jobId)}
        >
          Read more
        </button>
      </div>
    </li>
  );
}
