import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";
import ProtectedHeader from "../protected-header";
import MobileSideBar from "../sidebar/mobile-sidebar";
import SideBar from "../sidebar/sidebar";
import Spinner from "../spinner";
import styles from "./layout.module.css";
import { useEffect } from "react";

function Layout() {
  const { user, loading, updateUser } = useAuth();
  const { pathname, search } = useLocation();

  useEffect(() => {
    updateUser(JSON.parse(localStorage.getItem("user")));
  }, [loading, user]);

  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center bg-primaryColor">
        <Spinner />
      </div>
    );
  }

  if (!user)
    return (
      <Navigate
        to={"/login"}
        state={{ from: pathname + search }}
      />
    );

  return (
    <>
      <ProtectedHeader />
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
