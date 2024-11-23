import { Link } from 'react-router-dom';
import { Instagram, LinkedIn, Twitter, Whatsapp, FaceBook, Youtube } from './Icons';
import { useLocation } from 'react-router-dom';
import GooglePlay from "../assets/googleplay.png"
import MagazineFooter from './MagazineFooter';

const Footer = () => {
  const location = useLocation()

  console.log(location.pathname)
  return (
    <>
    {location.pathname === "/magazine" ? (
      <MagazineFooter />
    ) : (
      <footer className='bg-primaryColor py-10 px-6 md:px-16 text-white flex flex-col gap-8 items-center'>
        <div>
          <ul className='w-full flex'>
            <li className='py-4 px-6 border-r-4 w-fit'>
              <Link>About</Link>
            </li>
            <li className='py-4 px-6 border-r-4 w-fit'>
              <Link>Organization</Link>
            </li>
            <li className='py-4 px-6 border-r-4 w-fit'>
              <Link>Privacy Policy</Link>
            </li>
            <li className='py-4 px-6 border-r-4 w-fit'>
              <Link>Terms</Link>
            </li>
            <li className='py-4 px-6 border-r-4 w-fit'>
              <Link>CV Review Services</Link>
            </li>
            <li className='py-4 px-6 w-fit'>
              <Link>Talent Accelerator Program (Tap)</Link>
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h3 className='text-[14px]'>Follow us On:</h3>
          <ul className='flex gap-4 items-center'>
            <li>
              <a href="#"><FaceBook /></a>
            </li>
            <li>
              <a href="#"><Instagram /></a>
            </li>
            <li>
              <a href="#"><LinkedIn /></a>
            </li>
            <li>
              <a href="#"><Twitter /></a>
            </li>
            <li>
              <a href="#"><Youtube /></a>
            </li>
            <li>
              <a href="#"><Whatsapp /></a>
            </li>
            <li>
              <img src={GooglePlay} alt="google play" />
            </li>
          </ul>
        </div>
        <div className='border-t w-full text-center p-6'>
          &copy; 2024 Siliconverse
        </div>
      </footer>
    )}
    </>
  );
};

export default Footer;


