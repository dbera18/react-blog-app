import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context OUTSIDE the component
const AuthContext = createContext();

// 2. Create the Provider Component
export function AuthProvider({ children }) {
  // This state holds the user info (null = not logged in)
  const [user, setUser] = useState(null);

  // 3. Check localStorage when the app starts (Persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem('blogUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 4. The Login Function
  const login = (username, password) => {
    // In a real app, you would use axios.post here.
    // For now, we fake it:
    if (username && password) {
      const fakeUser = { username: username, email: 'user@test.com' };
      
      // Save to State
      setUser(fakeUser);
      
      // Save to LocalStorage (so it remembers you on refresh)
      localStorage.setItem('blogUser', JSON.stringify(fakeUser));
      
      return true; // Return true to say "login successful"
    }
    return false; // Return false if failed
  };

  // 5. The Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('blogUser'); // Clear from storage
  };

  // 6. Return the Provider wrapping the children
  // We pass user, login, and logout to the whole app
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 7. Create a custom hook to use this context easily
export const useAuth = () => {
  return useContext(AuthContext);
};