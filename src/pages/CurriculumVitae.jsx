import cvimg from '../assets/cv_image.png';
import UploadResumeInput from '../components/upload-resume-input';

function CurriculumVitae() {
  return (
    <div>
      <div className='px-6 md:px-12 my-8'>
        <div className='mt-10'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Curriculum Vitae
              </h1>
              <p className='text-sm md:text-base py-4 text-gray-500'>
                Email your CV to our team for review and pointers
              </p>
              <p className='text-sm md:text-base leading-6'>
                Body text for your whole article or post. We&rsquo;ll put in
                some lorem ipsum to show how a filled-out page might look:{' '}
                <br /> <br />
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
            </div>
            <div>
              <img
                src={cvimg}
                className='w-[90rem] h-full rounded-lg'
                alt='image'
              />
            </div>
          </div>

          <div>
            <h1 className='text-sm md:text-base md:text-[20px] py-4 text-[#828282] font-semibold'>
              Why you should have a good CV
            </h1>
            <p className='text-sm md:text-base leading-6'>
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look: <br />
              <br /> Excepteur efficient emerging, minim veniam anim aute
              carefully curated Ginza conversation exquisite perfect nostrud
              nisi intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
          </div>

          <UploadResumeInput />
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
