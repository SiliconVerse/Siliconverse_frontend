import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { footerLinks } from '../utils/links';

const Footer = () => {
  return (
    <footer className='bg-primaryColor flex flex-col gap-16 px-6 md:px-16 py-8'>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center md:text-start md:gap-10 mt-8'>
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              className='text-sm md:text-base font-roboto font-medium leading-6 text-white hover:text-gray-200 hover:font-semibold'>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className='font-bold text-center text-white text-[23px]'>
          Follow us on:
        </h2>
        <div className='flex items-center justify-center flex-wrap gap-4 md:gap-14 mt-6 text-white'>
          <Link
            to={'https://www.facebook.com/Siliconverse'}
            target='blank'>
            <FaFacebookF className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
          <Link
            to={
              'https://www.instagram.com/siliconverse.io?igsh=Y3ZnMDRiMGp6YTVy'
            }
            target='blank'>
            <FaInstagram className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
          <Link
            to={'https://www.linkedin.com/company/siliconvers/'}
            target='blank'>
            <FaLinkedinIn className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
          <Link
            to={'https://www.x.com/siliconverse'}
            target='blank'>
            <RiTwitterXLine className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
          <Link to={''}>
            <FaYoutube className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
          <Link to={''}>
            <FaWhatsapp className='text-lg md:text-3xl lg:text-[50px]' />
          </Link>
        </div>
      </div>

      <div className='border-t' />
      <p className='text-white -mt-4 font-semibold text-center'>
        &copy; 2024 SilliconVerse
      </p>
    </footer>
  );
};

export default Footer;
