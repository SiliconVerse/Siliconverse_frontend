import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../hooks/auth/firebase';
import { ReactPortal } from '../hooks/portal';
import { useAuth } from '../hooks/userAuth';
import { skillSet } from '../utils/skillset';
import InputField from './input-field';
import SubmitButton from './submit-btn';

const UserDataForm = ({ userData, setState }) => {
  const { updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: userData.phone ?? '',
    firstName: userData.firstName ?? '',
    lastName: userData.lastName ?? '',
    gender: userData.gender ?? '',
    email: userData.email ?? '',
    country: userData.country ?? '',
    stateOfResdidence: userData.stateOfResdidence ?? '',
    skillset: userData.skillset ?? '',
    university: userData.university ?? '',
    degree: userData.degree ?? '',
    github: userData.github ?? '',
    linkedIn: userData.linkedIn ?? '',
    website: userData.website ?? '',
    bio: userData.bio ?? '',
  });
  const [charCount, setCharCount] = useState(userData.bio?.length || 0);
  const maxCharLimit = 200;

  function isValidUrlRegex(url) {
    const regex = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return regex.test(url);
  }
  {/* work */}

  function getFormattedUrl(url) {
    if (isValidUrlRegex(url)) {
      return true;
    }

    return false;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'bio') {
      setCharCount(value.length); // Update char count for bio
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userRef = doc(db, 'Users', userData.uid);
      await updateDoc(userRef, formData);
      toast.success('profile updated successfully!', {
        position: 'top-center',
      });
      await updateUser(userData);
      setState(false);
    } catch (e) {
      console.error('Error updating document: ', e);
      toast.error('Update failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ReactPortal setState={setState}>
      <form
        className='bg-white max-sm:w-5/6 w-1/2 px-3 py-2 rounded-md overflow-y-scroll mx-auto h-[85%]'
        onSubmit={handleSubmit}
      >
        <div className='my-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <InputField
            value={formData.firstName}
            onChange={handleChange}
            label={'First Name*'}
            id={'firstName'}
            placeholder={'John'}
          />
          <InputField
            value={formData.lastName}
            onChange={handleChange}
            label={'Last Name*'}
            id={'lastName'}
            placeholder={'John'}
          />

          <Dropdown
            label={'Gender'}
            value={formData.gender}
            onChange={handleChange}
            firstOption={'Choose Gender'}
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            id={'gender'}
          />

          <Dropdown
            label={'Skillset*'}
            value={formData.skillset}
            onChange={handleChange}
            firstOption={'Choose a skillset'}
            options={skillSet.map((skill) => ({ value: skill, label: skill }))}
            id={'skillset'}
            required={true}
          />

          <InputField
            value={formData.phoneNumber}
            onChange={handleChange}
            label={'Phone Number*'}
            id={'phoneNumber'}
            placeholder={'09090900000'}
          />
          {/* <InputField
            type='email'
            value={formData.email}
            onChange={handleChange}
            label={'Email'}
            id={'email'}
            placeholder={'user@example.com'}
          /> */}
          <InputField
            value={formData.country}
            onChange={handleChange}
            label={'Country*'}
            id={'country'}
            placeholder={'Nigeria'}
          />
          <InputField
            value={formData.stateOfResidence}
            onChange={handleChange}
            label={'City/State of residence*'}
            id={'stateOfResidence'}
            placeholder={'Lagos'}
          />
          <InputField
            value={formData.university}
            onChange={handleChange}
            label={'University'}
            id={'university'}
            placeholder={'SiliconVerse University'}
            required={false}
          />
          <InputField
            value={formData.degree}
            onChange={handleChange}
            label={'Degree'}
            id={'degree'}
            placeholder={'Bachelors'}
            required={false}
          />
          <InputField
            value={formData.github}
            onChange={handleChange}
            label={'Github'}
            id={'github'}
            placeholder={'https://github.com/username'}
            required={false}
          >
            {formData.github.length > 1 && (
              <span className=' text-red-500 text-sm'>
                {!getFormattedUrl(formData.github) &&
                  'Invalid Link, do include https'}
              </span>
            )}
          </InputField>
          <InputField
            value={formData.linkedIn}
            onChange={handleChange}
            label={'LinkedIn'}
            id={'linkedIn'}
            placeholder={'https://linkedin.com/in/username'}
            required={false}
          >
            {formData.linkedIn.length > 1 && (
              <span className=' text-red-500 text-sm'>
                {!getFormattedUrl(formData.linkedIn) &&
                  'Invalid Link, do include https'}
              </span>
            )}
          </InputField>
          <InputField
            value={formData.website}
            onChange={handleChange}
            label={'Portfolio Link'}
            id={'website'}
            placeholder={'https://portfolio.com'}
            required={false}
          >
            {formData.website.length > 1 && (
              <span className=' text-red-500 text-sm'>
                {!getFormattedUrl(formData.website) &&
                  'Invalid Link, do include https'}
              </span>
            )}
          </InputField>
        </div>

        {/* Bio Section */}
        <div className='text-white gap-4 pt-3'>
          <label className='block text-sm font-medium' htmlFor='bio'>
            Bio
          </label>
          <div className='bio_text_box'>
            <textarea
              name='bio'
              value={formData.bio}
              onChange={handleChange}
              placeholder='Tell us about yourself...'
              rows={10}
              cols={50}
              maxLength={maxCharLimit}
            />
            <div className='char-count'>
              {charCount}/{maxCharLimit}
            </div>
          </div>
        </div>

        <div className='mt-4 flex items-center justify-end gap-3'>
          <button
            type='button'
            onClick={() => setState(false)}
            className='bg-red-500 rounded-lg capitalize text-white py-1 px-5 hover:opacity-85 transition-all ease-linear duration-200 focus-visible:ring-red-500'
          >
            Cancel
          </button>
          <SubmitButton
            className='bg-green-500 rounded-lg capitalize text-white py-1 px-5 focus-visible:ring-green-500 hover:opacity-85 transition-all ease-linear duration-200'
            text='save'
            isLoading={isLoading}
          />
        </div>
      </form>
    </ReactPortal>
  );
};
const Dropdown = ({
  value,
  onChange,
  options,
  label,
  id,
  firstOption,
  required = false,
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='' htmlFor={id}>
        {label}
      </label>
      <select
        name={id}
        id={id}
        className='border border-black/60 rounded-md py-1 w-full px-2 focus-visible:border-primaryColor bg-white outline-none focus-visible:outline-primaryColor/20'
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value=''>{firstOption}</option>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserDataForm;
