import UploadResumeInput from '../components/upload-resume-input';

const PrivacyPolicy = () => {
  return (
    <div className='p-5 md:p-10 flex flex-col justify-between space-y-20'>
      <div>
        <h1 className='text-[60px] font-bold'>Privacy Policy</h1>
        <h3 className='text-lg my-2'>Our privacy policy</h3>
        <p className='text-base my-2'>
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look
        </p>

        <p>
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur.
        </p>
      </div>
      <div className='pt-20 space-y-10'>
        <div>
          <h3 className='text-lg my-2'>Why you should have a good C.V</h3>
          <p className='text-base my-2'>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look
          </p>

          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>

        <UploadResumeInput />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
