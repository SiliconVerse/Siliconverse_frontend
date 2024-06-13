import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/pages/Home";
// import Jobs from "../src/components/Jobs";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Interns from "./components/pages/Interns.jsx";
import Mission from "./components/pages/Mission.jsx";
import HelpCenter from "./components/pages/HelpCenter.jsx";
// import Layout from "./components/layout/layout.jsx";
import CompanyProfilePage from "./components/pages/CompanyProfilePage.jsx";
import UserProfile from "./components/user-profile/userProfile.jsx";
import Magazine from "./components/pages/Magazine.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import Register from "./components/auth/Register.jsx";
import LogIn from "./components/pages/LogIn.jsx";
import Register from "./components/auth/Register.jsx";
import SignUp from "./components/pages/SignUp.jsx";

const App = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/intern" element={<Interns />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/profile" element={<CompanyProfilePage />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/* <Home /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
