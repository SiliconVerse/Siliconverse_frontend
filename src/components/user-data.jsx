import React, { useMemo, useState } from "react";
import UserDataForm from "./update-user-data";
import { useAuth } from "../hooks/userAuth";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function UserData() {
  const { user } = useAuth();
  // const [userData, setUserData] = useState();

  const userData = useMemo(() => ({ ...user }), [user]);
  const [openUpdate, setOpenUpdate] = useState(false);
  return (
    <>
      {userData && (
        <>
          <aside className="flex flex-col gap-3 justify-start md:gap-5 my-2 md:my-4 w-full md:justify-evenly text-sm md:text-base">
            <p className="capitalize">
              <span className="block font-semibold">Full Name</span>
              {userData.firstName.toLowerCase() +
                " " +
                userData.lastName.toLowerCase()}{" "}
              {userData.gender && `(${userData.gender})`}
            </p>
            <p className="w-1/2">
              <span className="block font-semibold">Email</span>
              {userData.email}
            </p>
            <div className="flex gap-3 items-end">
              {userData.linkedIn && (
                <a
                  href={userData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin
                    size={32}
                    className="text-blue-600"
                  />
                </a>
              )}
              {userData.github && (
                <a
                  href={userData.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub
                    size={32}
                    className="text-gray-900"
                  />
                </a>
              )}
              {userData.website && (
                <a
                  href={userData.website}
                  target="_blank"
                  className="text-primaryColor underline underline-offset-4"
                  rel="noopener noreferrer">
                  Porfolio
                </a>
              )}
            </div>
            <div className="flex gap-3">
              {userData.country && (
                <p className="capitalize">
                  <span className="block font-semibold">Country</span>
                  {userData.country.toLowerCase()}
                </p>
              )}
              {userData.stateOfResdidence && (
                <p className="capitalize">
                  <span className="block font-semibold">
                    State of Residence
                  </span>

                  {userData.stateOfResdidence.toLowerCase()}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              {userData.skillset && (
                <p className="capitalize">
                  <span className="block font-semibold">Skillset</span>
                  {userData.skillset.toLowerCase()}
                </p>
              )}
              {userData.university && (
                <p className="capitalize">
                  <span className="block font-semibold">University</span>

                  {userData.university.toLowerCase()}
                </p>
              )}
            </div>

            <button
              onClick={() => setOpenUpdate(!openUpdate)}
              className="rounded-lg bg-primaryColor text-white text-center px-5 py-1.5 w-fit">
              Update Profile
            </button>
          </aside>

          {openUpdate && (
            <div className="overflow-auto fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-[100vh] w-[100vw] bg-black/95 z-[220]">
              <div className="flex items-center justify-center lg:h-full w-full overflow-auto">
                <UserDataForm
                  setState={setOpenUpdate}
                  userData={userData}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UserData;
