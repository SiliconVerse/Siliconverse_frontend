import { useState } from 'react';
import { toast } from 'react-toastify';
import FieldInput from '../field-input';
import SubmitButton from '../submit-btn';

const MagazineAdminMainDetailsForm = ({
  userDetails,
  handleChange,
  cancelEdit,
  updateUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await updateUser(userDetails.uid, {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        stateOfResidence: userDetails.stateOfResidence,
        country: userDetails.country,
      });
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
    <form className='px-1 space-y-4 max-w-screen-sm' onSubmit={handleSave}>
      <h3>Edit Personal Details</h3>
      <div className='flex gap-3 w-full'>
        <FieldInput
          id={'firstName'}
          value={userDetails?.firstName}
          onChange={handleChange}
          label='first name'
          required
          placeholder='First Name'
          labelStyles='sr-only'
        />
        <FieldInput
          id={'lastName'}
          value={userDetails.lastName}
          onChange={handleChange}
          label='last name'
          required
          placeholder='Last Name'
          labelStyles='sr-only'
        />
      </div>
      <div className='flex gap-3 w-full'>
        <FieldInput
          id={'stateOfResidence'}
          value={userDetails.stateOfResidence}
          onChange={handleChange}
          label='state of residence'
          required
          placeholder='State of residence'
          labelStyles='sr-only'
        />
        <FieldInput
          id={'country'}
          value={userDetails.country}
          onChange={handleChange}
          label='country'
          required
          placeholder='Country'
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
};

export default MagazineAdminMainDetailsForm;
