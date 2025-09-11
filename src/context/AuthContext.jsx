import React, { createContext, useState, useEffect } from 'react';
import api, { login as apiLogin, register as apiRegister, logout as apiLogout } from '../services/api';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      setError(null);
      const response = await apiLogin(credentials);
      
      const { token, user } = response.data;
      
      // Store token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Set user state and axios default header
      setUser(user);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setError(null);
      const response = await apiRegister(userData);
      
      const { token, user } = response.data;
      
      // Store token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Set user state and axios default header
      setUser(user);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await apiLogout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Remove token and user data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Clear user state and axios default header
      setUser(null);
      delete api.defaults.headers.common['Authorization'];
    }
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};