import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import ProtectedHeader from '../protected-header';
import MobileSideBar from '../sidebar/mobile-sidebar';
import SideBar from '../sidebar/sidebar';
import styles from './layout.module.css';
import Navbar from '../Navbar';

function Layout() {
  const { user } = useAuth();
  const { pathname, search } = useLocation();

  if (!user)
    return <Navigate to={'/login'} state={{ from: pathname + search }} />;

  if (user && !user.role) {
    return <Navigate to='/complete-signup' replace />;
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
