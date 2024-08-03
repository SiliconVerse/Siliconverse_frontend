import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import SignUpTC from "./signup-tc";
import { db } from "../hooks/auth/firebase";
import { useAuth } from "../hooks/userAuth";
import { sendEmailVerification } from "firebase/auth";
import PasswordViewer from "./password-viewer";

const CompanyForm = ({ handleTalentClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEmail: "",
    organizationName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 7) {
      alert("Password too short");
      setIsLoading(false);
      return;
    }

    const {
      companyEmail: email,
      password,
      firstName,
      lastName,
      organizationName,
    } = formData;
    // Form submission logic

    try {
      const { user } = await signup(email, password);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          organizationName: organizationName,
          role: "company",
        });

        await sendEmailVerification(user, {
          url: "https://siliconverse-frontend.vercel.app/login",
        });
      }
      toast.success("Registered Company successfully 🎉", {
        position: "top-center",
      });
    } catch (error) {
      toast.success(error.message, { position: "bottom-center" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="talent-form relative bg-white/10 flex-col-reverse lg:flex-row gap-5 font-roboto">
      <form
        onSubmit={handleSubmit}
        className="flex-shrink-0">
        <div className="flex items-center justify-evenly gap-5 max-w-md bg-primaryColor border-white px-2 rounded-2xl my-4 mx-auto">
          <button
            type="button"
            onClick={handleTalentClick}
            className="block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 text-nowrap">
            Talent Signup
          </button>
          <button
            type="button"
            className="block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 font-bold text-nowrap">
            Company Signup
          </button>
        </div>
        <h2 className="text-lg md:text-2xl">Company Signup</h2>

        <div className="w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8">
          <div className="w-full">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8">
          <div className="w-full">
            <label htmlFor="companyEmail">Organization Email:</label>
            <input
              type="email"
              name="companyEmail"
              placeholder="Company Email"
              value={formData.companyEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="organizationName">Organization name:</label>
            <input
              type="text"
              name="organizationName"
              placeholder="Company name"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8">
          <PasswordViewer
            label={"password"}
            value={formData.password}
            name={"password"}
            setPassword={handleChange}
          />
          <PasswordViewer
            label={"Confirm Password"}
            name={"confirmPassword"}
            value={formData.confirmPassword}
            setPassword={handleChange}
          />
        </div>
        <SignUpTC isLoading={isLoading} />
      </form>
      <div className="rounded-lg text-sm md:text-base border border-primaryColor p-4 text-white mx-auto flex flex-col gap-4 items-center justify-center">
        <h3 className="text-center font-roboto font-bold text-xl md:text-xl">
          Welcome to Siliconverse
        </h3>
        <p>
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space. <br />{" "}
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space.
        </p>
      </div>
    </div>
  );
};

export default CompanyForm;
