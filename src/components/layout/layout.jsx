import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import SideBar from '../sidebar/sidebar';
import MobileSideBar from '../sidebar/mobile-sidebar';

function Layout() {
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
