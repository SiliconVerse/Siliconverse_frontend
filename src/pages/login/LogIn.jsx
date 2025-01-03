import { signInWithPopup } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleLogo from '../../assets/google-logo.png';
import PasswordViewer from '../../components/password-viewer';
import SubmitButton from '../../components/submit-btn';
import { auth, provider } from '../../hooks/auth/firebase';
import useSendVerificationEmail from '../../hooks/send-verification-email';
import { useAuth } from '../../hooks/userAuth';
import './logIn.css';

const LoginForm = () => {
  const location = useLocation();
 
  const { sendEmailVerification } = useSendVerificationEmail();

  const queryParams = new URLSearchParams(location.search);

  const message = useMemo(() => queryParams.get('message'), [queryParams]);
  const [formData, setFormData] = useState({
    email: message ?? '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { signin, updateUser, user: authUser } = useAuth();

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { user } = await signin(formData.email, formData.password);
      if (!user.emailVerified) {
        await sendEmailVerification(user);
        return;
      }
      setErrorMessage('');
      updateUser(user, true);
      toast.success('Logged in successfully 🎉', { position: 'top-center' });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInwithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (!result.user.emailVerified) {
        await sendEmailVerification(result.user);
        return;
      }
      setErrorMessage('');
      updateUser(result.user, true);
      toast.success('Logged in successfully 🎉', { position: 'top-center' });
    } catch (error) {
      toast.error('Error logging in with Google, please try again later.');
    }
  };

  if (authUser && authUser.role) {
    const redirectTo = `/${authUser.role}-profile`;

    return <Navigate to={redirectTo} />;
  }

  return (
    <div className='login-container flex items-center justify-center flex-col  p-7 md:p-11 lg:p-14 min-h-[calc(100vh-106px) font-roboto w-full'>
      <div className='login-form rounded-lg gap-5 md:gap-10  bg-black/20 relative flex flex-col-reverse md:grid md:grid-cols-2 w-full justify-between'>
        <div className='mt-10 text-white w-full max-w-sm mx-auto'>
          <p className='text-center font-bold text-red-500 text-lg'>
            {errorMessage && errorMessage}
            {message && 'Please check your email for verification'}
          </p>
          <div className='form-titles flex-col'>
            <h2 className='font-bold text-xl text-center'>Log in</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {!message && (
              <div
                onClick={handleSignInwithGoogle}
                className='flex flex-shrink-0 gap-2 rounded-lg my-4 cursor-pointer py-2 bg-white text-primaryColor items-center mx-auto px-5 justify-center w-fit'
              >
                <p className='text-center w-fit text-nowrap'>
                  Sign in with Google
                </p>
                <img
                  src={GoogleLogo}
                  alt='google logo'
                  className='aspect-square object-cover bg-none border-none block h-8 w-8 md:h-8 md:w-h-8 rounded-full mx-auto '
                />
              </div>
            )}
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                className='text-black'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <PasswordViewer
              name={'password'}
              label={'Password'}
              value={formData.password}
              setPassword={handleChange}
            />

            <div>
              <span className='text-primaryColor'>Forgot Password?</span>
              <SubmitButton text='Login' isLoading={isLoading} />
              <p className='text-center'>
                Don't have an account?
                <NavLink to='/signup'>
                  <span className='text-primaryColor'> Sign up</span>
                </NavLink>
              </p>
            </div>
          </form>
        </div>

        <div className='rounded-lg text-sm md:text-base bg-primaryColor/60 p-4 text-white mx-auto flex flex-col gap-4 items-center justify-center w-full text-center'>
          <h3 className='text-center font-roboto font-bold text-xl md:text-xl'>
            Welcome to Siliconverse
          </h3>
          <p>
            Siliconverse is a tech space for tech talents, who wish to look for
            internship, jobs and further their knowledge on the tech space.{' '}
            <br /> Siliconverse is a tech space for tech talents, who wish to
            look for internship, jobs and further their knowledge on the tech
            space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
