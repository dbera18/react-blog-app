import React, { useState } from 'react';
import styles from './BlogPost.module.css';

// We receive 'post' and 'author' as props from the parent
function BlogPost({ post, author }) {
  const [likeCount, setLikeCount] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
    }
  };

  // Safety check in case data is not ready
  if (!post || !author) {
    return <p>Loading content...</p>;
  }

  return (
    <article>
      {/* 1. Display Title */}
      <h2 className={styles.title}>{post.title}</h2>
      
      {/* 2. Display Body/Content */}
      <p className={styles.content}>
        {post.body}
      </p>

      {/* 3. Display User's Name and Email */}
      <div className={styles.meta}>
        <div><strong>Author:</strong> <span>{author.name}</span></div>
        <div><strong>Email: </strong><span>{author.email}</span></div>
      </div>

      {/* Like button (no change) */}
      <div className={styles.likeSection}>
        <button 
          onClick={handleLikeClick} 
          className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
        >
          
          <img 
            src="/heart.png" // Make sure this path is correct
            alt="like" 
            className={styles.likeIcon} 
          />
          {isLiked ? 'Unlike' : 'Like'}
        </button>
        <span className={styles.likeCount}>{likeCount} likes</span>
      </div>
    </article>
  );
}

export default BlogPost;