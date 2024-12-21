import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SubmitButton from '../components/submit-btn';
import { useAuth } from '../hooks/userAuth';

export default function CompleteSignup() {
  const { user, updateUserProfile } = useAuth();

  const navigate = useNavigate();

  const [role, SetRole] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const redirectUrl = `/${user.role}-profile`;

  const handleInputChange = (event) => {
    SetRole(event.target.value);
  };

  if (!user) {
    return <Navigate to={'/login'} />;
  }

  if (user?.role) {
    return <Navigate to={redirectUrl} />;
  }

  const handleRoleSelection = async (event) => {
    event.preventDefault();

    if (!role) {
      toast.info('Please select one to continue');
    }

    setIsLoading(true);

    try {
      updateUserProfile(user.uid, { role });
      navigate(redirectUrl);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred,Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex flex-col items-center justify-center min-h-dvh py-5 bg-primaryColor/50'>
      <div className='bg-white w-11/12 max-w-sm px-5 md:px-10 py-5 rounded-sl'>
        <h2 className='text-lg'>One more step left</h2>

        <form onSubmit={handleRoleSelection} className=' flex flex-col gap-5'>
          <div className='border px-10 py-4 space-y-5 my-4 rounded-sl'>
            <div className='w-full'>
              <input
                type='radio'
                name='role'
                id='talent'
                value={'talent'}
                onChange={handleInputChange}
                checked={role === 'talent'}
                className='hidden peer'
              />
              <label
                htmlFor='talent'
                className='bg-white text-primaryColor border border-primaryColor rounded-sl w-full inline-block text-center capitalize py-2 peer-checked:bg-primaryColor/60 peer-checked:text-white min-w-32 cursor-pointer hover:bg-primaryColor/20 transition-all ease-linear duration-200'
              >
                talent
              </label>
            </div>

            <div className='w-full'>
              <input
                type='radio'
                name='role'
                id='company'
                value={'company'}
                onChange={handleInputChange}
                checked={role === 'company'}
                className='peer hidden'
              />
              <label
                htmlFor='company'
                className='bg-white text-primaryColor border border-primaryColor rounded-sl w-full inline-block text-center capitalize py-2 peer-checked:bg-primaryColor/60 peer-checked:text-white cursor-pointer hover:bg-primaryColor/20 transition-all ease-linear duration-200'
              >
                company
              </label>
            </div>
          </div>

          <SubmitButton
            text={'continue'}
            isLoading={isLoading}
            className={
              'capitalize bg-primaryColor text-white py-2 rounded-sl font-bold text-lg'
            }
          />
        </form>
      </div>
    </section>
  );
}
