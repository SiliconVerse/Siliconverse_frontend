// import React from 'react'

import Aboutus from '../about/Aboutus';
import Team from '../about/Team';
import Values from '../about/Values';

const About = () => {
  return (
    <>
      <div className='w-[90%] max-w-3xl mx-auto my-8'>
        <Aboutus />
        <Team />
        <Values />

        <div className='mt-10'>
          <h2 className='text-[#FF5F15] text-[19px] font-bold'>
            Join the Siliconverse Community
          </h2>
          <p className='text-[17px] mt-2'>
            Ready to explore new opportunities? Join Siliconverse today and
            unlock your potential!
          </p>{' '}
          <div className='mt-3'>
            <a
              href='https://chat.whatsapp.com/HfTXlt9RqhJ5hqoWcxkxuj'
              target='_blank'
              className='text-[#FF5F15] text-[16px] underline font-medium'>
              Click to Join now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
