// src/context/AuthContext.jsx
import { createContext, useContext } from 'react';
import { useAuth } from '../hook/useAuth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = useAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);