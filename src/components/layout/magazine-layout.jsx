import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/userAuth';
import Navbar from '../Navbar';
import MagazineSidebar from '../magazine-admin-dashboard/navigation/magazine-sidebar';
import MagazineTopbar from '../magazine-admin-dashboard/navigation/magazine-topbar';
import Spinner from '../spinner';

export default function MagazineAdminLayout() {
  // add protection using user role i.e  if user.role !== magazine-admin then redirect to authorized access or page not found
  const { isAuthLoading, user } = useAuth();

  // remove comment after magazine-admin role is set
  // if (!user && !isAuthLoading) {
  //   return <Navigate to={'/login'} />;
  // }

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
      <MagazineTopbar />

      <div className='md:grid md:grid-cols-4 w-full h-[calc(100vh-9rem)] overflow-hidden relative'>
        <MagazineSidebar />
        <main className='overflow-y-auto overflow-x-hidden md:col-span-3 px-5 md:px-10 md:py-10'>
          <Outlet />
        </main>
      </div>
    </>
  );
}
