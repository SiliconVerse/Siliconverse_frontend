import React, { useEffect, useState } from "react";
import ReactTimeago from "react-timeago";
import { handleRequest } from "../requests/axios";

function Job({ job }) {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await handleRequest("get", "/companies/" + job.company);
      setCompany(response);
    };

    fetchData();
  }, []);
  return (
    <aside className="flex items-center w-full p-2 rounded-md boxShadow overflow-hidden">
      <div className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] bg-gray-900 rounded-full overflow-hidden border">
        <img
          src={job.logo}
          alt={job.logo}
          className="h-full w-full object-cover "
        />
      </div>

      <div className="ml-3 space-y-2 text-sm lg:text-base">
        <p className="font-semibold">{job.title}</p>
        <p>{"Company Name"}</p>
        <div className="flex rounded-md gap-1 bg-background-color">
          <p className="rounded-md p-1 bg-primaryColor text-white">
            {job.jobPresence}
          </p>
          <p className="p-1 text-primaryColor">{job.location}</p>
        </div>
        <p className="underline underline-offset-2">{job.jobType}</p>
        <ReactTimeago
          date={new Date(job.updatedAt)}
          className="text-sm block"
        />
      </div>
    </aside>
  );
}

export default Job;
