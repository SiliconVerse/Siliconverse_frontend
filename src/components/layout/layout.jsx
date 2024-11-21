import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import Navbar from '../Navbar';
import MobileSideBar from '../sidebar/mobile-sidebar';
import SideBar from '../sidebar/sidebar';
import Spinner from '../spinner';
import styles from './layout.module.css';

function Layout() {
  const { user, isAuthLoading } = useAuth();
  const { pathname, search } = useLocation();

  if (!user && !isAuthLoading)
    return <Navigate to={'/login'} state={{ from: pathname + search }} />;

  if (user && !user.role) {
    return <Navigate to='/complete-signup' replace />;
  }

  if (isAuthLoading) {
    return (
      <div className='bg-primaryColor h-screen grid place-items-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className={styles.layout_body}>
        <SideBar />
        <MobileSideBar />
        <section className={styles.layout_content}>
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Layout;
