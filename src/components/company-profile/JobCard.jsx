import Profile from "../../assets/Rectangle 101.svg";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { getTimeAgo } from "../../utils/util-functions";
import { useAuth } from "../../hooks/userAuth";
import { handleSubmit } from "../../requests/axios";
import { toast } from "react-toastify";

function JobCard({ job, setState, setSearch, reload }) {
  const { user } = useAuth();

  const handleEdit = () => {
    setSearch({ tab: "create", jobId: job._id });
    setState(true);
  };
  const handleDelete = () => {
    handleSubmit("delete", `/jobs/${job._id}/delete`)
      .then((res) => {
        toast.info("Job has been deleted");
      })
      .finally(() => reload((prev) => !prev));
  };

  return (
    <section className="flex gap-8">
      <section className="p-3 rounded-md bg-white boxShadow w-full md:max-w-screen-sm flex gap-3 items-center lg:items-start">
        <div className="h-32 w-32 lg:h-40 lg:w-40 items-center justify-center hidden sm:flex rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={job.logo || Profile}
            alt="company"
            className="object-fit object-cover h-full w-full"
          />
        </div>
        <aside className="space-y-3 w-full">
          <div className="flex justify-between gap-5">
            <h3 className="text-xl sm:text-lg capitalize font-bold text-nowrap flex-shrink-0">
              {user.organizationName}
              <span className="hidden sm:inline-flex ml-3 lg:ml-5 text-sm p-1 rounded-lg bg-primaryColor text-white font-normal">
                Engineering
              </span>
            </h3>
            <div className="flex gap-2">
              <AiOutlineDelete
                size={30}
                className="text-red-500 cursor-pointer"
                title="Delete"
                onClick={handleDelete}
              />
              <TbEdit
                size={30}
                className="text-orange-500 cursor-pointer"
                title="Edit"
                onClick={handleEdit}
              />
            </div>
          </div>
          <p className="text-lg font-semibold capitalize">{job.title}</p>

          <div>
            <aside className="flex items-center gap-3 gap-y-1 justify-center max-w-sm capitalize flex-wrap ">
              <p className="py-1 px-2 text-sm sm:text-xs rounded-xl text-white bg-silicon-gray">
                {job.jobType}
              </p>
              <p className="py-1 px-2 text-sm sm:text-xs rounded-xl text-white bg-silicon-gray">
                {job.jobPresence}
              </p>
              <p className="py-1 px-2 text-sm sm:text-xs rounded-xl text-white bg-silicon-gray">
                {job.location}
              </p>
              <p
                className={`py-1 px-2 text-sm sm:text-xs rounded-xl text-white + ${
                  job.status == "open" ? "bg-silicon-green" : "bg-silcon-red"
                }`}
              >
                {job.status}
              </p>
            </aside>
          </div>
          <p className="py-1 px-2 text-center font-semibold underline underline-offset-2 text-lg">
            {job.salary.min} - {job.salary.max}
          </p>
          <div className="flex justify-between text-lg flex-shrink-0">
            <p className=" font-roboto flex flex-nowrap text-sm md:text-base">
              {getTimeAgo(job.createdAt)}
            </p>
            <p className="ml-10 items-end flex-nowrap text-sm md:text-base lg:hidden">
              28 engagement
            </p>
          </div>
        </aside>
      </section>
      {/* Job Engagement */}
      <div className="p-5 bg-white boxShadow min-w-48 text-center items-center flex-col rounded-md hidden lg:flex justify-evenly">
        <p className="text-xl font-bold">24</p>
        <p>Post Engagement</p>

        <TbBrandGoogleAnalytics className="text-primaryColor" size={70} />
      </div>
    </section>
  );
}

export default JobCard;
