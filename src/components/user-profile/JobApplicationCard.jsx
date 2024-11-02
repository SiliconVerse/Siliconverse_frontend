import React from "react";
import { PiClockClockwiseThin } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";
import { getTimeAgo } from "../../utils/util-functions";

export default function JobApplicationCard({
  title,
  _id: jobId,
  companyName,
  logo,
  description,
  jobType,
  updatedAt,
  jobPresence,
  status,
}) {
  const timeAgo = getTimeAgo(updatedAt);

  const imageUrl =
    logo == undefined || logo == "no logo" || !logo
      ? `https://dummyimage.com/300x300/000/fff.png?text=${encodeURIComponent(title?.slice(0, 1))}`
      : logo;

  const [_, setSearchParams] = useSearchParams();

  const viewJobDetails = (id) => {
    setSearchParams({ tab: "jobs", jobId: id });
  };
  return (
    <li className="space-y-3 border-[0.4px] border-[#FF9462] rounded-[20px] p-6">
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={companyName}
          className="w-12 rounded-full aspect-square md:hidden lg:inline"
        />

        <div>
          <h3 className="capitalize font-semibold text-lg max-sm:text-base">{title}</h3>
          <p className="flex items-center gap-1">
            <span className="capitalize font-light underline">By {companyName}</span>
          </p>
        </div>
      </div>

      <div className="text-sm flex justify-between items-center max-w-72">
        <p className="text-primaryColor">{status}</p>
        <p className="text-silicon-green capitalize">{jobPresence}</p>
        <p className="text-[#AF52DE] capitalize">{jobType}</p>
      </div>

      {/* time posted and read more */}
      <div className="flex items-center justify-between gap-1">
        <p className="flex items-center gap-2 text-sm truncate">
          <PiClockClockwiseThin size={30} />
          <span className="text-silicon-gray/70 truncate">Posted {timeAgo}</span>
        </p>

        <button
          className="rounded-lg text-white bg-primaryColor py-2 text-nowrap px-5 text-sm transition-all duration-200 ease-in-out hover:bg-opacity-75"
          onClick={() => viewJobDetails(jobId)}
        >
          View
        </button>
      </div>
    </li>
  );
}
