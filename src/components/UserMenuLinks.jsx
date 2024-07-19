import { LogOut, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';

function UserMenu({ componentRef }) {
  const { signout, user } = useAuth();

  return (
    <div
      ref={componentRef}
      className='absolute top-10 z-[201] right-0 w-[200px] bg-white rounded-lg border border-primaryColor p-2'>
      <Link
        to={`/${user.role}-profile`}
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

export default UserMenu;
