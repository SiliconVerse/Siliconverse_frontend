import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './hooks/scroll-top.jsx';
import { AuthProvider } from './hooks/userAuth.jsx';

const App = () => {
  return (
    <div className='w-full'>
      <ScrollToTop />
      <div className='w-full mt-[90px] md:mt-0 min-h-[calc(100vh-106px)]'>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
