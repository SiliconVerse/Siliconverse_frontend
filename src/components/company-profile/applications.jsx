import { useState } from "react";
import genericProfileImg from "../../assets/Generic-Profile-Image.webp";

// import axiosInstance from '../../requests/axios';

// should use skillSet from utils?
const categories = [
  "product design",
  "data science",
  "frontend dev",
  "backend dev",
  "cyber security",
  "project management",
];

export default function Applications({
  handleViewApplicantDetails,
  jobId = null,
}) {
  const [applications, setApplications] = useState(tempApplicationsData); // if backend works remove tempdata
  // const [isLoading, setIsLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
  };

  // useEffect(() => {
  //   const fetchApplications = () => {
  //     axiosInstance
  //       .get(`/applications/${jobId}?job-title=${activeCategory}`)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  // .finally(()=>{
  // setIsLoading(false)
  // });
  //   };

  //   fetchApplications();
  // }, [activeCategory]);

  // if (jobId === null) {
  //   return (
  //     <ApplicationsWrapper>
  //       <p className='text-center'>No applications found for JobId</p>{' '}
  //     </ApplicationsWrapper>
  //   );
  // }

  if (!applications || applications.length === 0) {
    return (
      <ApplicationsWrapper>
        <p className="text-center">No applications yet</p>{" "}
      </ApplicationsWrapper>
    );
  }

  return (
    <ApplicationsWrapper>
      <ul className="flex items-center gap-2 overflow-x-auto scrollbar">
        {categories.map((category) => {
          const isActiveCategory = activeCategory === category;

          return (
            <li
              key={category}
              className="relative">
              <button
                onClick={() => handleCategoryClick(category)}
                className={`text-nowrap rounded-sl font-medium px-3 py-1 capitalize hover:bg-[#FFEFE8]/50 transition-all duration-200 ease-linear ${
                  isActiveCategory
                    ? "text-primaryColor bg-[#FFEFE8]"
                    : "text-gray-700"
                }`}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="overflow-x-scroll no-scrollbar">
        <table className="table-auto w-full max-w-screen-xl">
          <thead className="">
            <tr className="flex w-full gap-3 text-gray-700 font-normal text-base my-2 md:grid md:grid-cols-6">
              <th className="text-left min-w-36 md:col-span-2">Name</th>
              <th className="text-left min-w-20">Location</th>
              <th className="text-left min-w-20">Resume</th>
              <th className="text-left min-w-24">Preference</th>
              <th className="text-left min-w-20">Experience</th>
            </tr>
          </thead>
          <tbody className="">
            {applications.map((applicant) => (
              <tr
                key={applicant.applicantUserId}
                className="py-2 flex gap-3 md:grid md:grid-cols-6">
                <td className=" max-sm:min-w-36 max-sm:max-w-36 md:col-span-2 capitalize flex items-center gap-3">
                  <img
                    src={applicant.profilePicture}
                    alt={`${applicant.name} profile`}
                    width={20}
                    height={20}
                    className="w-5 rounded-full"
                  />
                  <button
                    to={``}
                    className="truncate bg-inherit border-none hover:underline hover:text-primaryColor/80 transition-all"
                    onClick={() =>
                      handleViewApplicantDetails(applicant.applicantUserId)
                    }
                    title="read more">
                    {applicant.name}
                  </button>
                </td>
                <td className="max-sm:min-w-20 max-sm:max-w-20 capitalize  truncate">
                  {applicant.location || "-"}
                </td>
                <td className="max-sm:min-w-20 max-sm:max-w-20 truncate">
                  <a
                    href={applicant.cvUrl}
                    className="text-primaryColor underline"
                    download>
                    Resume
                  </a>
                </td>
                <td className="max-sm:min-w-24 max-sm:max-w-24 truncate capitalize">
                  {applicant.preference || "-"}
                </td>
                <td className="max-sm:min-w-20 max-sm:max-w-20 truncate">
                  {applicant?.experience
                    ? `+${applicant.experience}year${
                        applicant.experience > 1 ? "s" : ""
                      }`
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ApplicationsWrapper>
  );
}

const ApplicationsWrapper = ({ children }) => {
  return (
    <section className="border min-h-[70vh] boxShadow p-5 overflow-hidden">
      <h1 className="font-bold text-primaryColor mb-4 text-2xl max-sm:text-lg">
        Applications
      </h1>
      {children}
    </section>
  );
};

// temporary data pending backend
const tempApplicationsData = [
  {
    jobId: "90",
    applicantUserId: "192",
    cvUrl: "",
    location: "kaduna",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "70",
    applicantUserId: "712",
    cvUrl: "",
    location: "Port Harcourt",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "60",
    applicantUserId: "152",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 1,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "23",
    applicantUserId: "80",
    cvUrl: "",
    location: "",
    preference: "",
    name: "Paulina Okoye",
    experience: "",
    profilePicture: genericProfileImg,
  },
  {
    jobId: "4",
    applicantUserId: "412",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 4,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "11",
    applicantUserId: "32",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "100",
    applicantUserId: "123",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "10",
    applicantUserId: "312",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "30",
    applicantUserId: "122",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
  {
    jobId: "20",
    applicantUserId: "212",
    cvUrl: "",
    location: "Lagos",
    preference: "remote",
    name: "John Doe",
    experience: 2,
    profilePicture: genericProfileImg,
  },
];
