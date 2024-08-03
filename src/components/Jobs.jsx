import React, { useEffect, useState } from "react";
import { handleRequest } from "../requests/axios";
import { useAuth } from "../hooks/userAuth";
import Job from "./job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleRequest("get", "/jobs");
      setJobs(response);
    };

    fetchData();
  }, []);

  return (
    <div className="jobs">
      {/* <div className="search mb-7">
        <div className="input">
          <label style={{ fontWeight: "bolder", marginRight: "10px" }}>
            Find Internship/Jobs:
          </label>
          <select
            name=""
            id="">
            <option value="Internship">Internship</option>
            <option value="Jobs">Jobs</option>
          </select>
        </div>
        <div className="input">
          <div className="box">
            <input
              type="search"
              className="boxes"
              placeholder="Search Jobs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div> */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-6 p-5 lg:p-10">
        {jobs &&
          jobs.map((job, index) => (
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
