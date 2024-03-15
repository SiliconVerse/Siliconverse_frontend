import './App.css'
import { Link } from 'react-router-dom'
import Jobs from './components/Jobs'
import Image from './assets/woman.png'
import { useTypingEffect } from './hooks/typing-effect'

function App() {
  const text = useTypingEffect("Digital platform designed to connect Tech Startups, SMEs, and Tech Talents", 100)
  const texts = useTypingEffect("A Job Portal for internships and Silicon Magazine for industry insights and success stories", 100)
  return (
    <main>
      <nav>
        <ul>
          <li><h2>Siliconverse</h2></li>

          <li className='li'>
            <li><Link  to={'/'}>Home</Link></li>
            <li><Link to={"/mission"}>Our mission</Link></li>
            <li><Link to={"/about"}>About us</Link></li>
            <li><Link to={"/interns"}>Interns</Link></li>
            <li><Link to={"/interns"}>Hire Interns</Link></li>
          </li>

          <li>
            <li>
            <button><Link>Sign In</Link></button>
            </li>
            <li>
            <button><Link>Create Account</Link></button>
            </li>
          </li>
        </ul>
      </nav> 
      <section className='main'>
        <div className="grid">
        <div className="text">
          <h1>{text}</h1>
          <p>{texts}</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="image">
          <img src={Image} alt="Silicon Verse" className='img'/>
        </div>
        </div>
      </section>
        <div className="button">
          <button className="bt">Apply for Internship</button>
          <button className="bt bts" >Get Interns</button>
        </div>
      <section>
        <Jobs/>
      </section>
    </main>
  )
}

export default App
