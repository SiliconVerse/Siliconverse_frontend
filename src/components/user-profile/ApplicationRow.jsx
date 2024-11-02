import { IoIosInformationCircleOutline } from "react-icons/io";

import { getTimeAgo } from "../../utils/util-functions";

import { Icons } from "../Icons";
import { useEffect, useState } from "react";
import { handleRequest } from "../../requests/axios";

function ApplicationRow({ status, appliedAt, jobId, feedback, handleReadMore }) {
  const timeAgo = getTimeAgo(appliedAt);
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    handleRequest("get", `/jobs/${jobId._id}`)
      .then((res) => setJobDetails(res))
      .catch((err) => console.log(err));
  }, []);

  // pick status design
  const statusDisplay = {
    pending: (
      <p className="bg-primaryColor text-white px-2 py-1 rounded-lg flex items-center gap-2 min-w-min max-w-fit">
        <Icons.pendingAction />
        <span>Pending</span>
      </p>
    ),
    accepted: (
      <p className="bg-[#34A853] text-white px-2 py-1 rounded-lg min-w-min flex items-center gap-2">
        <Icons.documentCheck />
        <span>Accepted</span>
      </p>
    ),
    declined: (
      <p className="bg-[#ED1F24] text-white px-2 py-1 rounded-lg min-w-min flex items-center gap-2">
        <Icons.documentsDeclined />
        <span>Declined</span>
      </p>
    ),
  };
  if (!jobDetails) return <p className="animate-pulse">Loading</p>;
  const imageUrl =
    jobDetails.logo !== "no logo"
      ? jobDetails.logo
      : `https://dummyimage.com/300x300/000/fff.png?text=${encodeURIComponent(
          jobDetails.title?.slice(0, 1)
        )}`;

  return (
    <div className="flex gap-3 md:gap-5 lg:gap-7 min-w-[45rem] lg:grid lg:grid-cols-7 items-start">
      {/* Job description */}
      <div className="flex items-center md:items-start min-w-64 md:col-span-3 gap-3">
        <img
          src={imageUrl}
          alt={jobDetails.companyName}
          className="border-[0.5px] border-[#9A9A9A] rounded-full aspect-square w-10 md:w-16"
          width={100}
          height={100}
        />

        <div className="flex flex-col gap-1 max-w-52 md:max-w-[calc(100%-5rem)]">
          <h4 className="text-lg max-sm:text-lg truncate font-medium">{jobDetails.title}</h4>
          <p className="truncate">{jobDetails.categoryName}</p>
        </div>
      </div>

      {/* Job location and category(remote,hybrid,onsite) */}
      <div className="min-w-36 flex flex-col gap-1">
        <span className="text-lg font-medium">{jobDetails.companyName}</span>
        <span className="max-sm:truncate">{jobDetails.location}</span>
      </div>

      {/* Job type (full time/part time) */}
      <p className="min-w-20 text-center">{jobDetails.jobType}</p>

      {/* Timeline (date) */}
      <p className="min-w-20 truncate text-center">{timeAgo}</p>

      {/* Status */}
      <div className="flex items-center">
        <p className="text-sm">{statusDisplay[status]}</p>
        {status !== "pending" && (
          <IoIosInformationCircleOutline
            size={28}
            className="text-nowrap flex-shrink-0 text-primaryColor underline text-sm transition-all duration-200 ease-in-out hover:opacity-85 hover:text-black"
            onClick={() => handleReadMore(status, feedback.message)}
          />
        )}
      </div>
    </div>
  );
}

export default ApplicationRow;
