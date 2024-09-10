import React, { useState } from 'react';
import { ReactPortal } from '../../hooks/portal';
import SubmitButton from '../submit-btn';

import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/userAuth';

export default function CompanyProfileEditForm({
  user,
  editCompanyProfile,
  setEditCompanyProfile,
  closeEditModal,
}) {
  const [formData, setFormData] = useState(user);

  const { updateUser } = useAuth();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // await updateUser(formData, true);
      toast.success('company profile updated successfully!');
    } catch (error) {
      console.log(error);

      toast.error('update failed!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReactPortal setState={setEditCompanyProfile}>
      <form
        className='bg-white max-sm:w-5/6 w-1/2 px-3 pt-5 pb-2 rounded-md'
        onSubmit={handleSave}
      >
        <div className='flex max-sm:flex-col gap-3'>
          <InputField
            value={formData.ceo}
            onChange={handleFormChange}
            label={'CEO Name'}
            id={'ceo'}
          />
          <InputField
            value={formData.organisation}
            onChange={handleFormChange}
            label={'Company Name'}
            id={'organisation'}
          />
        </div>

        <div className='my-3'>
          <InputField
            value={formData.address}
            onChange={handleFormChange}
            label={'Address'}
            id={'address'}
          />
        </div>

        <div className='flex gap-3 items-center mb-3'>
          <InputField
            value={formData.state}
            onChange={handleFormChange}
            label={'State'}
            id={'state'}
          />
          <InputField
            value={formData.country}
            onChange={handleFormChange}
            label={'Country'}
            id={'country'}
          />
        </div>

        <div className='flex justify-end items-center gap-3'>
          <button
            type='button'
            className='bg-red-500 rounded-lg capitalize text-white py-1 px-5'
            onClick={closeEditModal}
          >
            cancel
          </button>

          <SubmitButton
            text={'save'}
            className={
              'bg-green-500 rounded-lg capitalize text-white py-1 px-5'
            }
            isLoading={isLoading}
          />
        </div>
      </form>
    </ReactPortal>
  );
}

function InputField({
  type = 'text',
  value,
  onChange,
  label,
  id,
  required = true,
}) {
  return (
    <label className='flex flex-col gap-1'>
      {label}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className='border border-black/60 rounded-md py-1 w-full px-2'
        required={required}
      />
    </label>
  );
}
