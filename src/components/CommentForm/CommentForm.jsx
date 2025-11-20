import React, { useState, useEffect } from 'react';
import styles from './CommentForm.module.css';

function CommentForm({ onSubmitComment, currentUser }) {
  const [text, setText] = useState('');
  const [userName, setUserName] = useState(currentUser?.username || '');

  useEffect(() => {
    setUserName(currentUser?.username || '');
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 4. Ensure that the form inputs are validated
    if (!text.trim()) {
      alert("Please enter a comment before submitting.");
      return; // Stop submission if fields are empty
    }

    // Pass the valid data up to the parent component
    onSubmitComment(text);
    
    // Clear form
    setText(''); 
  };

  return (
    <section className={styles.section}>
      {/* 1. Implement a comment form (name and comment) */}
      <h3 className={styles.heading}>Leave a Comment</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.userBadge}>Commenting as <strong>{userName}</strong></p>
        <div className={styles.formGroup}>
          <label htmlFor="comment">Comment</label>
          <textarea 
            id="comment" 
            rows="4" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit Comment
        </button>
      </form>
    </section>
  );
}

export default CommentForm;
