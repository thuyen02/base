import React, { useEffect, useState } from 'react';
import './Header.css';
import logoIcon from './Icon.jpg';
// import { isLoggedIn } from '../../pages/Authorization/SignIn/SignIn';
import {
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../shared/constants/index';
import HasOrders from './../../pages/Cart/Hasorders/Hasorders';
import { useSelector } from 'react-redux';
import { selectOrder } from '../../OrderRedux/order';
import NoOrder from '../../pages/Cart/Noorder/Noorder';
const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q'));
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

  const navigate = useNavigate();
  const handleSumitSearch = e => {
    setSearchParams({ q: query });
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery('');
  };
  // const showCart = () => {
  //   if (orders.length === 0) {
  //     return <NoOrder noOrder={true}/>
  //   } else {
  //     return <HasOrders hasOrders={true}/>
  //   }
  // }
  const { orders } = useSelector(selectOrder);
  // useEffect(() => {
  //   dispatch(fetchOrderAction(userID));
  // }, [dispatch, userID]);
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
          <Menu.Item key="sport-shoes">
            <Link to="/sportshoes"> SPORT SHOES</Link>
          </Menu.Item>
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
              {orders.length === 0 ? <NoOrder /> : <HasOrders />}
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};
export default Header;
