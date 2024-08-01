import { useState } from "react";
import "../styles/signup.css";
import TalentForm from "../components/TalentForm";
import CompanyForm from "../components/CompanyForm";
import SignUpIntro from "../components/signup-intro";

const SignUp = () => {
  const [formType, setFormType] = useState(null);

  const handleTalentClick = () => {
    setFormType("talent");
  };

  const handleCompanyClick = () => {
    setFormType("company");
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 md:p-11 lg:p-14 min-h-[calc(100vh-106px)] signUp-bg-image w-full ">
      {formType == null && (
        <SignUpIntro
          handleCompanyClick={handleCompanyClick}
          handleTalentClick={handleTalentClick}
        />
      )}

      {formType === "talent" && (
        <TalentForm handleCompanyClick={handleCompanyClick} />
      )}
      {formType === "company" && (
        <CompanyForm handleTalentClick={handleTalentClick} />
      )}
    </div>
  );
};

export default SignUp;
