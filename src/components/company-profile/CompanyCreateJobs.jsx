import React, { useEffect, useState } from "react";
import AddJob from "./AddJob.jsx";
import JobCard from "./JobCard.jsx";
import { ReactPortal } from "../../hooks/portal.jsx";
import { handleRequest } from "../../requests/axios.js";

const CompanyPortfolio = () => {
  const [openJob, setOpenJob] = useState(false);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    handleRequest("get", "/jobs")
      .then((res) => {
        console.log(res.data)
        setAllJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="space-y-10">
      <button
        onClick={() => setOpenJob(!openJob)}
        className="text-white rounded-sm bg-silicon-green py-1 px-2"
        title="Add a new Job"
      >
        Post Job
      </button>
      
      {allJobs &&
        allJobs.map((job) => {
          return <JobCard job={job} />;
        })}

        {!allJobs.length && <p className="animate-pulse">Loading...</p>}
      {openJob && (
        <ReactPortal setState={setOpenJob}>
          <AddJob setState={setOpenJob} />
        </ReactPortal>
      )}
    </section>
  );
};

export default CompanyPortfolio;
