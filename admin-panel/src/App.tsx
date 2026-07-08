import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  ShopOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <ShopOutlined />,
              label: 'Services',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Users',
            },
            {
              key: '4',
              icon: <SettingOutlined />,
              label: 'Settings',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 50px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <h1 style={{ margin: 0 }}>سبزوار - پنل مدیریت</h1>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          <h2>خوش آمدید به پنل مدیریت</h2>
          <p>صفحات مختلف را از منوی سمت چپ انتخاب کنید</p>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
