import { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../utils/links';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='p-8 bg-[#FDEFE9]'>
      <div className='hidden md:block'>
        <nav className='flex justify-between items-center'>
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

          <div className='flex justify-between items-center gap-5'>
            <button className='border border-primaryColor py-2 px-8 rounded-3xl text-black'>
              <NavLink to='/login'>Signin</NavLink>
            </button>
            <button className='bg-primaryColor py-2 px-10 rounded-3xl text-white'>
              <NavLink to='/signup'>Create Account</NavLink>
            </button>
          </div>
        </nav>
      </div>

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

            <div className='flex flex-col justify-between items-center gap-5'>
              <button className='border border-primaryColor py-2 px-8 rounded-3xl text-black'>
                <NavLink to='/login'>Signin</NavLink>
              </button>
              <button className='bg-primaryColor py-2 px-10 rounded-3xl text-white'>
                <NavLink to='/signup'>Create Account</NavLink>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
