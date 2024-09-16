import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();  // Create the AuthContext

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // Store token or user data in localStorage or cookies
  };

  const logout = () => {
    setUser(null);
    // Remove token from localStorage or cookies
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add the export for AuthContext
export { AuthContext };

// Export the hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
