import { useState } from "react";
import { db } from "../hooks/auth/firebase";
import { useAuth } from "../hooks/userAuth";
import { doc, updateDoc } from "firebase/firestore";

const UserDataForm = ({ userData, setState }) => {
  const { updateUser } = useAuth();
  const [formData, setFormData] = useState({
    phone: userData.phone ?? "",
    firstName: userData.firstName ?? "",
    lastName: userData.lastName ?? "",
    email: userData.email ?? "",
    location: userData.country ?? "",
    skillset: userData.skillset ?? "",
    university: userData.university ?? "",
    degree: userData.degree ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "Users", userData.uid);
      const res = await updateDoc(userRef, formData);
      await updateUser(userData);
      setState(false);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <form
      className="max-w-4xl mx-auto p-4"
      onSubmit={handleSubmit}>
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
            htmlFor="location">
            Location
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium"
            htmlFor="skillset">
            Skillset
          </label>
          <input
            className="mt-1 block w-full border border-none text-black p-1 rounded-md shadow-sm focus:ring-primaryColor focus:border-primaryColor"
            type="text"
            id="skillset"
            name="skillset"
            value={formData.skillset}
            onChange={handleChange}
          />
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
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryColor hover:bg-primaryColor/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor">
          Submit
        </button>
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
