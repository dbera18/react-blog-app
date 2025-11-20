import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // 1. Import useNavigate
import { useAuth } from '../context/AuthContext'; // 2. Import useAuth
import { useTheme } from '../context/ThemeContext';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 3. Get the tools we need
  const { login } = useAuth(); 
  const navigate = useNavigate(); 
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 4. Validation: Make sure fields aren't empty
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    // 5. Call the login function from Context
    // We pass the data the user typed in.
    const success = login(username, password);

    // 6. Check if login worked
    if (success) {
      // If true, redirect to the blog page
      navigate('/blog');
    } else {
      // If false, show an error
      alert("Invalid username or password. (Try 'admin' and '123')");
    }
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Login</h2>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
         

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
