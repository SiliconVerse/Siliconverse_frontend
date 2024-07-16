import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/links';
import NavbarAuth from './navbar-auth';
import UserAvatar from './UserAvatar';
import { useAuth } from '../hooks/userAuth';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='p-8 bg-[#FDEFE9]'>
      <nav className='hidden md:flex justify-between items-center'>
        <Link
          to={'/'}
          className='block text-2xl font-bold'>
          Siliconverse
        </Link>

        <div className='flex justify-between items-center gap-3 md:gap-5 font-semibold'>
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              to={navLink.id}
              className='links'>
              {navLink.title}
            </Link>
          ))}
        </div>

        {user && <UserAvatar />}
        {!user && <NavbarAuth />}
      </nav>

      {/* Mobile Navbar */}
      <section className='md:hidden relative'>
        <div className='flex justify-between w-full'>
          <div>
            <Link
              to='/'
              className='text-2xl font-bold'>
              Siliconverse
            </Link>
          </div>

          <div className='text-4xl'>
            <BiMenuAltLeft onClick={handleOpen} />
          </div>
        </div>

        {open && (
          <div className='bg-[#FDEFE9] absolute w-full flex justify-center items-center flex-col gap-2 p-10'>
            {navLinks.map((navLink) => (
              <h2
                key={navLink.id}
                className='px-5 text-2xl font-semibold hover:underline'>
                <Link
                  to={navLink.id}
                  onClick={handleClose}
                  className='links'>
                  {navLink.title}
                </Link>
              </h2>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
