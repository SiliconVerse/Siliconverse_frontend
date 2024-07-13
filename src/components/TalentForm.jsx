import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import countryOptions from './pages/countryOptions';

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
    <div className='talent-form relative bg-white/10'>
      <form onSubmit={handleSubmit}>
        <h2>Talent Signup</h2>

        <div className='name'>
          <div>
            <label htmlFor='firstName'>First name:</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formValues.firstName}
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
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='contact'>
          <div>
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

          <div>
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

        <div className='age-location'>
          <div>
            <label htmlFor='date'>Date of Birth:</label>
            <input
              type='date'
              name='dob'
              placeholder='Date of Birth'
              value={formValues.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <select
              name='country'
              value={formValues.country}
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

        <label htmlFor='state'>State:</label>
        <input
          type='text'
          name='state'
          placeholder='State'
          value={formValues.state}
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
              value={formValues.password}
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
              value={formValues.confirmPassword}
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

export default TalentForm;
