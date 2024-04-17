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
          <li><Link className='link'>About</Link></li>
          <li><Link className='link'>Organisations</Link></li>
          <li><Link className='link'>Privacy Policy</Link></li>
          <li><Link className='link'>Terms and Conditions</Link></li>
          <li><Link className='link'>CV Review Services</Link></li>
        </ul>
      </div>

      <div className="icons">
        <h3>Follow us on :</h3>
        <ul>
          <li><Link to={"https://www.facebook.com/Siliconverse"}><FaFacebookF className='face' /></Link></li>
          <li><Link to={"https://www.instagram.com/siliconverse"}><FaInstagram  className='insta'/></Link></li>
          <li><Link to={"https://www.linkedin.com/company/siliconverse/"}><FaLinkedinIn className='linked' /></Link></li>
          <li><Link to={"https://www.x.com/siliconverse"}><RiTwitterXLine className='tweet' /></Link></li>
          <li><Link to={""}><FaYoutube className='tube' /></Link></li>
          <li><Link to={""}><FaWhatsapp className='app' /></Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer