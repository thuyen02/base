import { Button, Input, Form } from 'antd';
import React from 'react';
<<<<<<< HEAD

import './Signup.css'
// import axiosInstance from '../../../shared/services/http-client'

=======
import { InputC } from '../../../Components/Input/Input';
import { ButtonC } from '../../../Components/Button';
import './Signup.css';
// import axiosInstance from '../../../shared/services/http-client'
>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b

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
<<<<<<< HEAD
  
=======

>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
//   });
// };

const SignupForm = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
<<<<<<< HEAD
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
=======
    // let { email, password, fullname, username, address, phoneNumber } = values;
    // let newUser = {
    //   phoneNumber: phoneNumber,
    //   username: username,
    //   confirmed: true,
    //   role: 2,
    //   fullname: fullname,
    //   address: address,
    //   password: password,
    //   email: email,
    // };
    // postDataSignup(newUser);
    // onReset();
>>>>>>> 3df6a0064fe420f73d0e4ea3a6168533f5ee554b
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
          or log in to your account
        </a>
      </Form>
    </div>
  );
};

export default SignupForm;
