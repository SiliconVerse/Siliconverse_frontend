import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Pic from '../assets/Frame 2147224567 (1).svg';
import './style.css';

function ProgrammOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200, // Trigger animations when element is 200px in viewport
      easing: 'ease-in-out', // Animation easing
      once: true,
    }); // Initialize AOS
  }, []);

  return (
    <div className='program__overview__main'>
      <div className='program__overview__content' data-aos='fade-up'>
        <div className='program__overview__content__img'>
          <img src={Pic} alt='pic' />
        </div>
        <div className='program__overview__content__text'>
          <h1 className='program__overview__head'>Program Overview</h1>
          <p className='program__overview__subtext1'>
            The Talent Accelerator Program (TAP) by Siliconverse is a
            specialized, hands-on internship that bridges the gap between
            education and real-world experience. Designed for aspiring tech
            professionals, TAP offers a unique opportunity to help techies gain
            experience, collaborate on cutting-edge projects and develop
            market-ready skills to become employable.
          </p>
          <p className='program__overview__subtext2'>
            The goal is simple: To accelerate your learning, enhance your
            resume, portfolio, and prepare you for a successful career in the
            tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgrammOverview;
