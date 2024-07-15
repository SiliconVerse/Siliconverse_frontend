import { Link } from 'react-router-dom';

function NavbarAuth() {
  return (
    <div className='flex justify-between items-center gap-5'>
      <Link
        to='/login'
        className='border border-primaryColor py-2 px-8 rounded-3xl text-black'>
        Signin
      </Link>
      <Link
        to='/signup'
        className='bg-primaryColor py-2 px-10 rounded-3xl text-white'>
        Create Account
      </Link>
    </div>
  );
}
export default NavbarAuth;
