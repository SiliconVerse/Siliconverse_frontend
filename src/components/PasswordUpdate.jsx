import React, { useState } from "react";
import SubmitButton from "./submit-btn";
import { getAuth, signOut, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function update(e) {
    e.preventDefault();
    setErrorMessage("");
    if (!auth.currentUser) navigate("/login");
    try {
      setIsLoading(true);
      await updatePassword(auth.currentUser, password);
      signOut(auth);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="mt-5">
        <h4 className="font-semibold">
          Please provide these to update password
        </h4>
        <p className="text-sm">
          You will be redirected to login page upon successful update
        </p>
      </div>
      <form
        onSubmit={(e) => update(e)}
        className="flex items-end gap-5">
        <div className="max-w-md flex flex-col">
          <label
            htmlFor="newPassword"
            className="mb-2 mt-5">
            New Password{" "}
            {errorMessage && (
              <span className="text-red-600 font-semibold block">
                {errorMessage}
              </span>
            )}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="newPassword"
            id="newPassword"
            className="border border-primaryColor rounded-lg p-2"
            type="text"
            placeholder="New Password"
          />
        </div>
        <SubmitButton
          text={"Update Password"}
          isLoading={isLoading}
          className={`bg-primaryColor text-white p-2 rounded-lg transition-opacity duration-500 ${
            password ? "opacity-100" : "opacity-0"
          }`}
        />
      </form>
    </>
  );
}

export default PasswordUpdate;
