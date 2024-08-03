import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Interns from "./pages/Interns.jsx";
import Mission from "./pages/Mission.jsx";
import CompanyProfilePage from "./pages/CompanyProfilePage.jsx";
import Layout from "./components/layout/layout.jsx";
import CurriculumVitae from "./pages/CurriculumVitae.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import UserProfile from "./pages/UserProfilePage.jsx";
import Magazine from "./pages/Magazine.jsx";
import LoginForm from "./pages/login/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import Organization from "./pages/Organization.jsx";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import NotFound from "./pages/notFound.jsx";
import ScrollToTop from "./hooks/scroll-top.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ScrollToTop />
      <div className="w-full mt-[90px] md:mt-0 min-h-[calc(100vh-106px)]">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/interns"
            element={<Interns />}
          />
          <Route
            path="/mission"
            element={<Mission />}
          />
          {/* Wrapper */}
          <Route element={<Layout />}>
            <Route
              path="company-profile"
              element={<CompanyProfilePage />}
            />
            <Route
              path="/talent-profile"
              element={<UserProfile />}
            />
          </Route>
          {/* Wrapper */}

          <Route
            path="/curriculumvitae"
            element={<CurriculumVitae />}
          />
          <Route
            path="/terms"
            element={<TermsAndConditions />}
          />
          <Route
            path="/help"
            element={<HelpCenter />}
          />
          <Route
            path="/magazine"
            element={<Magazine />}
          />
          <Route
            path="/login"
            element={<LoginForm />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/organization"
            element={<Organization />}
          />
          <Route
            path="/privacy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
