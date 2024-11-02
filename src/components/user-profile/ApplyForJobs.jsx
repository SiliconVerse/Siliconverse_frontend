import { useSearchParams } from "react-router-dom";
import JobDetails from "./JobDetails";
import { useEffect, useState } from "react";
import { handleRequest } from "../../requests/axios";
import JobApplicationCard from "./JobApplicationCard";
import { useAuth } from "../../hooks/userAuth";

export default function ApplyForJobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { user } = useAuth();
  const [qualified, setQualified] = useState(!!user.resume);

  useEffect(() => {
    if (!qualified) return;
    setLoading(true);
    handleRequest("get", `/jobs?sortBy=updatedAt&orderBy=desc&page=${page}`)
      .then((res) => {
        setAllJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!qualified) {
    return (
      <p className="flex items-center justify-center h-full text-base lg:text-xl">
        Please complete your profile before applying for Jobs!
      </p>
    );
  }

  const jobId = searchParams.get("jobId");

  if (jobId) {
    return <JobDetails jobId={jobId} setSearchParams={setSearchParams} />;
  }

  return (
    <section className="max-w-screen-xl px-5 py-2">
      <h2 className="font-semibold text-2xl max-sm:text-xl">Find your desired job here!</h2>
      <p className="font-medium text-[#4A4A4A]/70 mt-1 mb-5 ">
        Explore our newest job opportunities to discover and apply for the top positions available
        today!
      </p>

      {loading && <p className="animate-pulse text-red-400 text-lg">Loading...</p>}
      <ul className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allJobs &&
          allJobs.length > 0 &&
          allJobs.map((job) => <JobApplicationCard key={job._id} {...job} />)}

        {!loading && !allJobs.length && <p>No Job available yet!</p>}
      </ul>
    </section>
  );
}
