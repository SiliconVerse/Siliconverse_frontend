import { PencilIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import fallbackImg from '../../assets/Generic-Profile-Image.webp';
import { useAuth } from '../../hooks/userAuth';
import { cn } from '../../utils/util-functions';
import SidebarPhoto from '../side-bar-photo';
import SubmitButton from '../submit-btn';

export default function MagazineAdminProfile() {
  const { user, updateUserProfile } = useAuth();

  const [editMainDetails, setEditMainDetails] = useState(false);

  const [editOtherDetails, setEditOtherDetails] = useState(false);

  const [userDetails, setUserDetails] = useState({
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className=' boxShadow rounded-sl py-5 relative px-1'>
      {editMainDetails ? (
        <MagazineAdminMainDetailsForm
          userDetails={userDetails}
          cancelEdit={() => setEditMainDetails(false)}
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
            <p className='truncate'>{`${userDetails.stateOfResidence}${
              userDetails?.country ? ', ' + userDetails.country : ''
            }`}</p>
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
  );
}

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

function FieldInput({
  label = '',
  type = 'text',
  value,
  id,
  onChange,
  wrapperStyles,
  className = '',
  labelStyles = '',
  ...otherInputProps
}) {
  return (
    <label className={cn('w-full flex flex-col gap-1', wrapperStyles)}>
      <span className={cn('capitalize font-medium', labelStyles)}>{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full border h-11 px-2 rounded outline-none focus-visible:outline-primaryColor/30',
          className
        )}
        {...otherInputProps}
      />
    </label>
  );
}
