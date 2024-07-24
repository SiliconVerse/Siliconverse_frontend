import { LogOut, User2Icon, VerifiedIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/userAuth';
import { useMemo } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../hooks/auth/firebase';

function UserMenu({ componentRef, closeModal }) {
  const { signout, user } = useAuth();
  const isVerified = useMemo(() => user.emailVerified, [user]);
  const verifyEmail = async () => {
    await sendEmailVerification(auth.currentUser);
    closeModal();
  };

  return (
    <div
      ref={componentRef}
      className='absolute top-10 z-[201] right-0 w-[200px] bg-white rounded-lg border border-primaryColor p-2'>
      {!isVerified && (
        <button
          onClick={verifyEmail}
          className='flex gap-3 hover:bg-primaryColor/90 p-2 rounded-lg text-primaryColor hover:text-white w-full'>
          <span>
            <VerifiedIcon size={28} />
          </span>
          <span>Verify Email</span>
        </button>
      )}
      <Link
        to={`/${user.role}-profile`}
        onClick={() => closeModal()}
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
