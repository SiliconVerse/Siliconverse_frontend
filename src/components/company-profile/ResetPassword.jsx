import { getAuth, signOut, updatePassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function cancelAll() {
    setPassword("");
    setNewPassword("");
    setConfPassword("");
    setErrorMessage("");
    setIsLoading(false);
  }

  async function update(e) {
    e.preventDefault();
    setErrorMessage("");
    if (newPassword.length < 8) return setErrorMessage("Password too short");
    if (newPassword !== confPassword) {
      return setErrorMessage("Passwords do not match");
    }
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
      <div>
        <p className="text-silicon-red">{errorMessage}</p>
      </div>
      <form onSubmit={(e) => update(e)} className="grid md:grid-cols-2 gap-y-4 gap-x-8 pb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="currPassword" className="cursor-pointer text-sm">
            Current Password
          </label>
          <input
            className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="currPassword"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword" className="cursor-pointer text-sm">
            New Password
          </label>
          <input
            className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none"
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            id="newPassword"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confPassword" className="cursor-pointer text-sm">
            Re-enter Password
          </label>
          <input
            className="md:w-full max-w-[400px] border border-black rounded-md p-2 outline-none"
            type="text"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            id="confPassword"
          />
        </div>
        <div className="flex justify-between items-end md:w-full max-w-[400px]">
          <button
            disabled={isLoading}
            onClick={cancelAll}
            className="bg-silicon-red lg:h-[50%] w-[40%] text-white text-sm py-[6px] px-7 rounded-md"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            className="bg-primaryColor lg:h-[50%] w-[40%] text-white text-sm py-[6px] px-7 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
