import React, { useEffect, useState } from "react";
import AddJob from "./AddJob.jsx";
import JobCard from "./JobCard.jsx";
import { ReactPortal } from "../../hooks/portal.jsx";
import { handleRequest } from "../../requests/axios.js";
import { useSearchParams } from "react-router-dom";

const CompanyPortfolio = () => {
  const [openJobModal, setOpenJobModal] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [_, setSearchParams] = useSearchParams();
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    handleRequest("get", "/jobs?sortBy=updatedAt&orderBy=asc")
      .then((res) => {
        setAllJobs(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [reload]);

  return (
    <section className="space-y-10">
      <button
        onClick={() => setOpenJob(!openJobModal)}
        className="text-white rounded-sm bg-silicon-green py-1 px-2"
        title="Add a new Job"
      >
        Post Job
      </button>

      {allJobs &&
        allJobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              job={job}
              reload={setReload}
              setState={setOpenJobModal}
              setSearch={setSearchParams}
            />
          );
        })}

      {!allJobs.length && isLoading && (
        <p className="animate-pulse">Loading...</p>
      )}
      {openJobModal && (
        <ReactPortal setState={setOpenJobModal}>
          <AddJob
            setState={setOpenJobModal}
            reload={setReload}
            setSearch={setSearchParams}
          />
        </ReactPortal>
      )}
    </section>
  );
};

export default CompanyPortfolio;
