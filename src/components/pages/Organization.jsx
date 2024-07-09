import orgHeader from "../../assets/orgheader.jpg";
import facebook from "../../assets/facebook-f.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import { Link } from "react-router-dom";

function Organization() {
  return (
    <div>
      <div className=" pl-24 py-8 bg-[#FF5F15] font-semibold text-sm text-white border-white">
        <span className="p-3 border rounded-[10px]">Silicon Verse</span>
      </div>

      <div className=" mx-14">
        <h1 className=" text-[4rem] font-bold py-4">
          Organizations that are engaged with us
        </h1>
        <p className=" text-[#828282] text-2xl pb-5">
          Siliconverse has been able to work with some of the following
          organization.
        </p>
        <p className=" text-xl pb-5">
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look:
        </p>
        <p className=" text-xl pb-5">
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur.
        </p>
      </div>

      <hr className="mx-14 border border-[#FF5F15]" />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mx-[5.31rem] mb-3 gap-x-7 gap-y-4">
        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Colab Innovation Kaduna
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              kaduna technology city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              colab, is kaduna’s first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Code Lab Lagos
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              Lagos technology city
            </h4>

            <p className=" text-[#6B7280] font-normal">
              Code lab is lagos first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Siliconverse hub
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              silicon city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              first innovation hub,and they provide tech services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Tech talent hub
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              kaduna technology city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              tech, is kaduna’s first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Colab Innovation Kaduna
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              kaduna technology city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              colab, is kaduna’s first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Code Lab Lagos
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              Lagos technology city
            </h4>

            <p className=" text-[#6B7280] font-normal">
              Code lab is lagos first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Siliconverse hub
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              silicon city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              first innovation hub,and they provide tech services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-fit rounded-lg shadow-md">
          <img
            className=" rounded-tr-lg w-full rounded-tl-lg"
            src={orgHeader}
            alt="image "
          />
          <div className=" px-3 py-5">
            <h1 className=" text-[#FF5F15] font-bold text-xl">
              Tech talent hub
            </h1>
            <h4 className=" text-[#6B7280] py-2 text-base font-medium">
              kaduna technology city, barnawa
            </h4>

            <p className=" text-[#6B7280] font-normal">
              tech, is kaduna’s first innovation hub,and they provide tech
              services........
              <p>.</p>
              <p>...</p>
            </p>
            <div className=" flex gap-2">
              <Link to="/">
                <img className=" cursor-pointer" src={facebook} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={twitter} alt="icon " />
              </Link>
              <Link to="/">
                <img className=" cursor-pointer" src={insta} alt="icon " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
