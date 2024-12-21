import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './hooks/scroll-top.jsx';
import { AuthProvider } from './hooks/userAuth.jsx';

const App = () => {
  return (
    <div className='w-full'>
      <ScrollToTop />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
