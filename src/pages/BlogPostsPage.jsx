import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import styles from './BlogPostsPage.module.css';
import axios from 'axios'; // Import axios

function BlogPostsPage() {
  const { theme } = useTheme();

  // 1. Use useState to store the list of posts
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Use useEffect to fetch the data
  useEffect(() => {
    axios
      // 3. Fetch all posts from the API
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setAllPosts(res.data); // Store posts in state
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []); // Empty array means run this once

  // Show a loading message
  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Blog Posts</h1>
        <p>Loading...</p>
      </div>
    );
  }

  // 4. Dynamically display each post
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Blog Posts</h1>
      
      <ul className={styles.postList}>
        {allPosts.map(post => (
          <li key={post.id} className={`${styles.postItem} ${styles[theme]}`}>
            {/* 5. Link to the individual post page */}
            <Link to={`/post/${post.id}`} className={styles.postLink}>
              
              {/* 6. Display title and content preview */}
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postMeta}>
                {post.body.substring(0, 100)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostsPage;