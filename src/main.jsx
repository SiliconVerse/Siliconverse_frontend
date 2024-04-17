import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About.jsx';
import Interns from './components/pages/Interns.jsx';
import Mission from './components/pages/Mission.jsx';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <KindeProvider
    clientId="0841862f40cf4c429db18b54e08a7fec"
    domain="https://siliconverses.kinde.com"
    redirectUri="http://localhost:3000"
    logoutUri="http://localhost:3000"
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/intern" element={<Interns />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  </KindeProvider>
);
