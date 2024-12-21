import { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import FieldInput from '../field-input';
import SubmitButton from '../submit-btn';
import TextareaWithCharCount from '../textarea-with-char-count';

export default function MagazineAdminProfileEditForm({
  userDetails,
  updateUser,
  handleChange,
  cancelEdit,
  handleGenderChange,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const genders = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
  ];

  const customStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'inherit',
      padding: '',
      border: 'none',
      boxShadow: 'none',
      height: '44px',
    }),
  };

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
    <form className='px-1 space-y-4 max-w-screen-sm' onSubmit={handleSave}>
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
      </div>
      <div className='flex gap-3 w-full'>
        <FieldInput
          id={'phoneNumber'}
          value={userDetails.phoneNumber}
          onChange={handleChange}
          label='Phone number'
          placeholder='Phone number'
          labelStyles='sr-only'
        />

        <label className='border px-2 rounded w-full'>
          <Select
            options={genders}
            defaultValue={userDetails.gender}
            onChange={(valueObj) => {
              handleGenderChange(valueObj.value);
            }}
            styles={customStyles}
            className='w-full'
            placeholder='Select gender'
          />
        </label>
      </div>
      <TextareaWithCharCount
        value={userDetails.bio}
        id={'bio'}
        onChange={handleChange}
        label='Bio'
        labelStyles='sr-only'
        rows={3}
      />

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
