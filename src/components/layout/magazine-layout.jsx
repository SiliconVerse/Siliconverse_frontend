import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import Navbar from '../Navbar';
import MagazineSidebar from '../magazine-admin-dashboard/navigation/magazine-sidebar';
import MagazineTopbar from '../magazine-admin-dashboard/navigation/magazine-topbar';
import Spinner from '../spinner';

export default function MagazineAdminLayout() {
  // add protection using user role i.e  if user.role !== magazine-admin then redirect to authorized access or page not found
  const { isAuthLoading, user } = useAuth();

  if (!user && !isAuthLoading) {
    return <Navigate to={'/login'} />;
  }

  if (isAuthLoading) {
    return (
      <div className='bg-primaryColor h-screen grid place-items-center '>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <MagazineTopbar />

      <div className='grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-12 w-full h-dvh md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-13.4rem)] overflow-hidden relative'>
        <MagazineSidebar />
        <main className='overflow-y-auto overflow-x-hidden md:col-span-full md:col-start-4 xl:col-start-3 scrollbar'>
          <Outlet />
        </main>
      </div>
    </>
  );
}
