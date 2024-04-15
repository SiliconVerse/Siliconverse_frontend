import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../header/header';
import SideBar from '../sidebar/sidebar';
import { useState } from 'react';

function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Header setShowMenu={setShowMenu} />

      <section className={styles.layout_body}>
        <SideBar showMenu={showMenu} />
        <section className={styles.layout_content}>
          {/* Outlet renders the nested child routes */}
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Layout;
