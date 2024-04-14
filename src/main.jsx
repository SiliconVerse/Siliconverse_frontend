import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About.jsx';
import Interns from './components/pages/Interns.jsx';
import Mission from './components/pages/Mission.jsx';
import CompanyProfile from './components/pages/CompanyProfile.jsx';
import Layout from './components/layout/layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* Use Outlet for shared layout */}
      <Route element={<Layout />}>
        <Route path='/about' element={<About />} />
        <Route path='/intern' element={<Interns />} />
        <Route path='/mission' element={<Mission />} />
        <Route path='/profile' element={<CompanyProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// Define your layout component
