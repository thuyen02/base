import React, { useState, useEffect } from 'react';
import './Header.css';
import logoIcon from './Icon.jpg';
// import { isLoggedIn } from '../../pages/Authorization/SignIn/SignIn';
import { ACCESS_TOKEN } from '../../shared/constants/index';
import { Menu, Input } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import HasOrders from './../../pages/Cart/Hasorders/Hasorders';
const Header = () => {
  const [query, setQuery] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('at') ? true : false
  );
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setIsLoggedIn(false);
  };
  useEffect(() => {
    const loggedIn = localStorage.getItem('at') ? true : false;
    setIsLoggedIn(loggedIn);
  }, []);
  const params = new URLSearchParams();
  params.append('key', query);
  const navigate = useNavigate();
  const handleSumitSearch = e => {
    e.preventDefault();
    navigate(`/search?${params.toString()}`);
  };

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
          {/* Input search */}
          <Menu.Item className="search-item" key="search">
            <form onSubmit={handleSumitSearch}>
              <Input
                placeholder="Search products"
                className="search-field"
                prefix={<SearchOutlined className="search-icon" />}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </form>
          </Menu.Item>
          {isLoggedIn ? (
            <Menu.SubMenu key="user" icon={<UserOutlined />}>
              <Menu.Item key="login">
                <Link to="/update-profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="register" onClick={handleLogout}>
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
              {/* <ShoppingCartOutlined onClick={handleShowCart} /> */}
              <HasOrders/>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default Header;
