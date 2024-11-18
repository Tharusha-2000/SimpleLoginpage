import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home'); // Redirect to the home page if the token is found
    }
  }, [navigate]);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:8007/api/users/login', {
        email: values.email,
        password: values.password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store the token in localStorage
        message.success('Login successful!');
        navigate('/home'); // Navigate to the home page on success
      } else {
        message.error('Invalid email or password');
      }
    } catch (error) {
      message.error('An error occurred during login');
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <Form name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;