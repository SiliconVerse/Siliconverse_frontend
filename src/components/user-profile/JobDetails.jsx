import { useEffect, useState } from "react";
import {
  handleRequest,
  handleSubmit,
} from "../../requests/axios";
import { useAuth } from "../../hooks/userAuth";
import { ClickButtonType } from "../submit-btn";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/util-functions";

export default function JobDetails({
  jobId,
  setSearchParams,
}) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    handleRequest("get", `jobs/${jobId}`).then((res) => {
      setJob(res);
    });
  }, []);

  // go back to jobs
  const handleCancel = () => {
    setSearchParams({ tab: "jobs" });
  };

  // apply for job
  const handleApply = () => {
    setLoading(true);
    handleSubmit("post", "/applications/create", {
      jobId,
      userId: user.uid,
    })
      .then((res) => {
        toast.success("Request was Successful");
      })
      .catch((err) => {
        toast.error(
          "Network Error, or you've already applied for this job"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!job) return <p className="animate-pulse">Loading</p>;

  return (
    <article className="flex flex-col gap-5 max-w-[57.875rem] min-h-[80vh] px-5 py-2">
      <div className="flex items-center gap-4">
        <img
          src={job.logo}
          alt={job.companyName}
          className="w-20 aspect-square rounded-sl"
        />
        <div>
          <h3 className="capitalize font-medium text-xl max-sm:text-lg">
            {job.jobTitle}
          </h3>
          <p className="flex items-center gap-2">
            <span className="truncate capitalize">
              {job.companyName}
            </span>
            {/* <span className="size-1 rounded-full bg-[#E85613]"></span> */}
            {/* <span className="truncate">{`${job.totalApplicants} applicant${
              job.totalApplicants > 1 ? "s" : ""
            }`}</span> */}
          </p>
        </div>
      </div>
      <div className="text-sm flex justify-start gap-3 items-center">
        <p className="bg-primaryColor text-white py-1 px-2 rounded-lg">
          {job.status}
        </p>
        <p className="bg-[#34C759] capitalize text-white py-1 px-2 rounded-lg">
          {job.jobPresence}
        </p>
        <p className="bg-[#AF52DE] capitalize text-white py-1 px-2 rounded-lg">
          {job.jobType}
        </p>
      </div>

      {/* Job description */}
      <p className="whitespace-pre-wrap">
        {job.description}
      </p>

      <p className="py-1 px-2 text-center font-semibold underline underline-offset-2 text-lg">
        {formatCurrency(job.salary.min)} {" - "}
        {formatCurrency(job.salary.max)}
      </p>

      <div className="flex items-center gap-2 w-full mt-auto">
        <button
          className="w-full rounded-lg bg-silcon-red py-2 px-5 capitalize text-white transition-all duration-200 ease-linear hover:bg-opacity-80"
          onClick={handleCancel}
        >
          Cancel
        </button>

        <ClickButtonType
          className="w-full rounded-lg bg-silicon-green py-2 px-5 capitalize text-white transition-all duration-200 ease-linear hover:bg-opacity-80"
          onclickFn={handleApply}
          text={"Apply"}
          isLoading={loading}
        />
      </div>
    </article>
  );
}
