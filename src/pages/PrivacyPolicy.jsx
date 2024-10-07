import UploadResumeInput from '../components/upload-resume-input';

const PrivacyPolicy = () => {
  return (
    <div className='p-5 md:p-10 flex flex-col justify-between space-y-20'>
      <div>
        <h1 className='text-[60px] font-bold'>Privacy Policy</h1>
        <h3 className='text-lg my-2'>Our privacy policy</h3>
        {/* <p className='text-base my-2'>
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look
        </p> */}

        <p>
            Siliconverse retains the right to amend, modify, add, 
            or remove sections of this Privacy Policy at any time and 
            without prior notice. Any alterations will take effect 
            immediately upon being posted, unless stated otherwise. 
            We advise you to periodically review this Privacy Policy to 
            stay informed about any updates or modifications. Your continued 
            use of the Platform after amendments to this Privacy 
            Policy indicates your continued acceptance of its terms and conditions.
        </p>
      </div>
      <div className='pt-20 space-y-10'>
        <div>
          <h3 className='text-lg my-2'>Why you should have a good C.V</h3>
          {/* <p className='text-base my-2'>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look
          </p> */}

          <p>
          A polished CV is your ticket to career success. It showcases 
          your skills, experience, and achievements, leaving a 
          lasting impression on potential employers. 
          With a well-crafted CV, you'll stand out from the competition, 
          secure interviews, and open doors to exciting 
          job opportunities. Invest in your future with a stellar CV.
          </p>
        </div>

        <UploadResumeInput />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
