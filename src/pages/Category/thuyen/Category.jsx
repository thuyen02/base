import React from 'react';
import './Category.css';
import { Card } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
const { Meta } = Card;
const Category = () => (
  <Layout>
  <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <Layout style={{ padding: '24px 0'}}>
      <Sider  width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
          items={items2}
        />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    </Layout>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
</Layout>
    
  );

export default Category;
