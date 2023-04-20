import { Button, Form } from 'antd';
import React from 'react';
import { InputC } from '../../../Components/Input/Input';
import './Signup.css';
import axiosInstance from '../../../shared/services/http-client';
import { Link, useNavigate } from 'react-router-dom';
//get data from
const SignupForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = values => {
    let newUser = {
      ...values,
    };
    postDataSignup(newUser);
  };
  //postDataSignup(newUser);

  const postDataSignup = async newUser => {
    // eslint-disable-next-line no-unused-vars
    const postsData = await axiosInstance
      .post('/auth/local/register', newUser)
      .then(res => {
        let jwt = res.jwt;
        localStorage.setItem('at', jwt);
        onReset();
      });
  };

  //Direc user register

  const onReset = () => {
    localStorage.getItem('at');
    navigate('/');
    // form.resetFields();
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
            {
              pattern:
                // eslint-disable-next-line no-useless-escape
                /^(?!\s)(?!.*[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
              message:
                'Please input a valid password (8-16 characters with no special characters or spaces)',
            },
          ]}
          inputClassName="inputField"
          type="password"
        />
        <InputC
          className="signup-field"
          label="Phone number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Please input Phone number!',
            },
            {
              pattern: /^[0-9]{10}$/,
              message: 'Please input a valid phone number with 10 digits.',
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
        <div href="/some/valid/uri#top" className="signup_atag">
          <Link to="/signin"> or log in to your account </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
