import React, { useEffect, useMemo, useState } from "react";
import { handleRequest } from "../requests/axios";
import { useAuth } from "../hooks/userAuth";
import Job from "./job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleRequest("get", "/jobs");
      setJobs(response);
    };

    fetchData();
  }, []);

  const jobPreference = useMemo(
    () => jobs.filter((job) => job.type == option),
    [option, jobs]
  );
  const allJobs = useMemo(
    () => (jobPreference.length ? jobPreference : jobs),
    [jobPreference]
  );

  return (
    <div className="mt-8">
      <h2 className="text-center font-bold text-xl">Job Listings</h2>
      <div className="search mb-7 px-5">
        <div className="input">
          <label
            htmlFor="jobType"
            className="font-semibold">
            Find Internship/Jobs:
          </label>
          <select
            name="jobType"
            id="jobType"
            onChange={(e) => setOption(e.target.value)}>
            <option value="internship">Internship</option>
            <option value="jobs">Jobs</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-6 p-5 lg:p-10">
        {allJobs &&
          allJobs.map((job, index) => (
            <Job
              job={job}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Jobs;
