import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/pages/About.jsx'
import Interns from './components/pages/Interns.jsx'
import Mission from './components/pages/Mission.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/intern" element={<Interns/>}/>
    <Route path="/mission" element={<Mission/>}/>
    </Routes>
  </BrowserRouter>,
)
