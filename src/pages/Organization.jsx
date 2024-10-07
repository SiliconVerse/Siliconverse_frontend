import orgHeader from "../assets/orgheader.jpg";
import facebook from "../assets/facebook-f.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import { Link } from "react-router-dom";

function Organization() {
  return (
    <div>
      <div className="px-5 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.3] font-bold py-4">
          Organizations that are engaged with us
        </h1>
        <p className="text-[#828282] text-xl pb-5">
          Siliconverse has been able to work with some of the following
          organization.
        </p>
        <p className="pb-5">
          {/* Body text for your whole article or post. We will put in some lorem
          ipsum to show how a filled-out page might look: */}
        </p>
        <p className="text-sm md:text-base pb-5">
        Siliconverse collaborates with a diverse range of organizations, 
        providing access to top talent and innovative solutions. 
        From startups to established enterprises, our partners benefit 
        from our pool of skilled talents.
        Join our network of forward-thinking organizations and 
        grab the talents you need to drive your business forward.

        </p>
      </div>

      <hr className="mx-14 border border-primaryColor" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 px-5 md:px-20 mt-8 mb-3">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            className="max-w-fit rounded-lg shadow-md"
            key={index}>
            <img
              className=" rounded-tr-lg w-full rounded-tl-lg"
              src={orgHeader}
              alt="image "
            />
            <div className=" px-3 py-5">
              <h1 className=" text-primaryColor font-bold text-xl">
                Siliconverse hub
              </h1>
              <h4 className=" text-gray-400 py-2 text-base font-medium">
                silicon city, barnawa
              </h4>

              <p className=" text-gray-900 font-normal">
                first innovation hub,and they provide tech services........
              </p>
              <div className="flex gap-2 items-center my-4">
                <Link to="/">
                  <img
                    className=" cursor-pointer"
                    src={facebook}
                    alt="icon "
                  />
                </Link>
                <Link to="/">
                  <img
                    className=" cursor-pointer"
                    src={twitter}
                    alt="icon "
                  />
                </Link>
                <Link to="/">
                  <img
                    className=" cursor-pointer"
                    src={insta}
                    alt="icon "
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organization;
