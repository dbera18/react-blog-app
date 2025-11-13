import React from 'react';
import { Routes, Route } from 'react-router';
import { useTheme } from './context/ThemeContext'; // Import our theme hook
import styles from './App.module.css';

import { useEffect } from 'react';

// Import Components and Pages
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Get the current theme from our context
  const { theme } = useTheme();

  // This effect updates the <body> tag's class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]); // Re-run whenever theme changes

  // The main app wrapper's class will now be dynamic (e.g., "appWrapper light" or "appWrapper dark")
  return (
    <div className={`${styles.appWrapper} ${styles[theme]}`}>
      <Navbar />
  
      <main className={styles.mainContent}>
        {/* Routes define which page component to show based on the URL */}
        <Routes>
          {/* path="/" is the homepage */}
          <Route path="/" element={<BlogPostsPage />} /> 

          
          {/* path="/post/:postId" is a dynamic route. :postId is a URL parameter */}
          <Route path="/post/:postId" element={<IndividualPostPage />} />
          
          {/* path="/contact" is the contact page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;