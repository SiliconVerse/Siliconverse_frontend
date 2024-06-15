import React, { useState } from "react";
import Input from "./common/input";
import Button from "./common/button";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignIn Data:", user);
    //Sign-in logic comes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <Button type="Submit">Sign In</Button>
    </form>
  );
};

export default SignIn;
