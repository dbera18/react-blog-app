import React, { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  // 1. State to hold the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 2. Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // For now, we just log it to check if it works.
    // In Step 6, we will call the "login" function here.
    console.log("Submitting:", username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Login</h2>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* Username Input */}
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password Input */}
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
          
        </form>
      </div>
    </div>
  );
}