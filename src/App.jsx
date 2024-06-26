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
// Auth imports
import LoginForm from "./components/pages/login/LogIn.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/* <Home /> */}
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
