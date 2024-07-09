// import React from 'react'
import "./../App.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { footerLinks } from "../utils/footerLinks";

const Footer = () => {
  return (
    <section className="footer bg-[#FF5F15]">
      <div className="px-6 md:px-16 py-8">
        <div className="flex items-center justify-center">
          <ul className="flex flex-col md:flex-row text-center flex-wrap gap-5 md:gap-16 mt-8">
            {footerLinks.map((Links) => (
              <li
                key={Links.id}
                className={`font-primary font-medium leading-6 text-[white] hover:text-gray-200 hover:font-semibold`}
              >
                <Link to={`/${Links.id}`} className="text-[16px]">
                  {Links.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="icons mt-12">
          <h2 className="font-bold text-center text-white text-[23px]">
            Follow us on:
          </h2>
          <ul className="flex items-center justify-center flex-wrap gap-4 md:gap-14 mt-6 text-white">
            <li className="bg-[#207BF3] p-2 rounded-full">
              <Link to={"https://www.facebook.com/Siliconverse"} target="blank">
                <FaFacebookF />
              </Link>
            </li>
            <li className="bg-[#D8095F] p-2 rounded-full">
              <Link
                to={
                  "https://www.instagram.com/siliconverse.io?igsh=Y3ZnMDRiMGp6YTVy"
                }
                target="blank"
              >
                <FaInstagram />
              </Link>
            </li>
            <li className="bg-[#126BC4] p-2 rounded-full">
              <Link
                to={"https://www.linkedin.com/company/siliconvers/"}
                target="blank"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="bg-black p-2 rounded-full">
              <Link to={"https://www.x.com/siliconverse"} target="blank">
                <RiTwitterXLine />
              </Link>
            </li>
            <li className="bg-[#FF0808] p-2 rounded-full">
              <Link to={""}>
                <FaYoutube />
              </Link>
            </li>
            <li className="bg-[#2CD46B] p-2 rounded-full">
              <Link to={""}>
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center mt-10 border-t">
          <p className="text-white mt-4 font-semibold">
            &copy; 2024 SilliconVerse
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
