import './App.css'
import { Link } from 'react-router-dom'
import Jobs from './components/Jobs'

function App() {
  return (
    <main>
      {/* <nav>
        <ul>
          <li><h2>Siliconverse</h2></li>

          <li>
            <li><Link>Home</Link></li>
            <li><Link>Our mission</Link></li>
            <li><Link>About us</Link></li>
            <li><Link>Interns</Link></li>
            <li><Link>Hire Interns</Link></li>
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
      </nav> */}
      <section>
        <div className="text"></div>
        <div className="image">
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <Jobs/>
      </section>
    </main>
  )
}

export default App
