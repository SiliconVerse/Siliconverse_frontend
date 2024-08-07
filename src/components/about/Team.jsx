import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { teamDetails } from "../../utils/team-details";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Team() {
  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="text-[1.7rem] font-bold">Meet Our Team</h1>
      </div>
      <div>
        <div>
          <div className="bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-start mt-4">
              {teamDetails.map((info) => (
                <div
                  key={info.name}
                  className="flex flex-col shadow-xl rounded-lg w-full mx-auto">
                  <img
                    src={info.img}
                    className="w-full rounded-t-lg h-[19.3rem]"
                    alt="images"
                  />
                  <div className="p-5 py-6">
                    <h1 className="text-primaryColor font-semibold text-nowrap">
                      {info.name}
                    </h1>
                    <p className="mt-1 text-sm font-normal">{info.title}</p>
                    <ul className="flex gap-2 mt-6">
                      {info.linkedinurl && (
                        <li>
                          <Link to={info.linkedinurl}>
                            <FaLinkedin
                              size={24}
                              className="text-blue-500"
                            />
                          </Link>
                        </li>
                      )}
                      {info.twitterurl && (
                        <li>
                          <Link to={info.twitterurl}>
                            <FaX size={24} />
                          </Link>
                        </li>
                      )}
                      {info.instagramurl && (
                        <li>
                          <Link to={info.instagramurl}>
                            <Instagram size={24} />
                          </Link>
                        </li>
                      )}
                      {info.githuburl && (
                        <li>
                          <Link to={info.githuburl}>
                            <FaGithub
                              size={24}
                              className="text-gray-900"
                            />
                          </Link>
                        </li>
                      )}
                      {info.facebookurl && (
                        <li>
                          <Link to={info.facebookurl}>
                            <FaFacebook
                              size={24}
                              className="text-blue-800"
                            />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
