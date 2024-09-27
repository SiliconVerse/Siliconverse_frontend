import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import UserDataForm from './update-user-data';

export default function UserData({ user }) {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const toggleEditModal = () => {
    setOpenUpdateModal((prev) => !prev);
  };

  return (
    <div className='boxShadow rounded-sl py-4 px-3 md:p-7 border w-full max-w-screen-lg'>
      <h1 className='font-bold text-2xl mb-1'>My Information</h1>
      <p>
        Updating your information will offer you the most relevant content and
        conversations
      </p>

      <button
        className={
          'block mt-2 hover:text-primaryColor/80 transition-all duration-200 ease-linear'
        }
        onClick={toggleEditModal}
      >
        {' '}
        <CiEdit /> Edit
      </button>
      <div className='md:grid md:grid-cols-3 mt-6 md:gap-8'>
        <div className='space-y-5'>
          <Field
            title={'Internship status*'}
            value={user?.status || 'Pending'}
          />
          <Field
            title={'Full name*'}
            value={`${user?.firstName || '-'} ${user?.lastName || ''}`}
            valueStyles='capitalize'
          />

          <Field
            title={'Location*'}
            value={`${user?.stateOfResidence || '-'}${
              user.country ? `(${user?.country})` : ''
            }`}
            valueStyles='capitalize'
          />

          <Field
            title={'University or college'}
            value={user?.university || '-'}
          />
          <Field title={'Degree type'} value={user?.degree || '-'} />
        </div>

        <div className='space-y-5'>
          <Field title={'Phone*'} value={user?.phoneNumber || '-'} />
          <Field title={'Email*'} value={user?.email || '-'} />
          <Field
            title={'Skillset*'}
            value={user?.skillset || '-'}
            valueStyles='capitalize'
          />
          <Field
            title={'Gender'}
            value={user?.gender || '-'}
            valueStyles='capitalize'
          />
          <Field
            title={'Bio'}
            value={user?.bio || '-'}
            valueStyles='capitalize'
          />
        </div>
      </div>

      {openUpdateModal && (
        <UserDataForm userData={user} setState={setOpenUpdateModal} />
      )}
    </div>
  );
}

const Field = ({ title, value, valueStyles = '' }) => {
  return (
    <div className='text-xl'>
      <h4 className='font-normal text-nowrap'>{title}</h4>
      <p className={`text-primaryColor truncate ${valueStyles}`}>{value}</p>
    </div>
  );
};
