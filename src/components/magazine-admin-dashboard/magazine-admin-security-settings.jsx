import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../hooks/auth/firebase';
import { useAuth } from '../../hooks/userAuth';
import FieldInput from '../input-field';
import SubmitButton from '../submit-btn';

export default function MagazineAdminSecuritySettings() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    oldPassword: '',
    newPassword: '',
  };
  const [authDetails, setAuthDetails] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuthDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        authDetails.oldPassword
      );

      await reauthenticateWithCredential(auth.currentUser, credential);

      await updatePassword(auth.currentUser, authDetails.newPassword);
      setAuthDetails(initialState);
      toast.success('Password changed!');
    } catch (error) {
      console.log(error, 'password change error');

      toast.error(
        'Error changing password or Credentials error,please try again later'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className='shadow-sl rounded-sl py-5 relative px-4 mt-8'
      onSubmit={handleChangePassword}
    >
      <h2 className='mb-5'>Change password</h2>

      <div className='flex flex-col gap-8 md:flex-row max-w-2xl'>
        <FieldInput
          id={'oldPassword'}
          value={authDetails.oldPassword}
          onChange={handleChange}
          label='Old password'
          required
          placeholder=''
          labelStyles=''
          type='password'
          wrapperStyles={'gap-3'}
          className='border-[#D1D1D1]'
        />
        <FieldInput
          id={'newPassword'}
          value={authDetails.newPassword}
          onChange={handleChange}
          label='New password'
          required
          placeholder=''
          labelStyles=''
          type='password'
          wrapperStyles={'gap-3'}
          className='border-[#D1D1D1]'
        />
      </div>

      <div className='flex justify-center mt-16 md:mt-20'>
        <SubmitButton
          className={
            'bg-primaryColor text-white py-1 inline-block px-3 rounded hover:opacity-80'
          }
          isLoading={isLoading}
          text={'Save changes'}
        />
      </div>
    </form>
  );
}
