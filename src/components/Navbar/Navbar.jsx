import React from 'react';
import { Link } from 'react-router'; // Import Link
import { useTheme } from '../../context/ThemeContext'; // Import theme hook
import styles from './Navbar.module.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    // Add the theme class here
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link to="/">My Blog</Link> {/* Link to homepage */}
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>
            <li>
              {/* The Theme Toggle Button */}
              <button onClick={toggleTheme} className={styles.themeToggle}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}




export default Navbar;