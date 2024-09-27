import { useState } from "react";
import { db } from "../hooks/auth/firebase";
import { useAuth } from "../hooks/userAuth";
import { doc, setDoc } from "firebase/firestore";
import SubmitButton from "./submit-btn";
import { skillSet } from "../utils/skillset";
import './update-user-data.css';

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
    bio: userData.bio ?? "",
  });
  
  const [charCount, setCharCount] = useState(userData.bio?.length || 0);
  const maxCharLimit = 2000;

  function isValidUrlRegex(url) {
    const regex = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return regex.test(url);
  }

  function getFormattedUrl(url) {
    return isValidUrlRegex(url);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === "bio") {
      setCharCount(value.length);  // Update char count for bio
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userRef = doc(db, "Users", userData.uid);
      await setDoc(userRef, formData, { merge: true });
      await updateUser(userData);
      setState(false);
    } catch (e) {
      console.error("Error updating document: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="max-w-4xl mx-auto pt-40" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        {/* Form Fields */}
        <div>
          <label className="block text-sm font-medium" htmlFor="firstname">
            First Name
          </label>
          <input
            className="mt-1 block w-full border text-black p-1 rounded-md"
            type="text"
            id="firstname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="mt-1 block w-full border text-black p-1 rounded-md"
            type="text"
            id="lastname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        {/* other socials */}
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
        {/* country & SOO */}
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


        {/* Social Handles */}
        <div>
          <label className="block text-sm font-medium" htmlFor="github">
            Github
            {formData.github.length > 1 && !getFormattedUrl(formData.github) && (
              <span className="ml-3 text-red-500 text-sm">
                Invalid Link, include http or https
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border text-black p-1 rounded-md"
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        {/* Additional social fields */}
        <div>
          <label className="block text-sm font-medium" htmlFor="gilinkedInthub">
            linkedIn
            {formData.linkedIn.length > 1 && !getFormattedUrl(formData.linkedIn) && (
              <span className="ml-3 text-red-500 text-sm">
                Invalid Link, include http or https
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border text-black p-1 rounded-md"
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
          />
        </div>


        <div>
          <label className="block text-sm font-medium" htmlFor="website">
            Portfolio
            {formData.website.length > 1 && !getFormattedUrl(formData.website) && (
              <span className="ml-3 text-red-500 text-sm">
                Invalid Link, include http or https
              </span>
            )}
          </label>
          <input
            className="mt-1 block w-full border text-black p-1 rounded-md"
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        {/* skill */}
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
      </div>


      

      {/* Bio Section */}
      <div className="text-white gap-4 pt-3">
        <label className="block text-sm font-medium" htmlFor="bio">
          Bio
        </label>
        <div className="bio_text_box">
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            rows={10}
            cols={50}
            maxLength={maxCharLimit}
          />
          <div className="char-count">
            {charCount}/{maxCharLimit}
          </div>
        </div>
      </div>

      {/* Submit and Cancel */}
      <div className="mt-4">
        <SubmitButton
          className="inline-flex justify-center py-2 px-4 text-white bg-primaryColor"
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
