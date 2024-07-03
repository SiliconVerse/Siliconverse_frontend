// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import About from './components/pages/About.jsx';
// import Interns from './components/pages/Interns.jsx';
// import Mission from './components/pages/Mission.jsx';
// import HelpCenter from './components/pages/HelpCenter.jsx';
// import Layout from './components/layout/layout.jsx';
// import CompanyProfilePage from './components/pages/CompanyProfilePage.jsx';
// import UserProfile from './components/user-profile/userProfile.jsx';
// import { KindeProvider } from "@kinde-oss/kinde-auth-react";
// import Main from './components/main/Main.jsx';
// import  Home  from './components/pages/Home.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <KindeProvider
//     clientId="0841862f40cf4c429db18b54e08a7fec"
//     domain="https://siliconverses.kinde.com"
//     redirectUri="http://localhost:5173/home/"
//     logoutUri="http://localhost:5173"
//   >
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route element={<Layout />}>
//         <Route path="/main" element={<Main />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/intern" element={<Interns />} />
//         <Route path="/mission" element={<Mission />} />
//         <Route path='/profile' element={<CompanyProfilePage />} />
//         <Route path='/help' element={<HelpCenter />} />
//         <Route path='/userProfile' element={<UserProfile/>}/>
//         <Route path="/home" element={<Home/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </KindeProvider>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId="0841862f40cf4c429db18b54e08a7fec"
      domain="https://siliconverses.kinde.com" redirectUri="http://localhost:5173/home/"
    //     logoutUri="http://localhost:5173"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </KindeProvider>
  </React.StrictMode>,
)
