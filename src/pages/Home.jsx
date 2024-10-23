import { useMemo } from "react";
import Jobs from "../components/Jobs";
import { useAuth } from "../hooks/userAuth";
import { hero } from "../utils/images-export";
import { NavLink } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import {Link, animateScroll  as scroll} from 'react-scroll'
// import Jobs from "../components/Jobs";
// import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const { user } = useAuth();
  const isVerified = useMemo(() => user?.emailVerified, [user]);

  const verifyEmail = async () => {
    await sendEmailVerification(auth.currentUser);
  };
  return (
    <>
      <div className="mx-auto px-auto bg-[#FDEFE9] px-5 md:px-10 pb-5">
        <div className="py-10 m d:p-10 flex flex-col md:flex-row md:justify-between justify-start md:items-center">
          <div className="md:w-1/2 space-y-5 md:space-y-10">
            <div className="lg:text-5xl text-3xl font-bold">
              <h1 className="w-full">
                Digital platform designed to connect Tech Startups, SMEs, and
                Tech Talents.
              </h1>
            </div>
            <div className="md:text-xl font-semibold">
              <h2 className="max-w-md">
                A Job Portal for internships and Silicon Magazine for industry
                insights and success stories.
              </h2>
            </div>

            {!user && (
              <button className="bg-[#FF5F15] py-2 px-10 rounded-3xl text-white">
                <NavLink
                  to="/signup"
                  className="block w-full h-full text-white text-center"
                  style={{ textDecoration: "none" }}>
                  Get Started
                </NavLink>
              </button>
            )}
            {user && !isVerified && (
              <button
                className="bg-[#FF5F15] py-2 px-10 rounded-3xl text-white"
                onClick={verifyEmail}>
                Verify Email to Proceed
              </button>
            )}
          </div>

          <div>
            <img
              src={hero}
              alt="banner image"
              className="w-[500px] h-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-4">
          <Link to ='Job-List'
          smooth={true} 
          duration={500}
          >
          <button className="w-full md:w-fit px-4 bg-black py-2 rounded-md text-white font-semibold">
            Apply for internship
          </button>          
          </Link>
          <NavLink to="/interns">
            <button className="w-full md:w-fit px-4 bg-black py-2 rounded-md text-white font-semibold">
              Get Interns
            </button>
          </NavLink>
        </div>
      </div>
      <Jobs />
    </>
  );
};

export default Home;
