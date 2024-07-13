import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import countryOptions from './pages/countryOptions';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyPhone: '',
    organizationName: '',
    location: '',
    password: '',
    confirmPassword: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const {
      companyEmail: email,
      password,
      firstName,
      lastName,
      companyPhone,
      organizationName,
      location,
      state,
    } = formData;
    // Form submission logic
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          companyPhone: companyPhone,
          organizationName: organizationName,
          location: location,
          stateOfResdidence: state,
        });
      }
      console.log('Company successfully registered');
      toast.success('Registered Company successfully 🎉', {
        position: 'top-center',
      });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: 'bottom-center' });
    }

    console.log('Form data submitted:', formData);
  };

  return (
    <div className='talent-form relative bg-white/10'>
      <form onSubmit={handleSubmit}>
        <h2>Company Signup</h2>

        <div className='name'>
          <div>
            <label htmlFor='firstName'>First name:</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor='lastName'>Last name:</label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='contact'>
          <div>
            <label htmlFor='companyEmail'>Organization Email:</label>
            <input
              type='email'
              name='companyEmail'
              placeholder='Company Email'
              value={formData.companyEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor='tel'>Organization phone number:</label>
            <input
              type='tel'
              name='companyPhone'
              placeholder='Company Phone Number'
              value={formData.companyPhone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='age-location'>
          <div>
            <label htmlFor='organizationName'>Organization name:</label>
            <input
              type='text'
              name='organizationName'
              placeholder='Company name'
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <select
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
              style={{ width: '80%', marginLeft: '25%', marginTop: '13%' }}>
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

        <label htmlFor='state'>State located:</label>
        <input
          type='text'
          name='state'
          placeholder='State'
          value={formData.state}
          onChange={handleChange}
          required
        />

        <div className='password'>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor='confirmPassword'>Confirm password:</label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          className='talent-signup-button'
          type='submit'>
          Sign Up
        </button>

        <p>
          By signing up, you accept our{' '}
          <span style={{ color: '#ff5f15' }}>terms and conditions</span>
        </p>
        <p>
          Already have an account?
          <Link to='/login'>
            <span style={{ color: '#ff5f15' }}>Log in</span>
          </Link>
        </p>
      </form>
      <div className='text-talent'>
        <h3>
          <b className='text-title'>Welcome to Siliconverse</b>
          <br />
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space. <br />{' '}
          Siliconverse is a tech space for tech talents, who wish to look for
          internship, jobs and further their knowledge on the tech space.
        </h3>
      </div>
    </div>
  );
};

export default CompanyForm;
