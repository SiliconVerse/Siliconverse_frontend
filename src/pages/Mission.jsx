import { goal } from '../utils/images-export';

const Mission = () => {
  return (
    <div className='p-5 md:p-10 mx-auto'>
      <div className='flex flex-col gap-10 md:gap-20'>
        <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
          <div className='w-full space-y-4'>
            <h1 className='text-4xl font-bold'>Our Mission</h1>
            <p className='text-sm md:text-lg'>
              Our mission is to solve unemployment while helping businesses
              grow.
            </p>

            <p className='md:text-lg'>
              Siliconverse is an open ecosystem where entrepreneurs can realize
              their business dreams, and talented individuals can gain valuable
              experience while contributing to meaningful projects. <br />{' '}
              <br /> We aim to bridge the gap between startups, SMEs and talents
              by connecting them with a diverse pool of interns, nurturing
              innovation, and facilitating the growth of businesses that
              positively impact the global economies.
            </p>
          </div>
          <div className='md:hidden lg:block'>
            <img
              src={goal}
              alt='goal'
            />
          </div>
        </div>

        <div className='hidden md:block lg:hidden mx-auto'>
          <img
            src={goal}
            alt='goal'
          />
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:gap-10 justify-between items-center'>
          <div className='w-full space-y-4'>
            <h1 className='text-4xl font-bold'>Our Vision</h1>

            <p className='md:text-lg'>
              Our vision is to build an open ecosystem where anyone anywhere in
              the world can add value to economies, both local and
              international. <br /> <br /> We envision a future where every
              aspiring entrepreneur has the support and resources they need to
              bring their ideas to life, and where aspiring talents can build
              valuable skills and experience while helping shape the businesses
              of tomorrow.
            </p>
          </div>
          <div className='md:hidden lg:block'>
            <img
              src={goal}
              alt='goal'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
