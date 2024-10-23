import { getTimeAgo } from "../utils/util-functions";

function Job({ job }) {
  return (
    <aside className="flex items-center w-full p-2 rounded-md boxShadow overflow-hidden">
      <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] bg-gray-900 rounded-full overflow-hidden border">
        <img
          src={job.logo}
          alt={job.logo}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-3 space-y-2 text-sm lg:text-base">
        <p className="font-semibold">{job.title}</p>
        <p>{job.companyName}</p>
        <div className="flex rounded-md gap-1 bg-background-color overflow-hidden">
          <p className="p-1 bg-primaryColor text-white">{job.jobPresence}</p>
          <p className="p-1 text-primaryColor">{job.location}</p>
        </div>
        <p className="font-semibold">{job.jobType}{" "}
          <span
            className={`rounded-2xl px-2 py-1 text-sm font-normal text-white capitalize ml-2 ${
              job.status == "open" ? "bg-silicon-green" : "bg-silcon-red"
            }`}
          >
            {job.status}
          </span></p>
        <p>
          Posted {getTimeAgo(job.updatedAt)}
        </p>
      </div>
    </aside>
  );
}

export default Job;
