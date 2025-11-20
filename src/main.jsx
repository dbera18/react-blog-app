import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router'; // For routing
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext'; // 1. IMPORT THE PROVIDER
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 2. WRAP YOUR APP WITH IT */}
      <ThemeProvider>
        <AuthProvider>
           <App />
        </AuthProvider>
       
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);