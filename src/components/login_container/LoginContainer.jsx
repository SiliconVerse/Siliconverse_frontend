import { LucideEye, LucideEyeOff } from 'lucide-react';
import styles from './login_container.module.css';
import { useState } from 'react';

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password, checked });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <div className={styles.formGroup}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <LucideEyeOff
                size={24}
                className={styles.icon}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <LucideEye
                size={24}
                className={styles.icon}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        <div className={styles.notify}>
          <span>
            <input
              type='checkbox'
              name='loggedIn'
              checked={checked}
              className={styles.checkbox}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <p> Keep me logged in</p>
          </span>
          <span className={styles.forgotPassword}>Forgot Password?</span>
        </div>

        <button type='submit' className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginContainer;
