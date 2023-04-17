import React, { Component } from 'react';
import './Header.css';
import logoIcon from './Icon.jpg';
import { Menu, Input } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  return (
    <div>
      <div className="navbar">
        <Menu mode="horizontal" className="left-nav">
          <Menu.Item key="logo">
            <Link to="/">
              <img src={logoIcon} alt="" />
            </Link>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to="/">HOME</Link>
          </Menu.Item>
          <Menu.Item key="clothes">
            <Link to="/category">CLOTHES</Link>
          </Menu.Item>
          <Menu.Item key="sport-shoes">SPORT SHOES</Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="right-nav">
          <Menu.Item className="search-item" key="search">
            <Input
              placeholder="Search products"
              className="search-field"
              prefix={<SearchOutlined className="search-icon" />}
            />
          </Menu.Item>
          {isLoggedIn ? (
            <Menu.SubMenu key="user" icon={<UserOutlined />}>
              <Menu.Item key="login">
                <Link to="/updateprofile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/">Logout</Link>
              </Menu.Item>
            </Menu.SubMenu>
          ) : (
            <Menu.SubMenu key="user" icon={<UserOutlined />}>
              <Menu.Item key="login">
                <Link to="/signin">Login</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/signup">Register</Link>
              </Menu.Item>
            </Menu.SubMenu>
          )}
          {isLoggedIn && (
            <Menu.Item key="cart">
              <ShoppingCartOutlined />
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
