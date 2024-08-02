import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleRequest } from "../requests/axios";
import { useAuth } from "../hooks/userAuth";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleRequest("get", "/jobs");
      console.log(response);
    };

    fetchData();
  }, []);

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs">
      <div className="search mb-7">
        <div className="input">
          <label style={{ fontWeight: "bolder", marginRight: "10px" }}>
            {" "}
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
      </div>
      <div className="job">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="flex text-center">
            {/* Assuming employer_logo is a URL to an image */}
            <img
              src={job.employer_logo}
              alt={job.company}
              style={{ width: "150px", height: "100px", borderRadius: "50px" }}
            />
            <p className="mt-2 mb-1 font-semibold">{job.employer_name}</p>
            <p>{job.job_title}</p>
            {/* Render different links based on job data */}
            <button>
              {job.job_apply_link ? (
                <Link to={job.job_apply_link}>Apply to Job</Link>
              ) : (
                <Link to={job.job_google_link}>Search on Google</Link>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
