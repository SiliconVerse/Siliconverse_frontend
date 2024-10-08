import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useAuth } from "../../hooks/userAuth";
import { handleRequest, handleSubmit } from "../../requests/axios";
import { JOBPRESENCE, JOBTYPE } from "../../utils/jobs";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

function AddJob({ setState, reload }) {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    companyId: user.uid,
    jobType: JOBTYPE[1],
    jobPresence: JOBPRESENCE[0],
    logo: user.profilePicture,
    location: "",
    salary: { min: "", max: "" },
    status: "open", //? Default status can be set to "open"
  });

  // ?Fetcn all categories
  useEffect(() => {
    handleRequest("get", "/defaults/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  // Fetch Job to edit
  useEffect(() => {
    if (jobId) {
      handleRequest("get", "/jobs/" + jobId).then((res) => {
        setFormData({
          ...formData,
          title: res.title,
          description: res.description,
          jobType: res.jobType,
          jobPresence: res.jobPresence,
          location: res.location,
          salary: res.salary,
          status: res.status,
          logo: res.logo,
        });
      });
    }
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //? Handle nested state for salary
    if (name === "min" || name === "max") {
      setFormData((prev) => ({
        ...prev,
        salary: { ...prev.salary, [name]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmitData = (e) => {
    const url = !jobId ? "/jobs/create" : `/jobs/${jobId}/update`;
    const method = !jobId ? "post" : "put";
    e.preventDefault();
    handleSubmit(method, url, formData)
      .then(() => {
        toast.success("Job created Successfully");
        setState(false);
      })
      .catch(() => {
        toast.error("Failed to upload, kinldy try again later.");
      })
      .finally(() => {
        reload((prev) => !prev);
        setSearchParams({ tab: "create" });
      });
  };

  return (
    <section className="bg-white w-[90%] flex items-center justify-center flex-col relative py-4 md:py-10 max-w-3xl">
      <MdCancel
        className="text-red-500 absolute top-4 right-4 cursor-pointer"
        size={30}
        onClick={() => setState(false)}
      />
      <form onSubmit={handleSubmitData} className="space-y-3 w-full px-4">
        <aside className="flex flex-wrap gap-5">
          <div className="flex gap-2">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              className=""
              id="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="closed">Closed</option>
              <option value="open">Open</option>
            </select>
          </div>

          <div className="flex gap-2">
            <label htmlFor="jobPresence">Job Presence</label>
            <select
              name="jobPresence"
              className=""
              id="jobPresence"
              value={formData.jobPresence}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              {JOBPRESENCE.map((presence, idx) => (
                <option key={idx + 1} value={presence}>
                  {presence}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <label htmlFor="employmentType">Employment Type</label>
            <select
              name="jobType"
              className=""
              id="employmentType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              {JOBTYPE.map((type, idx) => (
                <option key={idx + 1} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </aside>

        <div className="flex flex-col gap-2">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded-md border-silicon-gray outline-none p-2"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <aside className="flex gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="category">Category</label>
            <select
              className="py-2 flex-shrink-0 block rounded-md pl-2"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select
              </option>
              {categories.map((cat, idx) => (
                <option key={idx + 1} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border rounded-md border-silicon-gray outline-none p-2"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </aside>

        <aside className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="max">Max. Salary</label>
            <input
              type="number"
              id="max"
              name="max"
              className="border rounded-md w-full border-silicon-gray outline-none p-2"
              value={formData.salary.max}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="min">Min. Salary</label>
            <input
              type="number"
              id="min"
              name="min"
              className="border rounded-md w-full border-silicon-gray outline-none p-2"
              value={formData.salary.min}
              onChange={handleChange}
            />
          </div>
        </aside>

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            name="description"
            className="border rounded-md border-silicon-gray outline-none p-2"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white w-40 text-center mx-auto block bg-silicon-green rounded-md"
        >
          {jobId ? "Update" : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default AddJob;
