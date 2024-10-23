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
                {/* Body text for your whole article or post. We&rsquo;ll put in
                some lorem ipsum to show how a filled-out page might look:{' '} */}
                <br /> <br />
                At Siliconverse, we understand the importance of a well-crafted CV in securing your dream job. That's why we offer comprehensive CV review services to help talents tailor their resumes to match the specific requirements of their desired roles. Simply send your CV to our dedicated team, and we'll provide valuable feedback and pointers to enhance its effectiveness. With our expertise and guidance, you'll stand out from the crowd and increase your chances of landing your ideal job. Take the first step towards career success with Siliconverse's CV review services today.
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
              Why do you need a good CV?
            </h1>
            <p className='text-sm md:text-base leading-6'>
              {/* Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look: <br /> */}
              <br /> A polished CV is your ticket to career success. It showcases your skills, experience, and achievements, leaving a lasting impression on potential employers. With a well-crafted CV, you'll stand out from the competition, secure interviews, and open doors to exciting job opportunities. Invest in your future with a stellar CV.
            </p>
          </div>

          <UploadResumeInput />
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
