import React, { useState } from "react";
import Logo from "../../images/siliconlogo.png";
import "./signup.css";
import countryOptions from "./countryOptions";
import { NavLink } from "react-router-dom";

const TalentForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skillset: "",
    dob: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your form submission logic here
    console.log("Form submitted", formValues);
  };

  return (
    <div className="talent-container">
      <div className="talent-form">
        <form onSubmit={handleSubmit}>
          <h2>Talent Signup</h2>

          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="tel">Phone number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formValues.phone}
            onChange={handleChange}
            required
          />

          <select
            name="skillset"
            value={formValues.skillset}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Skillset
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Full Stack Development</option>
            <option value="dataScience">Data Science</option>
            <option value="machineLearning">Machine Learning</option>
            {/* Add more options as needed */}
          </select>

          <label htmlFor="date">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formValues.dob}
            onChange={handleChange}
            required
          />

          <select
            name="country"
            value={formValues.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Current Location (Country)
            </option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formValues.state}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="talent-signup-button" type="submit">
            Sign Up
          </button>

          <p>
            By signing up, you accept our{" "}
            <span style={{ color: "#ff5f15" }}>terms and conditions</span>
          </p>
          <p>
            Already have an account?
            <NavLink to="/login">
              <span style={{ color: "#ff5f15" }}>Log in</span>
            </NavLink>
          </p>
        </form>
        <div className="text-talent">
          <h3>
            <b className="text-title">Welcome to Siliconverse</b>
            <br />
            Siliconverse is a tech space for tech talents, who wish to look for
            internship, jobs and further their knowledge on the tech space.{" "}
            <br /> Siliconverse is a tech space for tech talents, who wish to
            look for internship, jobs and further their knowledge on the tech
            space.
          </h3>
        </div>
      </div>
    </div>
  );
};

const CompanyForm = () => (
  <div className="companyform">
    <form>
      <h2>Company Signup</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        required
      />
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

const SignUp = () => {
  const [formType, setFormType] = useState(null);

  const handleTalentClick = () => {
    setFormType("talent");
  };

  const handleCompanyClick = () => {
    setFormType("company");
  };

  return (
    <div className="signup-container">
      <div className="inner-block">
        <div className="logo">
          <img src={Logo} alt="SiliconVerse logo" />
        </div>
        <div className="container-main">
          {formType === null ? (
            <div className="text">
              <h3>
                <b style={{ marginBottom: "10%", paddingBottom: "5%" }}>
                  Welcome to Siliconverse
                </b>
                <br />
                Siliconverse is a tech space for tech talents, who wish to look
                for internship, jobs and further their knowledge on the tech
                space. <br /> Siliconverse is a tech space for tech talents, who
                wish to look for internship, jobs and further their knowledge on
                the tech space.
                <br />
                <b>Let's Sign you up</b>
              </h3>
            </div>
          ) : formType === "talent" ? (
            <TalentForm />
          ) : (
            <CompanyForm />
          )}
          {formType === null && (
            <div className="button">
              <div className="button-talent" onClick={handleTalentClick}>
                Talent
              </div>
              <div className="button-company" onClick={handleCompanyClick}>
                Company
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
