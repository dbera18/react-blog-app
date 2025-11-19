import React from 'react'
import { Link } from 'react-router'
import styles from './HomePage.module.css';
import { useTheme } from '../context/ThemeContext';

export default function HomePage() {
    const {theme} = useTheme();

  return (
    <div className={`${styles.container}${styles[theme]}`}>
        <div className={styles.heroSection}>
            <h1 className={styles.title}>
                Welocme to my Awesome Blog
            </h1>

            <p className={styles.description}>
                This is the place where I share my thoughts on REct, coding and life. Join the commmunity and start reading!

            </p>

            <div className={styles.buttonGroup}>
                <Link to="/login" className={`${styles.btn}${styles.loginBtn}`}>
                Login</Link>
                <Link to="/blog" className={`${styles.btn} ${styles.exploreBtn}`}>
                Explore Blog
          </Link>

            </div>
        </div>
      
    </div>
  )
}
