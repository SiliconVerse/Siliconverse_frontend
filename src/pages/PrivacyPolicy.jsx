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
          At Siliconverse, we are dedicated to protecting the privacy of our users and safeguarding the information they share with us. Our commitment to data protection is embedded throughout our Platform and Services, ensuring effective privacy measures are in place.
          By accessing or using the Siliconverse website, online services, mobile applications, and social networking platforms (collectively referred to as the "Platform"), you agree to the practices and policies detailed in this Privacy Policy and our Terms and Conditions. Each time you use the Platform, you consent to the collection, use, and disclosure of your information as outlined in this policy.
          The terms "we," "us," "our," and "Siliconverse" refer to Siliconverse and its affiliates. "Users," "you," and "your" refer to both talents and businesses as defined in our Terms and Conditions.
          Siliconverse is committed to maintaining transparency and accountability in our data handling practices. We continuously strive to protect your data and ensure that your privacy is respected and upheld across all our services. Your trust is important to us, and we take every measure to ensure your information is secure and used responsibly.

        </p>
      </div>
      <div className='pt-20 space-y-10'>
        <div>
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
            Policy indicates your continued acceptance of its terms and conditions..
          </p>
          <p>
          If you have any inquiries regarding this Privacy Policy or wish to exercise any of the rights outlined herein, please don't hesitate to contact us @ siliconverse.io@gmail.com  We are committed to addressing your concerns and ensuring transparency regarding our privacy practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
