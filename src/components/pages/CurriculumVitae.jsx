import { Upload } from 'lucide-react';
import cvimg from '../../images/cv_image.png';

function CurriculumVitae() {
  return (
    <div>
      <div className='px-6 md:px-48 my-8'>
        <div className='mt-10'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Curriculum Vitae
              </h1>
              <p className='text-[13px] md:text-[16px] py-4 text-[#828282]'>
                Email your C.V to our team for review and pointers
              </p>
              <p className='text-[13px] md:text-[16px] leading-6'>
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
            <h1 className='text-[15px] md:text-[20px] py-4 text-[#828282] font-semibold'>
              Why you should have a good C.V
            </h1>
            <p className='text-[13px] md:text-[16px] leading-6'>
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

          <div className='my-14'>
            <button className='border border-gray-300 rounded-md p-5 w-[100%] md:w-[40%]'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                <div className='flex gap-2 items-center font-bold'>
                  <Upload size={16} /> <h1>Upload Resume</h1>
                </div>
                <div>
                  <div className='bg-[#FF5F15] text-white p-1 px-5 rounded-lg text-[0.8rem]'>
                    Share
                  </div>
                </div>
              </div>
            </button>

            {/* <input type="file" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
