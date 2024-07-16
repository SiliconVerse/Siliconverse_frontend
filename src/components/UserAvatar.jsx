import { useEffect, useRef, useState } from 'react';
import profileBigImg from '../assets/profileImgBig.png';
import { LogOut, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

function UserAvatar() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const modalRef = useRef();

  // Helper function for closing the modal on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setOpenUserMenu(!openUserMenu);
  };
  return (
    <section className='relative'>
      <div className='h-10 aspect-square rounded-full overflow-hidden border-2 border-white'>
        <img
          src={profileBigImg}
          alt='Profile Picture'
          className='w-full h-full object-cover object-top'
          onClick={handleClick}
        />
      </div>

      {openUserMenu && <UserMenu componentRef={modalRef} />}
    </section>
  );
}
export default UserAvatar;

function UserMenu({ componentRef }) {
  const { signout } = useAuth();

  return (
    <div
      ref={componentRef}
      className='absolute top-10 z-20 right-0 w-[200px] bg-white rounded-lg border border-primaryColor p-2'>
      <Link
        to={'/user-profile'}
        className='flex gap-3 hover:bg-primaryColor/90 p-2 rounded-lg text-primaryColor hover:text-white'>
        <span>
          <User2Icon size={28} />
        </span>
        <span>Profile</span>
      </Link>
      <button
        onClick={() => signout()}
        className='flex gap-3 hover:bg-primaryColor/90 p-2 rounded-lg text-primaryColor hover:text-white w-full'>
        <span>
          <LogOut size={28} />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
}
