import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import MagazineSidebar from '../magazine-admin-dashboard/navigation/magazine-sidebar';
import MagazineTopbar from '../magazine-admin-dashboard/navigation/magazine-topbar';

export default function MagazineAdminLayout() {
  // add protection using user role i.e  if user.role !== magazine-admin then redirect to authorized access or page not found

  return (
    <>
      <Navbar />
      <MagazineTopbar />
      <div className='grid md:grid-cols-4 w-full h-[calc(100vh-9rem)] overflow-hidden relative'>
        <MagazineSidebar />
        <main className='overflow-y-auto  md:col-span-3 my-10 mx-5 md:mx-10'>
          <Outlet />
        </main>
      </div>
    </>
  );
}
