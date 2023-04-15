import { Button, Input, Form } from 'antd';
import React from 'react';

import './Signup.css'
// import axiosInstance from '../../../shared/services/http-client'


const styleTextbox = {
  borderRadius: 0,
  outline: 'none',
  boxShadow: 'none',
  padding: '5px 0',
};

// const postDataSignup = async newUser => {
//   axiosInstance.post('/auth/local/register', newUser)
//     .then(res => {
//       let jwt = res.jwt
//       console.log(jwt);
//       localStorage.setItem('token', jwt)
  
//   });
// };

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

    // postDataSignup(newUser);
    onReset();
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
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
      <Form.Item
        className="signup-field"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input id="email" placeholder="Your email *" style={styleTextbox} />
      </Form.Item>

      <Form.Item
        className="signup-field"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input username!',
          },
        ]}
      >
        <Input id="username" placeholder="Username *" style={styleTextbox} />
      </Form.Item>
      <Form.Item
        className="signup-field"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input fullname!',
          },
        ]}
      >
        <Input id="fullname" placeholder="Full name *" style={styleTextbox} />
      </Form.Item>
      <Form.Item
        className="signup-field"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input password!',
          },
        ]}
      >
        <Input
          id="password"
          type="password"
          placeholder="Password *"
          style={styleTextbox}
        />
      </Form.Item>
      <Form.Item
        className="signup-field"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input address!',
          },
        ]}
      >
        <Input
          id="phoneNumber"
          placeholder="Phone number *"
          style={styleTextbox}
        />
      </Form.Item>
      <Form.Item
        className="signup-field"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input address!',
          },
        ]}
      >
        <Input id="address" placeholder="Address *" style={styleTextbox} />
      </Form.Item>
      <Form.Item>
        <Button
          id="btn-signup"
          style={{
            backgroundColor: '#1D1F22',
            color: '#FFFFFF',
            borderRadius: 0,
            height: '52px',
          }}
          htmlType="submit"
          block
        >
          CREATE ACCOUNT
        </Button>
      </Form.Item>
      <a href="/some/valid/uri#top">or log in to your account</a>
    </Form>
  );
};

export default SignupForm;
