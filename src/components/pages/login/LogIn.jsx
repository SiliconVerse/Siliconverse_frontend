import React, { useState } from "react";
import "./logIn.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-inner">
          <div className="form-titles">
            <span>SiliconVerse</span>
            <h2>Log in</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span style={{ color: "#ff5f15" }}>Forgot Password?</span>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="text">
          <h3>
            <b>Welcome to Siliconverse</b>
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

export default LoginForm;
