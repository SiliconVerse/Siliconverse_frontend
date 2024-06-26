import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
// import { images } from "../..";
import { teamDetails } from "../..";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div>
      <div className="text-center mt-14 mb-10">
        <h1 className="text-[1.7rem] font-bold">Meet Our Team</h1>
      </div>
      <div>
        <div>
          <div className="bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start mt-4">
              {teamDetails.map((info) => (
                <div
                  key={info.name}
                  className="flex flex-col shadow-xl rounded-lg w-[100%]"
                >
                  <img
                    src={info.img}
                    className="w-full rounded-t-lg h-[19.3rem]"
                    alt="images"
                  />
                  <div className="p-5 py-6">
                    <h1 className="text-[#FF5F15] font-semibold text-[17px]">
                      {info.name}
                    </h1>
                    <p className="mt-1 text-[14px] font-normal">{info.title}</p>
                    <ul className="flex gap-2 mt-6">
                      <li>
                        <Link to={info.linkedinurl}>
                          <Linkedin size={17} />
                        </Link>
                      </li>
                      <li>
                        <Link to={info.twitterurl}>
                          <Twitter size={17} />
                        </Link>
                      </li>
                      <li>
                        <Link to={info.instagramurl}>
                          <Instagram size={17} />
                        </Link>
                      </li>
                      <li>
                        <Link to={info.githuburl}>
                          <Github size={17} />
                        </Link>
                      </li>
                      <li>
                        <Link to={info.facebookurl}>
                          <Facebook size={17} />
                        </Link>
                      </li>
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
