import React, { Component } from 'react';
import './SignIn.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox, Col } from 'antd';
import axios from 'axios';
import Password from 'antd/es/input/Password';

export class SignIn extends Component {
  render() {
    const onFinish = values => {
      console.log('Finish:', values);
      let data = {
        identifier: values.email,
        password: values.password,
      };
      console.log(data);
      axios
        .post('https://edison-shipping-api.savvycom.xyz/api/auth/local', data)
        .then(res => {
          console.log(res.data.jwt);
          localStorage.setItem("userKey", res.data.jwt);
        })
        .catch(error => {
          console.log(error);
        });
    };

    // const logout = () => {
    //   localStorage.removeItem("userKey")
    // }
    return (
      <div className="appBg">
        <Form
          layout="vertical"
          name="normal_sigin"
          className="signin-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Your email"
            className="formItem"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input className="inputField" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
            className="formItem"
          >
            <Input type="password" className="inputField" />
            
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="checkRemember">Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
            {/* <Button
              type="primary"
              htmlType="button"
              className="login-form-button"
              onClick={logout}
            >
              LOGOUT
            </Button> */}
          </Form.Item>
          <Form.Item className="create-account">
            <h2>Don't have an account yet?</h2>
            <a href="" className="register">
              Register now
            </a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SignIn;
