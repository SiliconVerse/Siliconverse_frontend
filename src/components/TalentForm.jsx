import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import countryOptions from '../utils/country-options';

const TalentForm = () => {
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
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          skillset: skillset,
          dateOfBirth: dob,
          country: country,
          stateOfResdidence: state,
        });
      }
      toast.success('Registered successfully 🎉', { position: 'top-center' });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: 'bottom-center' });
    }
    console.log('Form submitted successfully', formValues);
  };

  return (
    <div className='talent-form  relative bg-white/10 flex-col-reverse lg:flex-row gap-5 font-roboto'>
      <form
        onSubmit={handleSubmit}
        className='flex-shrink-0'>
        <h2>Talent Signup</h2>

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
              value=''
              disabled>
              Select Skillset
            </option>
            <option value='frontend'>Frontend Development</option>
            <option value='backend'>Backend Development</option>
            <option value='fullstack'>Full Stack Development</option>
            <option value='dataScience'>Data Science</option>
            <option value='machineLearning'>Machine Learning</option>
            <option value='devOps'>DevOps</option>
            <option value='cyberSecurity'>Cyber Security</option>
            <option value='mobileDevelopment'>Mobile Development</option>
            <option value='uiuxDesign'>UI/UX Design</option>
            <option value='graphicDesign'>Graphic Design</option>
            <option value='photography'>Photography</option>
            <option value='projectManagement'>Project management</option>
            <option value='productManagement'>Product management</option>
            {/* Add more options */}
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

        <div>
          <button
            className='talent-signup-button'
            type='submit'>
            Sign Up
          </button>
          <p>
            By signing up, you accept our{' '}
            <span className='text-primaryColor text-base md:text-lg drop-shadow-md font-roboto'>
              terms and conditions
            </span>
          </p>
          <p>
            Already have an account?
            <Link to='/login'>
              <span className='text-primaryColor text-base md:text-lg drop-shadow-md font-roboto'>
                Log in
              </span>
            </Link>
          </p>
        </div>
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
