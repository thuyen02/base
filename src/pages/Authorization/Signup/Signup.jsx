import { Button, Form } from 'antd';
import React from 'react';
import { InputC } from '../../../components/Input/Input';
import './Signup.css';
import axiosInstance from '../../../shared/services/http-client';
import { Link } from 'react-router-dom';

const postDataSignup = async newUser => {
  axiosInstance.post('/auth/local/register', newUser).then(res => {
    let jwt = res.jwt;
    console.log(jwt);
    localStorage.setItem('token', jwt);
  });
};

const SignupForm = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    let { email, password, fullname, username, address, phoneNumber } = values;
    let newUser = {
      phoneNumber: phoneNumber,
      username: username,
      confirmed: true,
      role: 2,
      fullname: fullname,
      address: address,
      password: password,
      email: email,
    };
    postDataSignup(newUser);
    onReset();
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="appBg">
      <Form
        form={form}
        layout="vertical"
        className="signup-form-container"
        name="signup-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <InputC
          className="signup-field"
          label="Your email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input Your email!',
            },
          ]}
          inputClassName="inputField"
          type="text"
        />

        <InputC
          className="signup-field"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input Username!',
            },
          ]}
          inputClassName="inputField"
          type="text"
        />
        <InputC
          className="signup-field"
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input Full name!',
            },
          ]}
          inputClassName="inputField"
          type="text"
        />
        <InputC
          className="signup-field"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input Password!',
            },
          ]}
          inputClassName="inputField"
          type="password"
        />
        <InputC
          className="signup-field"
          label="Phone number"
          name="phonenumber"
          rules={[
            {
              required: true,
              message: 'Please input Phone number!',
            },
          ]}
          inputClassName="inputField"
          type="text"
        />
        <InputC
          className="signup-field"
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input Address!',
            },
          ]}
          inputClassName="inputField"
          type="text"
        />
        <Form.Item>
          <Button
            type="primary"
            id="btn-signup"
            className="btn-signup"
            htmlType="submit"
            block
          >
            CREATE ACCOUNT
          </Button>
        </Form.Item>
        <a href="/some/valid/uri#top" className="signup_atag">
          <Link to="/signin"> or log in to your account </Link>
        </a>
      </Form>
    </div>
  );
};

export default SignupForm;
