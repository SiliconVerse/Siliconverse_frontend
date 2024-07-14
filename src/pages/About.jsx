import { Link } from 'react-router-dom';
import Aboutus from '../components/about/Aboutus';
import Team from '../components/about/Team';
import Values from '../components/about/Values';

const About = () => {
  return (
    <>
      <div className='grid  grid-cols-12 place-content-center w-full my-8 gap-10'>
        <div className='col-start-2 col-end-12'>
          <Aboutus />
        </div>
        <div className='col-start-1 col-end-13 px-10'>
          <Team />
        </div>
        <div className='col-start-2 col-end-12'>
          <Values />
        </div>

        <div className='col-start-2 col-end-12'>
          <h2 className='text-primaryColor text-[19px] font-bold'>
            Join the Siliconverse Community
          </h2>
          <p className='text-[17px] mt-2'>
            Ready to explore new opportunities? Join Siliconverse today and
            unlock your potential!
          </p>{' '}
          <div className='mt-3'>
            <Link
              to='https://chat.whatsapp.com/HfTXlt9RqhJ5hqoWcxkxuj'
              target='_blank'
              className='block text-primaryColor text-lg capitalize underline font-medium text-center md:text-start'>
              Click to Join now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
