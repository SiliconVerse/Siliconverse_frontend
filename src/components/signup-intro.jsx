function SignUpIntro({ handleCompanyClick, handleTalentClick }) {
  return (
    <section className='relative bg-primaryColor/50 flex gap-5 flex-col w-full rounded-lg py-[10%] p-3'>
      {/* logo */}
      <div className='absolute left-1/2 -translate-x-1/2 md:translate-x-0 top-4 md:left-4 bg-primaryColor border-2 border-white capitalize rounded-lg p-3 font-roboto text-white text-center w-fit text-sm'>
        <p>Silicon Verse</p>
      </div>
      {/* content */}
      <article className='text-white text-center font-roboto mt-14'>
        <h3 className='font-bold mb-4 text-xl md:text-2xl'>
          Welcome to Siliconverse
        </h3>
        <p className='max-w-2xl tracking-wider text-center w-full mx-auto text-wrap'>
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space. <br />{' '}
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space.
        </p>
      </article>
      {/* Role signup section */}
      <section className='mx-auto'>
        <h3 className='font-bold mb-4 text-xl md:text-2xl text-center text-white'>
          Lets Sign you up
        </h3>

        <aside className='bg-white p-5 flex justify-between gap-6 max-w-sm rounded-lg mx-auto font-bold font-roboto'>
          <button
            onClick={handleTalentClick}
            className='px-4 py-1 md:py-2 border border-primaryColor hover:bg-primaryColor/25 rounded-lg'>
            Talent
          </button>
          <button
            onClick={handleCompanyClick}
            className='px-4 py-1 md:py-2 border border-primaryColor hover:bg-primaryColor/25 rounded-lg'>
            Company
          </button>
        </aside>
      </section>
    </section>
  );
}
export default SignUpIntro;
