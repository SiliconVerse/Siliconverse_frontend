import { useState } from 'react';
import styles from './registerform.module.css';
import { CircleUser, LockKeyhole, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');

  function handleConfirmPassword(value) {
    setCpassword(value);
    if (value !== password) {
      setError('Passwords do not match');
      return;
    }

    setError('');
  }

  function handlePassword(value) {
    setPassword(value);
    if (password.length < 6) {
      setError('Passwords Must be longer than 6 characters');
    } else {
      setError('');
    }
  }

  function handleSubmit() {
    console.log(email, username, password);
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left_content}>
          <p>Work with experienced Professionals</p>
        </div>
      </div>
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.right_content}>
          <h2>Welcome to Silicon Verse!</h2>
          <h5>Where dreams become reality</h5>

          <div className={styles.auth}>
            <button>Signup with Google</button>
            <button>Signup with LinkedIn</button>
          </div>

          <div className={styles.divider}>
            <hr /> <p>OR</p> <hr />
          </div>

          <div className={styles.inputs}>
            <div style={{ position: 'relative' }}>
              <CircleUser size={24} className={styles.icon} />
              <input
                type='text'
                required
                name='username'
                value={username}
                placeholder='Enter Username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <Mail size={24} className={styles.icon} />
              <input
                type='email'
                required
                name='email'
                value={email}
                placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <LockKeyhole size={24} className={styles.icon} />
              <input
                type='text'
                required
                name='password'
                value={password}
                placeholder='Enter Password'
                onChange={(e) => handlePassword(e.target.value)}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <LockKeyhole size={24} className={styles.icon} />
              <input
                type='text'
                required
                name='cpassword'
                value={cpassword}
                placeholder='Confirm Password'
                onChange={(e) => handleConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className={styles.error}>{error}</p>}
          <button type='submit' className={styles.btn}>
            Login
          </button>
        </form>

        <p>
          Already have an account? <Link to={'/login'}>Login Here</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterForm;
