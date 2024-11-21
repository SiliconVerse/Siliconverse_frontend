import { useState } from 'react';
import { toast } from 'react-toastify';
import FieldInput from '../field-input';
import SubmitButton from '../submit-btn';

export default function MagazineAdminProfileEditForm({
  userDetails,
  updateUser,
  handleChange,
  cancelEdit,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const details = {
      otherNames: userDetails.otherNames,
      phoneNumber: userDetails.phoneNumber,
      gender: userDetails.phoneNumber,
      bio: userDetails.bio,
      dob: userDetails.dob,
    };

    try {
      await updateUser(userDetails.uid, details);
      toast.success('profile updated successfully!', {
        position: 'top-center',
      });
      cancelEdit(); // close edit mode
    } catch (e) {
      console.error('Error updating document: ', e);
      toast.error('Update failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className='px-1 space-y-4 max-w-screen-sm'>
      <div className='flex gap-3 w-full'>
        <FieldInput
          id={'otherNames'}
          value={userDetails.otherNames}
          onChange={handleChange}
          label='Other names'
          placeholder='Other names'
          labelStyles='sr-only'
        />
        <FieldInput
          id={'dob'}
          value={userDetails.dob}
          onChange={handleChange}
          label='Date of birth'
          required
          placeholder='Date of birth'
          labelStyles='sr-only'
          type='date'
        />
        <FieldInput
          id={'phoneNumber'}
          value={userDetails.phoneNumber}
          onChange={handleChange}
          label='Phone number'
          placeholder='Phone number'
          labelStyles='sr-only'
        />

        <FieldInput
          id={'gender'}
          value={userDetails.otherNames}
          onChange={handleChange}
          label='Other names'
          placeholder='Other names'
          labelStyles='sr-only'
        />
      </div>

      <div className='flex items-center gap-3 justify-between py-4 md:max-w-sm md:justify-start'>
        <button
          className='border border-primaryColor text-primaryColor w-full block py-2 rounded-sl transition-all duration-200 ease-linear hover:opacity-75 md:w-fit md:px-5'
          type='button'
          onClick={cancelEdit}
        >
          Cancel
        </button>
        <SubmitButton
          text={'Save'}
          className={
            'bg-primaryColor text-white w-full block py-2 rounded-sl transition-all duration-200 ease-linear hover:opacity-75 md:w-fit md:px-5'
          }
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
