import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../hooks/auth/firebase';
import { ReactPortal } from '../../hooks/portal';
import SubmitButton from '../submit-btn';

import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/userAuth';
import InputField from '../input-field';

export default function CompanyProfileEditForm({
  user,
  setEditCompanyProfile,
  closeEditModal,
}) {
  const [formData, setFormData] = useState({
    ceo: user?.ceo || '',
    stateOfResidence: user?.stateOfResidence || '',
    country: user?.country || '',
    address: user?.address || '',
    organizationName: user?.organizationName || '',
    type: user?.type || '',
    bio: user?.bio || '',
  });
  const [charCount, setCharCount] = useState(user.bio?.length || 0);
  const maxCharLimit = 200;
  

  const { updateUser } = useAuth();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "bio") {
      setCharCount(value.length);  // Update char count for bio
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const docRef = doc(db, 'Users', user.uid);
      await updateDoc(docRef, formData);
      updateUser({ ...formData, ...user });
      toast.success('company profile updated successfully!');
      closeEditModal();
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
            placeholder='John Doe'
            required={false}
          />
          <InputField
            value={formData.organizationName}
            onChange={handleFormChange}
            label={'Company Name*'}
            id={'organizationName'}
            placeholder='SiliconVerse'
          />
        </div>

        <div className='my-3 max-sm:flex-col gap-3 flex'>
          <InputField
            value={formData.address}
            onChange={handleFormChange}
            label={'Address'}
            id={'address'}
            placeholder='123 express avenue'
            required={false}
          />
          <InputField
            value={formData.type}
            onChange={handleFormChange}
            label={'Company Type'}
            placeholder='Tech Hub'
            id={'type'}
            required={false}
          />
        </div>

        <div className='flex gap-3 items-center mb-3'>
          <InputField
            value={formData.stateOfResidence}
            onChange={handleFormChange}
            label={'State*'}
            id={'stateOfResidence'}
            placeholder='Lagos'
          />
          <InputField
            value={formData.country}
            onChange={handleFormChange}
            label={'Country*'}
            id={'country'}
            placeholder='Nigeria'
          />
        </div>

        {/* Bio Section */}
      <div className="text-white gap-4 pt-3">
        <label className="text-lg font-medium text-black" htmlFor="bio">
          Bio
        </label>
        <div className="bio_text_box">
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleFormChange}
            placeholder="Tell us about company..."
            rows={10}
            cols={50}
            maxLength={maxCharLimit}
          />
          <div className="char-count">
            {charCount}/{maxCharLimit}
          </div>
        </div>
      </div>

        <div className='flex justify-end items-center gap-3'>
          <button
            type='button'
            className='bg-red-500 rounded-lg capitalize text-white py-1 px-5 hover:opacity-85 transition-all ease-linear duration-200 focus-visible:ring-red-500'
            onClick={closeEditModal}
          >
            cancel
          </button>

          <SubmitButton
            text={'save'}
            className={
              'bg-green-500 rounded-lg capitalize text-white py-1 px-5 hover:opacity-85 transition-all ease-linear duration-200 focus-visible:ring-green-500'
            }
            isLoading={isLoading}
          />
        </div>
      </form>
    </ReactPortal>
  );
}
