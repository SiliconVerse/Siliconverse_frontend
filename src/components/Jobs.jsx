import React, { useEffect, useMemo, useState } from "react";
import { handleRequest } from "../requests/axios";
import Job from "./job";
// import Home from "../pages/Home";
import { Element, Link as scroll } from "react-scroll";
import { auth } from "../hooks/auth/firebase";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleRequest(
        "get",
        "/jobs?sortBy=updatedAt&orderBy=desc"
      );
      if (response) {
        setJobs(response.data);
      }
    };

    fetchData();
    console.log(auth.currentUser);
  }, []);

  const jobPreference = useMemo(
    () => jobs.filter((job) => job.jobType == option),
    [option, jobs]
  );

  const allJobs = useMemo(
    () => (jobPreference.length ? jobPreference : jobs),
    [jobPreference]
  );

  return (
    <div className="mt-8">
      <Element name="Job-List">
        <h2 className="text-center font-bold text-xl mb-4 ">
          Job Listings
        </h2>
        <div className="search mb-7 px-5">
          <div className="input">
            <label
              htmlFor="jobType"
              className="font-semibold mr-4"
            >
              Find Internship/Jobs:
            </label>
            <select
              name="jobType"
              id="jobType"
              className="px-3 py-1"
              onChange={(e) => setOption(e.target.value)}
            >
              {JOBTYPE.map((type, idx) => (
                <option key={idx + 1} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-6 p-5 lg:p-10">
          {allJobs &&
            allJobs.map((job, index) => (
              <Job job={job} key={index} />
            ))}
        </div>
      </Element>
    </div>
  );
};

export default Jobs;

const JOBTYPE = [
  "Internship",
  "Full Time",
  "Part Time",
  "Contract",
];
