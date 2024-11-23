import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from '../App';
import Layout from '../components/layout/layout.jsx';
import RootLayout from '../components/layout/root-layout.jsx';
import About from '../pages/About.jsx';
import CompanyProfilePage from '../pages/CompanyProfilePage.jsx';
import CurriculumVitae from '../pages/CurriculumVitae.jsx';
import HelpCenter from '../pages/HelpCenter.jsx';
import Home from '../pages/Home.jsx';
import Interns from '../pages/Interns.jsx';
import Magazine from '../pages/Magazine.jsx';
import Mission from '../pages/Mission.jsx';
import Organization from '../pages/Organization.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import SignUp from '../pages/SignUp.jsx';
import TermsAndConditions from '../pages/TermsAndConditions.jsx';
import UserProfile from '../pages/UserProfilePage.jsx';
import CompleteSignup from '../pages/complete-signup.jsx';
import LoginForm from '../pages/login/LogIn.jsx';
import NotFound from '../pages/notFound.jsx';
import TalentAcceleratorProgram from '../pages/TAP/index.jsx'
import Contact from '../pages/contact-us/contact-head/index.jsx'



const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/interns' element={<Interns />} />
      <Route path='/mission' element={<Mission />} />
      <Route path='/curriculumvitae' element={<CurriculumVitae />} />
      <Route path='/terms' element={<TermsAndConditions />} />
      <Route path='/magazine' element={<Magazine />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/organization' element={<Organization />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
      {/* <Route path='/tap' element={< */}
      {/* <TalentAcceleratedProgram/> */}
      <Route path='/tap' element={<TalentAcceleratorProgram />} />
      <Route path='/contactus' element= {<Contact />} />
      </Route>
    {/* Wrapper */}
    <Route element={<Layout />}>
      <Route path='company-profile' element={<CompanyProfilePage />} />
      <Route path='/talent-profile' element={<UserProfile />} />
      <Route path='/help' element={<HelpCenter />} />
    </Route>
    {/* Wrapper */}

    <Route path='complete-signup' element={<CompleteSignup />} />

    <Route path='*' element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routes);
export default router;
