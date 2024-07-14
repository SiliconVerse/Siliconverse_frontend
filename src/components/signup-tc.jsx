import { Link } from 'react-router-dom';

function SignUpTC() {
  return (
    <div className='text-white'>
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
  );
}
export default SignUpTC;
