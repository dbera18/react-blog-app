import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import styles from './HomePage.module.css';

function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      
      {/* Hero Section (The top part) */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>
          Welcome to My Awesome Blog
        </h1>
        <p className={styles.description}>
          This is the place where I share my thoughts on React, coding, and life. 
          Join the community and start reading! Thank You.
        </p>

        <div className={styles.buttonGroup}>
          <Link to="/login" className={`${styles.btn} ${styles.loginBtn}`}>
            Login
          </Link>
          <Link to="/blog" className={`${styles.btn} ${styles.exploreBtn}`}>
            Explore Blog
          </Link>
        </div>
      </div>

      {/* --- NEW: Features Section --- */}
      <div className={styles.featuresSection}>
        
        <div className={styles.featureCard}>
          <div className={styles.icon}>🚀</div>
          <h3>Fast & Modern</h3>
          <p>Built with the latest React hooks and CSS modules for speed.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>🌗</div>
          <h3>Dark Mode</h3>
          <p>Easy on your eyes. Toggle between light and dark themes instantly.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.icon}>💬</div>
          <h3>Interactive</h3>
          <p>Join the conversation! Leave comments and like your favorite posts.</p>
        </div>

      </div>
    </div>
  );
}

export default HomePage;