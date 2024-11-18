import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import LoginPage from './component/Login';
import HomePage from './component/Home';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ backgroundColor: '#fff', padding: 0 }}>
          <h1 style={{ textAlign: 'center' }}>My App</h1>
        </Header>
        <Content style={{ padding: '50px' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

