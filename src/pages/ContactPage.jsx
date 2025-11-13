import React from 'react';
import styles from './ContactPage.module.css';
import { useTheme } from '../context/ThemeContext';

function ContactPage() {
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <h1 className={styles.title}>Contact Us</h1>
      <p>Please fill out the form below to get in touch.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;