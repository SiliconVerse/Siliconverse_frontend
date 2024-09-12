import { Link } from 'react-router-dom';
import genericProfileImg from '../assets/Generic-Profile-Image.webp';
import { useAuth } from '../hooks/userAuth';

export default function ProtectedHeader() {
  const { user } = useAuth();

  const userImg = user?.profilePicture ?? genericProfileImg;
  return (
    <header className='w-full flex justify-between items-center fixed z-[200] md:z-auto md:relative bg-primaryColor top-0 text-white h-[113px] max-sm:h-[90px] px-5 md:px-8'>
      <Link to={'/'} className='border text-xs rounded-[10px] py-3 px-2'>
        Silicon Verse
      </Link>

      <div className='flex items-center gap-1'>
        <img
          src={userImg}
          alt=''
          className='w-10 max-sm:w-7 border border-off-white rounded-full'
          width={40}
          height={40}
        />
        <p className='flex flex-col capitalize text-xs font-bold md:text-sm '>
          <span>Hello</span>
          <span>{user?.firstName || 'Anon'}</span>
        </p>
      </div>
    </header>
  );
}
