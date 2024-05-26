
import { images } from '../..'

const Home = () => {


  return (
    <div className='my-10 md:m-10 flex flex-col md:flex-row md:justify-between justify-start  md:items-center'>
      <div className='md:w-1/2 space-y-5 md:space-y-10'>
        <div className='md:text-5xl text-3xl font-bold'>
          <h1>Digital platform designed</h1>
          <h1>to connect Tech Startups,</h1>
          <h1>SMEs, and Tech Talents.</h1>
        </div>
        <div className='md:text-xl font-semibold'>
          <h2>A Job Portal for internships and Silicon Magazine for</h2>
          <h2>industry insights and success stories.</h2>
        </div>

        <button className='bg-[#FF5F15] py-2 px-10 rounded-3xl text-white'>Get Started</button>


        
      </div>

      <div className='md:w-1/2 '>

        <div className=''>
          <img src={images.hero} alt='' className='w-[600px] h-[500px]' />
        </div>

        <div className='flex flex-col md:flex-row gap-2 justify-center md:justify-between p-4'>
          <button className='bg-black  py-2 px-10 rounded-md text-white'>Apply for internship</button>
          <button className='bg-black  py-2 px-10 rounded-md text-white'>Get Interns</button>
        </div>
      </div>

    </div>
  )
}

export default Home