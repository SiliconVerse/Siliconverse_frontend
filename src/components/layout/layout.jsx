import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';

function Layout() {
  return (
    <>
      <Header />

      <section className={styles.layout_body}>
        <SideBar />
        <section className={styles.layout_content}>
          {/* Outlet renders the nested child routes */}
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Layout;
