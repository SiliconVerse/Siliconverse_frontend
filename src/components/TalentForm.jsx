// import { sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../hooks/auth/firebase';
import useSendVerificationEmail from '../hooks/send-verification-email';
import { useAuth } from '../hooks/userAuth';
import PasswordViewer from './password-viewer';
import SignUpTC from './signup-tc';

const TalentForm = ({ handleCompanyClick }) => {
  const { signup, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const { sendEmailVerification } = useSendVerificationEmail();

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formValues.password !== formValues.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }
    if (formValues.password.length < 7) {
      alert('Password too short');
      setIsLoading(false);

      return;
    }

    const { email, password, firstName, lastName } = formValues;
    try {
      const { user } = await signup(email, password);

      if (user) {
        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          role: 'talent',
          internship_status: 'pending',
          date_joined: new Date(Date.now()).toLocaleString().split(',')[0],
        });
        await sendEmailVerification({
          email: user.email,
          displayName: firstName,
        });
        await updateUser(user);
      }

      toast.success('Registered successfully 🎉', { position: 'top-center' });
    } catch (error) {
      toast.success(error.message, { position: 'bottom-center' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='talent-form  relative bg-white/10 flex-col-reverse lg:flex-row gap-5 font-roboto'>
      <form onSubmit={handleSubmit} className='flex-shrink-0'>
        <div className='flex items-center justify-evenly gap-5 max-w-md bg-primaryColor border-white px-2 rounded-2xl my-4 mx-auto'>
          <button
            type='button'
            className='block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 font-bold text-nowrap'
          >
            Talent Signup
          </button>
          <button
            type='button'
            onClick={handleCompanyClick}
            className='block !border-primaryColor !bg-white !text-primaryColor !text-sm !capitalize !rounded-2xl !px-2 !p-2 hover:!bg-white/70 text-nowrap'
          >
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
        </div>

        <div className='w-full flex flex-col md:flex-row justify-between gap-3 md:gap-8'>
          <PasswordViewer
            label={'password'}
            value={formValues.password}
            name={'password'}
            setPassword={handleChange}
          />
          <PasswordViewer
            label={'Confirm Password'}
            name={'confirmPassword'}
            value={formValues.confirmPassword}
            setPassword={handleChange}
          />
        </div>

        <SignUpTC isLoading={isLoading} />
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
