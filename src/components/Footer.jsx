import React from 'react'
import "./../App.css"
import { Link } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp ,FaYoutube ,FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className='footer'>
      <div className="list">
        <ul>
          <li><Link to="/about" className='link'>About</Link></li>
          <li><Link className='link'>Organisations</Link></li>
          <li><Link className='link'>Privacy Policy</Link></li>
          <li><Link className='link'>Terms and Conditions</Link></li>
          <li><Link className='link'>CV Review Services</Link></li>
        </ul>
      </div>

      <div className="icons mt-10">
        <h3 className='font-bold'>Follow us on :</h3>
        <ul>
          <li className='face'><Link to={"https://www.facebook.com/Siliconverse"}><FaFacebookF /></Link></li>
          <li className='insta'><Link to={"https://www.instagram.com/siliconverse"}><FaInstagram /></Link></li>
          <li className='linked' ><Link to={"https://www.linkedin.com/company/siliconverse/"}><FaLinkedinIn /></Link></li>
          <li className='tweet' ><Link to={"https://www.x.com/siliconverse"}><RiTwitterXLine  /></Link></li>
          <li className='tube'><Link to={""}><FaYoutube  /></Link></li>
          <li className='app'><Link to={""}><FaWhatsapp /></Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer