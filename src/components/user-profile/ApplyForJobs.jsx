import { PiClockClockwiseThin } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";
import { getTimeAgo } from "../../utils/util-functions";
import JobDetails from "./JobDetails";
import { useEffect, useState } from "react";
import { handleRequest } from "../../requests/axios";

export default function ApplyForJobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    handleRequest("get", "/jobs?sortBy=updatedAt&orderBy=desc")
      .then((res) => {
        setAllJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const jobId = searchParams.get("jobId");

  if (jobId) {
    return <JobDetails jobId={jobId} setSearchParams={setSearchParams} />;
  }

  return (
    <section className="max-w-screen-xl px-5 py-2">
      <h2 className="font-semibold text-2xl max-sm:text-xl">
        Find your desired job here!
      </h2>
      <p className="font-medium text-[#4A4A4A]/70 mt-1 mb-5 ">
        Explore our newest job opportunities to discover and apply for the top
        positions available today!
      </p>

      <ul className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allJobs.length > 0 ? (
          allJobs.map((job) => <JobCard key={job._id} {...job} />)
        ) : (
          <li>No jobs available yet</li>
        )}
      </ul>
    </section>
  );
}

function JobCard({
  title,
  _id,
  companyName,
  logo,
  description,
  jobType,
  updatedAt,
  category,
  status,
}) {
  const timeAgo = getTimeAgo(updatedAt);

  // useEffect(()=>{
  //   handleRequest('get', `jobs/${_id}`).then(res=>console.log(res.data))
  // },[])

  const [_, setSearchParams] = useSearchParams();

  const viewJobDetails = (id) => {
    setSearchParams({ tab: "jobs", jobId: id });
  };
  return (
    <li className="space-y-3 border-[0.4px] border-[#FF9462] rounded-[20px] p-6">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={companyName}
          width={64}
          height={64}
          className="w-10 rounded-sl "
        />
        <div>
          <h3 className="capitalize font-semibold text-lg max-sm:text-base">
            {title}
          </h3>
          <p className="flex items-center gap-1">
            <span className="capitalize font-light underline">By {companyName}</span>
            {/* <span className="size-1 rounded-full bg-[#E85613]"></span> */}
            {/* <span className="truncate">{`${totalApplicants} applicant${
              totalApplicants > 1 ? "s" : ""
            }`}</span> */}
          </p>
        </div>
      </div>
      <div className="text-sm flex justify-between items-center max-w-72">
        <p className="text-primaryColor">{status}</p>
        <p className="text-[#34C759] capitalize">{category && category.slice(15)}</p>
        <p className="text-[#AF52DE] capitalize">{jobType}</p>
      </div>

      {/* Job description */}
      <p className="line-clamp-2 max-h-14">{description}</p>

      {/* time posted and read more */}
      <div className="flex items-center justify-between gap-1">
        <p className="flex items-center gap-2 text-sm truncate">
          <PiClockClockwiseThin size={30} />
          <span className="text-[#4A4A4A]/70 truncate">Posted {timeAgo}</span>
        </p>

        <button
          className="rounded-lg text-white bg-primaryColor py-2 text-nowrap px-5 text-sm transition-all duration-200 ease-in-out hover:bg-opacity-75"
          onClick={() => viewJobDetails(_id)}
        >
          Read more
        </button>
      </div>
    </li>
  );
}
