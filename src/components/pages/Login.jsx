import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// import "../Styles.css"

// import axios from "axios"

const signupLink = {
  color: 'blue',
};

const formContainer = {
  marginTop: '70px',
};

const loginContainer = {
  fontFamily: "'Poppins', sans-serif ",
};

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  //   async function submit(e) {
  //     e.preventDefault();

  //     try {
  //       await axios
  //         .post('http://localhost:4000/login', {
  //           email,
  //           password,
  //         })
  //         .then((res) => {
  //           if (res.data === 'Successfully logged in') {
  //             history('/interns', { state: { id: email } });
  //           } else if (res.data === 'Wrong email or password') {
  //             alert('Wrong username or password');
  //           }
  //         })
  //         .catch((e) => {
  //           alert('Wrong email or password');
  //           console.log(e);
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  return (
    <div style={loginContainer} className='signup-container'>
      <div className='signup-text-container'>
        <br />
        <h3>Silicon verse</h3>

        <h2>{"Let's Get Started"}</h2>
      </div>
      <div style={formContainer} className='login-form-container'>
        <form action='/signup' method='post'>
          {' '}
          <br />
          <h2>
            {' '}
            Welcome Back <hr />
          </h2>
          <br />
          <input
            name='email'
            type='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='Email'
          />
          {/* <FontAwesomeIcon icon={faEnvelope} className='icon' /> <br /> <br /> */}
          <input
            name='password'
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='Password'
          />
          {/* <FontAwesomeIcon icon={faLock} className='icon' /> <br /> */}
          <br />
          <button type='submit' name='submitBtn'>
            Login
          </button>{' '}
          <br />
          <div>
            <p>
              {"Don't have an account?"}
              <a style={signupLink} href='/signup'>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
