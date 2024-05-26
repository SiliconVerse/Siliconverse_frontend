
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/pages/Home'
import Jobs from '../src/components/Jobs'

const App = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#FDEFE9] w-full '>
        <div className='m-6'>
          <Navbar />
          <Home />
        </div>

      </div>
      <Jobs />
      <Footer />
    </div>
  )
}

export default App