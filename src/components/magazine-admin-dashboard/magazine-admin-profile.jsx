import { PencilIcon } from 'lucide-react';
import { useState } from 'react';
import fallbackImg from '../../assets/Generic-Profile-Image.webp';
import { useAuth } from '../../hooks/userAuth';
import { cn, formatDate } from '../../utils/util-functions';
import SidebarPhoto from '../side-bar-photo';
import MagazineAdminMainDetailsForm from './magazine-admin-main-details-form';
import MagazineAdminProfileEditForm from './magazine-admin-profile-edit-form';

export default function MagazineAdminProfile() {
  const { user, updateUserProfile } = useAuth();

  const [editMainDetails, setEditMainDetails] = useState(false);

  const [editOtherDetails, setEditOtherDetails] = useState(false);

  const initialDetails = {
    otherNames: '',
    phoneNumber: '',
    stateOfResidence: '',
    gender: '',
    bio: '',
    dob: '',
    country: '',
    profilePicture: fallbackImg,
    firstName: '',
    lastName: '',
    ...user,
  };

  const [userDetails, setUserDetails] = useState(initialDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const location = `${userDetails.stateOfResidence}${
    userDetails?.country ? ', ' + userDetails.country : ''
  }`;

  const handleGenderChange = (value) => {
    setUserDetails((prev) => ({ ...prev, gender: value }));
  };

  const resetDetails = () => {
    setUserDetails(initialDetails);
  };

  return (
    <>
      <section className=' shadow-sl rounded-sl py-5 relative px-4'>
        {editMainDetails ? (
          <MagazineAdminMainDetailsForm
            userDetails={userDetails}
            cancelEdit={() => {
              setEditMainDetails(false);
              resetDetails();
            }}
            updateUser={updateUserProfile}
            handleChange={handleChange}
          />
        ) : (
          <div className='flex gap-3 items-start '>
            <div className='relative rounded-full aspect-square group w-[68px] self-center'>
              <SidebarPhoto key={'desktop'} />
            </div>

            <div className='text-[#555555] w-full overflow-hidden space-y-1'>
              <p className='text-black font-medium truncate'>{`${userDetails?.firstName} ${userDetails?.lastName}`}</p>
              <p className='truncate'>{userDetails?.email}</p>
              <p className='truncate'>{location}</p>
            </div>

            <button
              className={
                'self-center text-white transition-all duration-200 ease-linear flex items-center bg-primaryColor gap-2 text-nowrap px-3 py-1 rounded hover:opacity-70'
              }
              onClick={() => setEditMainDetails(true)}
            >
              <PencilIcon size={20} />
              Edit
            </button>
          </div>
        )}
      </section>
      <section className='shadow-sl rounded-sl py-5 relative px-4 mt-8'>
        <h2 className='capitalize mb-5 text-black'>personal information</h2>
        {editOtherDetails ? (
          <MagazineAdminProfileEditForm
            userDetails={userDetails}
            handleChange={handleChange}
            updateUser={updateUserProfile}
            cancelEdit={() => {
              setEditOtherDetails(false);
              resetDetails();
            }}
            handleGenderChange={handleGenderChange}
          />
        ) : (
          <div className='space-y-3 text-[#343434]'>
            <div className='flex justify-between items-start'>
              <FieldRow title={'Last name'} value={userDetails.lastName} />
              <button
                className={
                  'self-center text-white transition-all duration-200 ease-linear flex items-center bg-primaryColor gap-2 text-nowrap px-3 py-1 rounded hover:opacity-70'
                }
                onClick={() => setEditOtherDetails(true)}
              >
                <PencilIcon size={20} />
                Edit
              </button>
            </div>

            <FieldRow title={'Other names'} value={userDetails.otherNames} />
            <FieldRow
              title={'Date of birth'}
              value={formatDate(userDetails.dob)}
            />
            <FieldRow title={'email address'} value={userDetails.email} />
            <FieldRow title={'Phone number'} value={userDetails.phoneNumber} />
            <FieldRow title={'Location'} value={location} />
            <FieldRow title={'Gender'} value={userDetails.gender} />
            <FieldRow
              title={'Bio'}
              value={userDetails.bio}
              className='max-w-3xl'
            />
          </div>
        )}
      </section>
    </>
  );
}

const FieldRow = ({ title, value, className = '' }) => {
  return (
    <p className={cn('space-x-2', className)}>
      <span>{title}:</span>
      <span>{value}</span>
    </p>
  );
};
