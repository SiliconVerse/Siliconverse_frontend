import React from "react";
import Logo from "../../images/siliconlogo.png";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="inner-block">
        <div className="logo">
          <img src={Logo} alt="SiliconVerse logo" />
        </div>
        <div className="container-main">
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
          <div className="button">
            <div className="button-talent">Talent</div>
            <div className="button-company">Company</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
