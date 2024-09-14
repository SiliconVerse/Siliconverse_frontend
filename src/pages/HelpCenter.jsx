import React from 'react';
import SubmitButton from '../components/submit-btn';

const HelpCenter = () => {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className='w-full h-full py-4'>
      <h1 className='text-center font-semibold text-2xl max-sm:text-xl mb-4'>
        {' '}
        Help Center
      </h1>
      <div className='border w-11/12 md:w-5/6 mx-auto py-8 px-5 md:px-[4.4rem] rounded-sl max-w-3xl'>
        <h2 className='font-semibold mb-3 text-xl max-sm:text-lg'>
          How can we help you today?
        </h2>

        <form
          onSubmit={handleSearch}
          className='w-full border flex items-center rounded-sl max-w-xl'
        >
          <input
            type='text'
            placeholder='Search for help...'
            className='w-full px-2 '
          />
          <SubmitButton
            text={'search'}
            isLoading={false}
            className={
              'bg-primaryColor text-white inline-block h-full py-1 w-36 capitalize rounded-sl'
            }
          />
        </form>

        <h3 className='my-5 text-xl max-sm:text-lg font-semibold'>
          Interns Help Page
        </h3>
        <form
          onSubmit={handleContactSubmit}
          className='relative w-full max-w-xl'
        >
          <textarea
            name=''
            id=''
            cols='10'
            rows='10'
            placeholder='Info and troubleshooting for posting opportunities'
            className='w-full border  p-2 rounded-sl '
          ></textarea>

          <SubmitButton
            text={'send'}
            isLoading={false}
            className={
              'bg-primaryColor absolute bottom-3 right-3 text-white capitalize rounded-sl py-1 px-8'
            }
          />
        </form>
      </div>
      <h3 className='text-center mt-5 font-semibold text-xl max-sm:text-lg'>
        Talk to SiliconVerse
      </h3>
      <div
        className='border-t border-primaryColor/80
        text-center mt-4 py-5'
      >
        <button className='bg-primaryColor text-white rounded-sl px-3 py-2 capitalize'>
          contact support
        </button>
      </div>
    </section>
  );
};

export default HelpCenter;
