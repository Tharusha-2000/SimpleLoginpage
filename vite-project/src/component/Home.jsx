import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      message.warning('You need to log in first');
      navigate('/'); // Redirect to the login page if no token is found
    }
  }, [navigate]);

  const handleLogout = () => {
    // Display message on logout and navigate to the login page
    localStorage.removeItem('token');
    message.info('Logged out');
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Home Page!</h2>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default HomePage;
