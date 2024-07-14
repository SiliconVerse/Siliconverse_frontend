import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center justify-between flex-col py-[4%] gap-10'>
      <h1 className='text-xl text-primaryColor'>Oops, Page not NotFound</h1>
      <h4 className='text-sm text-gray-500'>
        Still in development, apologies for the inconveniences
      </h4>

      <div className='mx-auto flex gap-5'>
        <button
          onClick={() => navigate(-1)}
          className='underline text-primaryColor capitalize p-0 border-0 cursor-pointer'>
          Return Back
        </button>
        <Link
          to={'/'}
          className='underline text-primaryColor capitalize'>
          Home
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
