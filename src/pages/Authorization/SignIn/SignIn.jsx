import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import { InputC } from '../../../Components/Input/Input';
import { ButtonC } from '../../../Components/Button';
import './SignIn.css';

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
          localStorage.setItem('userKey', res.data.jwt);
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
          <InputC
            label="Your email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
            className='formItem'
            inputClassName="inputField" type='text'
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
            inputClassName="inputField" type='password'
          />
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
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