{/* <footer className=''>
<div className="flex flex-wrap gap-[24px] items-center">
  <div className='flex flex-col gap-6'>
    <h3 className='font-bold'>Products</h3>
    <div className='flex flex-col gap-4'>
      <Link to="/">Become a Guest Writer/Blogger</Link>
      <Link to="/">Apply for Jobs</Link>
      <Link to="/">Post Jobs</Link>
      <Link to="/">Shop</Link>
    </div>
  </div>
  <div className='flex flex-col gap-6'>
    <h3 className='font-bold'>Company</h3>
    <div className='flex flex-col gap-4'>
      <Link to="/">About Us</Link>
      <Link to="/">Contact Us</Link>
      <Link to="/">Privacy Policy</Link>
      <Link to="/">Terms & Conditions</Link>
    </div>
  </div>
  <div className='flex flex-col gap-6'>
    <h3 className='font-bold'>Explore</h3>
    <div className='flex flex-col gap-4'>
      <Link to="/">Join Siliconverse Community</Link>
      <Link to="/">Upcoming Tech Event</Link>
      <Link to="/">Subscribe to Newsletter</Link>
      <Link to="/">Advertise your Business for Free</Link>
    </div>
  </div>
  <div className='w-[440px] bg-[#F4F4F4] border-[#F7F7F7] rounded-[10px] text-[#0A142F] p-5 space-y-4'>
    <h3 className='font-bold text-[24px]'>Subscribe To Newsletter</h3>
    <p>Stay ahead of the curve with our informative and engaging Newsletter</p>
    <div className='h-[74px] flex items-center w-full rounded-[10px] overflow-hidden'>
      <input type="text" placeholder='Email Address' className='border-none outline-none h-full w-[80%] px-[16px] py-[12px]' />
      <button className='bg-primaryColor h-full w-[20%] flex items-center justify-center'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.1429 22.384V27.4286C25.1429 28.0348 24.902 28.6162 24.4734 29.0448C24.0447 29.4735 23.4634 29.7143 22.8571 29.7143H4.57143C3.96522 29.7143 3.38384 29.4735 2.95518 29.0448C2.52653 28.6162 2.28571 28.0348 2.28571 27.4286V18.0023L13.1726 23.8629C13.3391 23.9525 13.5252 23.9994 13.7143 23.9994C13.9034 23.9994 14.0895 23.9525 14.256 23.8629L17.4811 22.1257C16.5867 21.8057 15.7455 21.3943 14.9577 20.8914L13.7143 21.5566L2.28571 15.4057V13.7143C2.28571 13.1081 2.52653 12.5267 2.95518 12.098C3.38384 11.6694 3.96522 11.4286 4.57143 11.4286H9.19314C9.12498 10.6682 9.12498 9.90324 9.19314 9.14286H4.57143C3.35901 9.14286 2.19625 9.62449 1.33894 10.4818C0.481631 11.3391 0 12.5019 0 13.7143V27.4286C0 28.641 0.481631 29.8038 1.33894 30.6611C2.19625 31.5184 3.35901 32 4.57143 32H22.8571C24.0696 32 25.2323 31.5184 26.0896 30.6611C26.9469 29.8038 27.4286 28.641 27.4286 27.4286V21.4857C26.6978 21.859 25.9323 22.1599 25.1429 22.384ZM11.4286 10.2857C11.4286 11.6365 11.6946 12.974 12.2115 14.2219C12.7284 15.4698 13.4861 16.6037 14.4412 17.5588C15.3963 18.5139 16.5302 19.2716 17.7781 19.7885C19.026 20.3054 20.3635 20.5714 21.7143 20.5714C23.065 20.5714 24.4025 20.3054 25.6505 19.7885C26.8984 19.2716 28.0323 18.5139 28.9874 17.5588C29.9425 16.6037 30.7001 15.4698 31.217 14.2219C31.734 12.974 32 11.6365 32 10.2857C32 7.55777 30.9163 4.94156 28.9874 3.01262C27.0584 1.08367 24.4422 0 21.7143 0C18.9863 0 16.3701 1.08367 14.4412 3.01262C12.5122 4.94156 11.4286 7.55777 11.4286 10.2857ZM23.7623 4.33371C23.8684 4.22728 23.9946 4.14284 24.1334 4.08523C24.2723 4.02761 24.4211 3.99796 24.5714 3.99796C24.7218 3.99796 24.8706 4.02761 25.0094 4.08523C25.1483 4.14284 25.2744 4.22728 25.3806 4.33371L29.3806 8.33371C29.594 8.54724 29.7143 8.83656 29.7152 9.13849C29.7161 9.44041 29.5974 9.73041 29.3851 9.94514L25.3806 13.952C25.166 14.1666 24.8749 14.2872 24.5714 14.2872C24.2679 14.2872 23.9769 14.1666 23.7623 13.952C23.5477 13.7374 23.4271 13.4463 23.4271 13.1429C23.4271 12.8394 23.5477 12.5483 23.7623 12.3337L25.8126 10.2857H22.2857C21.2248 10.2857 20.2074 10.7071 19.4573 11.4573C18.7071 12.2074 18.2857 13.2248 18.2857 14.2857V14.8571C18.2857 15.1602 18.1653 15.4509 17.951 15.6653C17.7367 15.8796 17.446 16 17.1429 16C16.8398 16 16.5491 15.8796 16.3347 15.6653C16.1204 15.4509 16 15.1602 16 14.8571V14.2857C16 12.6186 16.6622 11.0198 17.841 9.84104C19.0198 8.66224 20.6186 8 22.2857 8H25.8126L23.7623 5.952C23.6559 5.84584 23.5714 5.71972 23.5138 5.58088C23.4562 5.44203 23.4265 5.29318 23.4265 5.14286C23.4265 4.99253 23.4562 4.84368 23.5138 4.70484C23.5714 4.56599 23.6559 4.43988 23.7623 4.33371Z" fill="#FEFEFE"/>
        </svg>
      </button>
    </div>
  </div>
</div>
<div className='border-t pt-[20px] flex justify-between max-[982px]:gap-6 max-[982px]:flex-wrap items-center'>
  <div className='border rounded-[10px] w-fit p-4'>
    Silicon Verse
  </div>
  <div className='w-fit'>
    © 2024 SiliconVerse. All rights reserved. 
  </div>
  <div className='flex flex-wrap gap-6'>
    <LinkedIn />
    <Twitter />
    <Instagram />
    <Whatsapp />
    <Google />
    <FaceBook />
    <Youtube />
  </div>
</div>
</footer> */}
