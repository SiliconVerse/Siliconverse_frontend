// import PasswordUpdate from "../PasswordUpdate";
import { useState } from "react";
import MediaConnects from "./MediaConnects";
import ResetEmail from "./ResetEmail";
import ResetPassword from "./ResetPassword";

function CompanySettings() {
  const [ isEmailButtonActive, setIsEmailButtonActive ] = useState(false)
  return (
    <section className="space-y-4">
      <div className="w-full h-fit space-y-4 pt-4 md:pr-10 pr-8 pb-7 pl-5 rounded-lg border border-b-4 border-gray-300">
        <div className="space-y-3 md:w-[480px]">
          <div>
            <h3 className="text-md font-black">Account Settings</h3>
            <p className="text-sm font-semibold">Manage your account login, social connections, security, and more</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <div onClick={()=> setIsEmailButtonActive(true)} className={`w-[200px] text-sm cursor-pointer ${isEmailButtonActive ? "opacity-100" : "opacity-50"}`}>
              <h4>Email & Password</h4>
              <p>Email address</p>
              <p className="text-[#FF5F15]">david2piol@gmail.com</p>
            </div>
            <div onClick={()=> setIsEmailButtonActive(false)} className={`w-[200px] text-sm cursor-pointer ${!isEmailButtonActive ? "opacity-100" : "opacity-50"}`}>
              <h4>Current Password</h4>
              <p>**********</p>
            </div>
          </div>
        </div>
        <div>
          {isEmailButtonActive ? <ResetEmail/> : <ResetPassword />}
        </div>
      </div>
      <MediaConnects />
    </section>
  );
}
export default CompanySettings;
