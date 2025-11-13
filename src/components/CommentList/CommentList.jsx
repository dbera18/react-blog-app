import React from 'react';
import styles from './CommentList.module.css';

function CommentList({ comments }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Comments ({comments.length})</h3>
      
      {/* 1. Check if there are no comments */}
      {comments.length === 0 ? (
        <p className={styles.noComments}>
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <ul className={styles.commentList}>
          {comments
            .filter(comment => comment) // Safety filter
            .map(comment => (
              <li key={comment.id} className={styles.commentItem}>
                
                {/* 2. Display Name of commenter */}
                <strong className={styles.commentName}>{comment.name}</strong>
                
                {/* 3. Display Comment text (using 'body' from API) */}
                <p className={styles.commentText}>{comment.body}</p>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}

export default CommentList;