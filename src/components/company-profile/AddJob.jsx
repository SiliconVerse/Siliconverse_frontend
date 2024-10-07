import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useAuth } from "../../hooks/userAuth";
import { handleSubmit } from "../../requests/axios";

function AddJob({ setState }) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    companyId: user.uid,
    jobType: "",
    jobPresence: "",
    logo:user.profilePicture,
    location: "",
    salary: { min: "", max: "" },
    status: "open", // Default status can be set to "open"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested state for salary
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
    e.preventDefault();
    handleSubmit("post", "/jobs/create", formData)
    // Handle submission logic here, e.g., send formData to your API
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
              <option value="remote">Remote</option>
              <option value="onsite">On-Site</option>
              <option value="hybrid">Hybrid</option>
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
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-Time</option>
              <option value="internship">Internship</option>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              className="border rounded-md w-full border-silicon-gray outline-none p-2"
              value={formData.category}
              onChange={handleChange}
            />
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
          Submit
        </button>
      </form>
    </section>
  );
}

export default AddJob;
