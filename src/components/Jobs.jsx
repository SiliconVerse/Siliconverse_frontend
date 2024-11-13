import React, { useEffect, useMemo, useState } from "react";
import { handleRequest } from "../requests/axios";
import Job from "./job";
import { Element, Link as scroll } from "react-scroll";
import Pagination from "./Pagination";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [option, setOption] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("fetching");
    const fetchData = async () => {
      const response = await handleRequest(
        "get",
        `/jobs?sortBy=updatedAt&orderBy=desc&page=${page}`
      );
      if (response) {
        setJobs(response.data);
      }
    };

    fetchData();
  }, [page]);

  const jobPreference = useMemo(() => jobs.filter((job) => job.jobType == option), [option, jobs]);

  const allJobs = useMemo(() => (jobPreference.length ? jobPreference : jobs), [jobPreference]);

  return (
    <div className="my-8">
      <Element name="Job-List">
        <h2 className="text-center font-bold text-xl mb-4 ">Job Listings</h2>
        <div className="search mb-7 px-5">
          <div className="input">
            <label htmlFor="jobType" className="font-semibold mr-4">
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
          {jobs && jobPreference.map((job, index) => <Job job={job} key={index} />)}
        </div>
      </Element>

      <Pagination pageState={setPage} currPage={page} hasNext={true} hasPrev={true} />
    </div>
  );
};

export default Jobs;

const JOBTYPE = ["Internship", "Full Time", "Part Time", "Contract"];
