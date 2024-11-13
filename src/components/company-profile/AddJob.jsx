import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useAuth } from "../../hooks/userAuth";
import {
  handleRequest,
  handleSubmit,
} from "../../requests/axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import SubmitButton from "../submit-btn";

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
    salary: { min: 1, max: 1 },
    status: "open", //? Default status can be set to "open"
  });
  const [cat, setCat] = useState({
    category: "",
    categoryName: "",
  });

  const [loading, setLoading] = useState(false);

  // ?Fetcn all categories
  useEffect(() => {
    handleRequest("get", "/defaults/categories").then(
      (res) => {
        setCategories(res.data);
      }
    );
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

        setCat({
          category: res.category,
          categoryName: res.categoryName,
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
    setLoading(true);
    const url = !jobId
      ? "/jobs/create"
      : `/jobs/${jobId}/update`;
    const method = !jobId ? "post" : "put";
    e.preventDefault();

    handleSubmit(method, url, {
      ...formData,
      category: formData.category || cat.category,
    })
      .then(() => {
        toast.success("Successful");
        setState(false);
      })
      .catch(() => {
        toast.error(
          "Failed to upload, kinldy try again later."
        );
      })
      .finally(() => {
        reload((prev) => !prev);
        setSearchParams({ tab: "create" });
        setLoading(false);
      });
  };

  return (
    <section className="bg-white w-[90%] flex items-center justify-center flex-col relative py-4 md:py-10 max-w-3xl">
      <MdCancel
        className="text-red-500 absolute top-4 right-4 cursor-pointer"
        size={30}
        onClick={() => {
          setState(false);
          setSearchParams({ tab: "create" });
        }}
      />
      <form
        onSubmit={handleSubmitData}
        className="space-y-3 w-full px-4"
      >
        <>
          <aside className="flex flex-wrap gap-5">
            <div className="flex gap-2">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                className="px-2 py-0.5"
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
              <label htmlFor="jobPresence">
                Job Presence
              </label>
              <select
                name="jobPresence"
                className="px-2 py-0.5"
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
              <label htmlFor="employmentType">
                Employment Type
              </label>
              <select
                name="jobType"
                className="px-2 py-0.5"
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
              required
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
                required
                value={
                  formData.category || (cat ? cat._id : "")
                }
                onChange={handleChange}
              >
                {cat ? (
                  <option
                    value={cat._id}
                    disabled={formData.category === cat._id}
                  >
                    {cat.categoryName}
                  </option>
                ) : (
                  <option value="" disabled>
                    Select
                  </option>
                )}
                {categories.map((category, idx) => (
                  <option key={idx} value={category._id}>
                    {category.name}
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
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </aside>
          <aside className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="min">Min. Salary</label>
              <input
                type="number"
                id="min"
                min={1}
                name="min"
                className="border rounded-md w-full border-silicon-gray outline-none p-2"
                value={formData.salary.min}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="max">Max. Salary</label>
              <input
                type="number"
                id="max"
                min={1}
                name="max"
                className="border rounded-md w-full border-silicon-gray outline-none p-2"
                value={formData.salary.max}
                required
                onChange={handleChange}
              />
            </div>
          </aside>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded-md border-silicon-gray outline-none p-2"
              required
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </>
        <SubmitButton
          className={
            "text-white px-4 py-2 w-40 text-center mx-auto block bg-silicon-green rounded-md"
          }
          text={jobId ? "Update" : "Submit"}
          isLoading={loading}
        />
      </form>
    </section>
  );
}

export default AddJob;

const JOBTYPE = [
  "Internship",
  "Full Time",
  "Part Time",
  "Contract",
];
const JOBPRESENCE = ["On Site", "Remote", "Hybrid"];
