import { useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './layout.module.css';
import SideBar from '../sidebar/sidebar';
import MobileSideBar from '../sidebar/mobile-sidebar';
import { useAuth } from '../../hooks/userAuth';

function Layout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useLayoutEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  // console.log(auth?.currentUser);
  return (
    <>
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
