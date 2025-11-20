import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import styles from './IndividualPostPage.module.css';

// Import our components
import BlogPost from '../components/BlogPost/BlogPost';
import CommentList from '../components/CommentList/CommentList';
import CommentForm from '../components/CommentForm/CommentForm';
import axios from 'axios';

function IndividualPostPage() {
  const { theme } = useTheme();
  const { user } = useAuth();
  // 1. Use useParams to get the postId from the URL
  const { postId } = useParams(); 

  // State to store the data from the API
  const [postData, setPostData] = useState(null);
  const [authorData, setAuthorData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect to fetch data when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 3. Fetch the post based on the postId
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPostData(postRes.data);

        // 4. Fetch the user (author) associated with the post
        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data);

        // 5. Fetch the comments for this post
        const commentsRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setComments(commentsRes.data);

      } catch (e) {
        console.error("Failed to fetch data:", e);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData(); // Run the fetch function
  }, [postId]); // Re-run if the postId (in the URL) changes

  // Function to add a new comment (as before)
  const handleAddComment = async (text) => {
    const newCommentPayload = {
      name: user.username,
      body: text, 
    };

    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`, 
        newCommentPayload
      );
      setComments([response.data, ...comments]);
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Failed to submit comment. Please try again.");
    }
  };

  // Render a loading message or the content
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      {loading ? (
        <p>Loading post...</p>
      ) : (
        <>
          {/* 6. Pass the stored API data as props */}
          <BlogPost post={postData} author={authorData} />
          
          {user ? (
            <CommentForm 
              onSubmitComment={handleAddComment} 
              currentUser={user}
            />
          ) : (
            <p>
              Please <Link to="/login">login</Link> to leave a comment.
            </p>
          )}
          
          <CommentList comments={comments} />
        </>
      )} 
    </div>
  );
}

export default IndividualPostPage;
