import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext'; // 1. Import useAuth
import styles from './Navbar.module.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth(); // 2. Get user and logout function

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link to="/">My Blog</Link>
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/blog" className={styles.navLink}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>

            {/* 3. CONDITIONAL RENDERING START */}
            {user ? (
              // IF LOGGED IN: Show Name and Logout Button
              <>
                <li className={styles.welcomeMsg}>
                  Hi, {user.username}
                </li>
                <li>
                  <button onClick={logout} className={styles.logoutBtn}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // IF LOGGED OUT: Show Login Link
              <li>
                <Link to="/login" className={styles.navLink}>Login</Link>
              </li>
            )}
            {/* CONDITIONAL RENDERING END */}

            <li>
              <button onClick={toggleTheme} className={styles.themeToggle}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;