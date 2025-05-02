import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}user/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(res.data.data);
        } catch (err) {
          console.error("Failed to fetch user data:", err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}user/login`, {
        email,
        password
      });
      
      localStorage.setItem('token', res.data.token);
      setUser(res.data.data);
      return { success: true };
    } catch (err) {
      console.error("Login error:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed"
      };
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}user/register`, userData);
      
      localStorage.setItem('token', res.data.token);
      setUser(res.data.data);
      return { success: true };
    } catch (err) {
      console.error("Registration error:", err);
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed"
      };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);