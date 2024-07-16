import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';
import countryOptions from '../utils/country-options';
import SignUpTC from './signup-tc';
import { skillSet } from '../utils/skillset';
import { useAuth } from '../hooks/userAuth';
import { db } from '../hooks/auth/firebase';

const TalentForm = ({ handleCompanyClick }) => {
  const { signup, updateUser } = useAuth();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skillset: '',
    dob: '',
    country: '',
    state: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      skillset,
      dob,
      country,
      state,
    } = formValues;
    // Form submission logic
    try {
      const { user } = await signup(email, password);

      console.log(user);
      if (user) {
        console.log(user.uid);
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          skillset: skillset,
          dateOfBirth: dob,
          country: country,
          stateOfResdidence: state,
          role: 'talent',
        });
        console.log(user);
        await updateUser(user.uid);
      }

      toast.success('Registered successfully 🎉', { position: 'top-center' });
    } catch (error) {
      toast.success(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div className='talent-form  relative bg-white/10 flex-col-reverse lg:flex-row gap-5 font-roboto'>
      <form
        onSubmit={handleSubmit}
        className='flex-shrink-0'>
        <div className='flex items-center justify-evenly gap-5 max-w-md bg-primaryColor border-white px-2 rounded-2xl my-4 mx-auto'>
          <button
            type='button'
            className='block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 font-bold text-nowrap'>
            Talent Signup
          </button>
          <button
            type='button'
            onClick={handleCompanyClick}
            className='block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 text-nowrap'>
            Company Signup
          </button>
        </div>
        {/*  */}
        <h2 className='text-lg md:text-2xl'>Talent Signup</h2>

        <div className='w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8'>
          <div className='w-full'>
            <label htmlFor='firstName'>First name:</label>
            <input
              className='w-full'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-full'>
            <label htmlFor='lastName'>Last name:</label>
            <input
              className='w-full'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8'>
          <div className='w-full'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-full'>
            <label htmlFor='tel'>Phone number:</label>
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              value={formValues.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='py-3'>
          <select
            name='skillset'
            value={formValues.skillset}
            onChange={handleChange}
            required>
            <option
              value={'defaultValue'}
              defaultValue={'default'}>
              Select Skill
            </option>
            {skillSet.map((skill) => (
              <option
                key={skill.value}
                value={skill.value}>
                {skill.text}
              </option>
            ))}
          </select>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8'>
          <div className='w-full'>
            <label htmlFor='date'>Date of Birth:</label>
            <input
              type='date'
              name='dob'
              placeholder='Date of Birth'
              className='!m-0'
              value={formValues.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-full'>
            <label htmlFor='country'>Current Location:</label>

            <select
              name='country'
              value={formValues.country}
              onChange={handleChange}
              required
              id='country'
              className='!m-0'>
              <option
                value=''
                disabled>
                Current Location (Country)
              </option>
              {countryOptions.map((country) => (
                <option
                  key={country}
                  value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='py-3'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            name='state'
            placeholder='State'
            value={formValues.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8'>
          <div className='w-full'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-full'>
            <label htmlFor='confirmPassword'>Confirm password:</label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <SignUpTC />
      </form>

      <div className='rounded-lg text-sm md:text-base border border-primaryColor p-4 text-white mx-auto flex flex-col gap-4 items-center justify-center'>
        <h3 className='text-center font-roboto font-bold text-xl md:text-xl'>
          Welcome to Siliconverse
        </h3>
        <p>
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space. <br />{' '}
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space.
        </p>
      </div>
    </div>
  );
};

export default TalentForm;
