import { Checkbox, Form } from 'antd';
import axiosInstance from '../../../shared/services/http-client';
import { ACCESS_TOKEN, USER_ID } from '../../../shared/constants/index';
import { InputC } from '../../../components/Input/Input';
import { ButtonC } from '../../../components/Button/index';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import './SignIn.css';
import { Outlet, Link } from 'react-router-dom';
export const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = async values => {
    try {
      const data = {
        identifier: values.email,
        password: values.password,
      };
      const res = await axiosInstance.post('auth/local', data);
      localStorage.setItem(ACCESS_TOKEN, res.jwt);

      localStorage.setItem(USER_ID, res.user.id);
      swal({
        title: 'Good job!',
        text: 'Loggin is successful!',
        icon: 'success',
        button: 'OK',
        position: 'top-end',
        width: 400,
        padding: '2em',
        backdrop: true,
        timer: 1000,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="appBg">
      <Form
        layout="vertical"
        name="normal_sigin"
        className="signin-form"
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
      >
        <InputC
          label="Your email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
          className="formItem"
          inputClassName="inputField"
          type="text"
        />

        <InputC
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          className="formItem"
          inputClassName="inputField"
          type="password"
        />
        <Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            initialValue={false}
          >
            <Checkbox className="checkRemember">Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <ButtonC
            type="primary"
            htmlType="submit"
            className="login-form-button"
          />
        </Form.Item>
        <Form.Item className="create-account">
          <h2>Don't have an account yet?</h2>
          <Link to="/signup" className="register">
            Register now
          </Link>
        </Form.Item>
      </Form>
      {/* <UserDetails/> */}
    </div>
  );
};

export default SignIn;
