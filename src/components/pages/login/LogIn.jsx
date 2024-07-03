import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../images/siliconlogo.png";
import "./logIn.css";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Authentication logic
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");

      window.location.href = "/UserProfile";

      toast.success("Logged in successfully 🎉", { position: "top-center" });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, { position: "bottom-center" });
    }
    console.log("Email:", email);
    console.log("Password:", password);
    // Insert logic here, and put the begining before handleSubmit
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-inner">
          <div className="form-titles">
            <img src={Logo} alt="SiliconVerse logo" />
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
            <p style={{ textAlign: "center" }}>
              Don't have an account?
              <NavLink to="/signup">
                <span style={{ color: "#ff5f15" }}> Sign up</span>
              </NavLink>
            </p>
          </form>
        </div>
        <div className="text-login">
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

export default LoginForm;
