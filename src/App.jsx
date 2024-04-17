import './App.css'
import { Link } from 'react-router-dom'
import Jobs from './components/Jobs'
import Image from './assets/woman.png'
import { useTypingEffect } from './hooks/typing-effect'
import Footer from './components/Footer'
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';


function App() {
  const { login, register } = useKindeAuth();
  const text = useTypingEffect("Digital platform designed to connect Tech Startups, SMEs, and Tech Talents", 100)
  const texts = useTypingEffect("A Job Portal for internships and Silicon Magazine for industry insights and success stories", 100)
  return (
    <main>
      <nav>
        <ul>
          <li><h2>Siliconverse</h2></li>

          <li className='li'>
            <li><Link  to={'/'} className='links'>Home</Link></li>
            <li><Link to={"/mission"} className='links'>Our mission</Link></li>
            <li><Link to={"/about"} className='links'>About us</Link></li>
            <li><Link to={"/interns"} className="links">Interns</Link></li>
            <li><Link to={"/interns"} className='links'>Hire Interns</Link></li>
          </li>

          <li className="lis">
            <li>
            <button className='btns' onClick={login}><Link >Sign In</Link></button>
            </li>
            <li>
            <button className='btns' onClick={register} style={{ padding : '10px'}}><Link>Sign Up</Link></button>
            </li>
          </li>
        </ul>
      </nav> 
      <section className='main'>
        <div className="grid">
        <div className="text">
          <h1>{text}</h1>
          <p style={{ fontSize:"20px", paddingTop:"20px", paddingBottom:"20px"}}>{texts}</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="image grid">
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
      <Footer/>
    </main>
  )
}

export default App
