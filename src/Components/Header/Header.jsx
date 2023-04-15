import React, { Component } from 'react';
import './Header.css';
import logoIcon from './Icon.jpg'
import { Menu, Input } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';

export class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <Menu  mode="horizontal" className='left-nav'>
          <Menu.Item key="logo">
            <img src={logoIcon} alt="" />
          </Menu.Item>
          <Menu.Item key="home">HOME</Menu.Item>
          <Menu.Item key="clothes">CLOTHES</Menu.Item>
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
          <Menu.Item key="user">
            <UserOutlined />
          </Menu.Item>
          <Menu.Item key="cart">
            <ShoppingCartOutlined />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
