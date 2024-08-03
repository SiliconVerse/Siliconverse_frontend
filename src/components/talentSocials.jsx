import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function TalentSocials({ userData }) {
  return (
    <div className="flex gap-3 items-end">
      {userData.linkedIn && (
        <a
          href={userData.linkedIn}
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-xl md:text-3xl" />
        </a>
      )}
      {userData.github && (
        <a
          href={userData.github}
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub className="text-gray-900 text-xl md:text-3xl" />
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
  );
}

export default TalentSocials;
