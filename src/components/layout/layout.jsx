import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import MobileSideBar from '../sidebar/mobile-sidebar';
import SideBar from '../sidebar/sidebar';
import styles from './layout.module.css';

function Layout() {
  // const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return <Navigate to={'/login'} />;

  return (
    <>
      <section className={styles.layout_body}>
        <SideBar />
        {/*  */}
        <MobileSideBar />
        <section className={styles.layout_content}>
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Layout;
