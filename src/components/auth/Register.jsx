import React, { useState } from "react";
import Input from "./common/input";
import Button from "./common/button";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [organization, setOrganization] = useState({ name: "", type: "" });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOrganizationChange = (e) => {
    const { name, value } = e.target;
    setOrganization((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { user, organization };
    console.log("Register Data:", formData);
    //Registration logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleUserChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleUserChange}
      />
      <Input
        type="text"
        name="name"
        placeholder="Organization Name"
        value={organization.name}
        onChange={handleOrganizationChange}
      />
      <select
        name="type"
        value={organization.type}
        onChange={handleOrganizationChange}
      >
        <option value="">Select Type</option>
        <option value="talent">Talent</option>
        <option value="company">Company</option>
      </select>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
