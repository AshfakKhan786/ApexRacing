import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password) {
      setUser({ id: '1', email, name: email.split('@')[0] });
      return true;
    }
    return false;
  };

  const signup = async (name, email, password) => {
    // Simulate API call and Google Sheets integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock Google Sheets data capture
    console.log('Capturing data to Google Sheets:', { name, email, timestamp: new Date().toISOString() });
    
    if (name && email && password) {
      setUser({ id: '1', email, name });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const sendOTP = async (email) => {
    // Simulate sending OTP
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`OTP sent to ${email}: 123456`);
    return true;
  };

  const resetPassword = async (email, otp, newPassword) => {
    // Simulate OTP verification and password reset
    await new Promise(resolve => setTimeout(resolve, 1000));
    return otp === '123456' && newPassword.length >= 6;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, resetPassword, sendOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};