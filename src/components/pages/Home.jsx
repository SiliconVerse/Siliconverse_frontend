
import { images } from '../..'

const Home = () => {


  return (
    <div className='my-10 md:m-10 flex flex-col md:flex-row justify-between items-center'>
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
      </div>

      <div className='md:w-1/2'>

        <div className=''>
          <img src={images.hero} alt='' className='w-[600px] h-[500px]' />
        </div>
      </div>

    </div>
  )
}

export default Home