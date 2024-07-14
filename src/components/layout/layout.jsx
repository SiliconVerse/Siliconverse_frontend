import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import SideBar from '../sidebar/sidebar';
import { useState } from 'react';

function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <section className={styles.layout_body}>
        <SideBar showMenu={showMenu} />
        <section className={styles.layout_content}>
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Layout;
