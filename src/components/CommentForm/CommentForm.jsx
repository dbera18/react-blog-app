import React, { useState } from 'react';
import styles from './CommentForm.module.css';

function CommentForm({ onSubmitComment }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 4. Ensure that the form inputs are validated
    if (!name.trim() || !text.trim()) {
      alert("Please fill in both name and comment.");
      return; // Stop submission if fields are empty
    }

    // Pass the valid data up to the parent component
    onSubmitComment(name, text);
    
    // Clear form
    setName(''); 
    setText(''); 
  };

  return (
    <section className={styles.section}>
      {/* 1. Implement a comment form (name and comment) */}
      <h3 className={styles.heading}>Leave a Comment</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
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