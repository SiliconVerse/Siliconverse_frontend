import { useState } from "react";
import { db } from "../hooks/auth/firebase";
import { useAuth } from "../hooks/userAuth";
import { doc, updateDoc } from "firebase/firestore";
import SubmitButton from "./submit-btn";
import { skillSet } from "../utils/skillset";

const UserDataForm = ({ userData, setState }) => {
  const { updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: userData.phone ?? "",
    firstName: userData.firstName ?? "",
    lastName: userData.lastName ?? "",
    gender: userData.gender ?? "",
    email: userData.email ?? "",
    country: userData.country ?? "",
    stateOfResdidence: userData.stateOfResdidence ?? "",
    skillset: userData.skillset ?? "",
    university: userData.university ?? "",
    degree: userData.degree ?? "",
    github: userData.github ?? "",
    linkedIn: userData.linkedIn ?? "",
    website: userData.website ?? "",
  });

  function isValidUrlRegex(url) {
    const regex =
      /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return regex.test(url);
  }

  function getFormattedUrl(url) {
    if (isValidUrlRegex(url)) {
      return true;
    } else {
      false;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userRef = doc(db, "Users", userData.uid);
      await updateDoc(userRef, formData);
      await updateUser(userData);
      setState(false);
    } catch (e) {
      console.error("Error updating document: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="max-w-4xl mx-auto p-4"
      onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={() => setState(false)}
        className="text-white underline mx-auto text-center block">
        Cancel
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="firstname">
            First Name
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="lastname">
            Last Name
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="gender">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            value={formData.gender}
            onChange={handleChange}>
            <option value="select">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="phone">
            Phone
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="country">
            Country
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="stateOfResdidence">
            City/State of Residence
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="stateOfResdidence"
            name="stateOfResdidence"
            value={formData.stateOfResdidence}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="skillset">
            Skillset
          </label>
          <select
            name="skillset"
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            id="skillset"
            value={formData.skillset} // Controlled by state
            onChange={handleChange}>
            <option value="select">Choose a skillset</option>
            {skillSet.map((skill, idx) => (
              <option
                key={idx + skill}
                value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="university">
            University
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="degree">
            Degree
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>
        {/* Social handles */}
        {/* <aside> */}
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="github">
            Github
            {formData.github.length > 1 && (
              <span className="ml-3 text-red-500 text-sm">
                {!getFormattedUrl(formData.github) &&
                  "Invalid Link, do include http or https"}
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="linkedIn">
            LinkedIn
            {formData.linkedIn.length > 1 && (
              <span className="ml-3 text-red-500 text-sm">
                {!getFormattedUrl(formData.linkedIn) &&
                  "Invalid Link, do include http or https"}
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="website">
            Portfolio Link
            {formData.website.length > 1 && (
              <span className="ml-3 text-red-500 text-sm">
                {!getFormattedUrl(formData.website) &&
                  "Invalid Link, do include http or https"}
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        {/* </aside> */}
      </div>
      <div className="mt-4">
        <SubmitButton
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryColor hover:bg-primaryColor/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
          text="Update"
          isLoading={isLoading}
        />

        <button
          type="button"
          onClick={() => setState(false)}
          className="text-white underline ml-5">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserDataForm;
