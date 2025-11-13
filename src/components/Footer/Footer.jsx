import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Import hook
import styles from '../Footer/Footer.module.css';

function Footer() {
  const { theme } = useTheme(); // Get theme
  const currentYear = new Date().getFullYear();
  
  return (
    // Add theme class
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <p>&copy; {currentYear} My Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;