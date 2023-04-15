import React from 'react';
import { Form, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputC } from '../../../components/Input/Input';
import './Changepassword.css';
import axios from 'axios';
function Changepassword() {
  const onFinish = event => {
    event.preventDefault();
    const { current_password, new_password, repeat_password } = event.target;
    const data = { current_password: current_password.value, new_password: new_password.value, repeat_password: repeat_password.value };
    axios.post('/auth/change-password', data).then(response => {});
  };
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
          label="Current password"
          name="current_password"
          rules={[
            {
              required: true,
              message: 'Please input Current Password!',
            },
            {
              pattern: /^\S+$/,
              message: 'Password cannot contain whitespace',
            },
          ]}
          hasFeedback
          className="formItem"
          inputClassName="inputField"
          type="password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        ></InputC>
        <InputC
          label="New password"
          name="new_password"
          rules={[
            {
              required: true,
              message: 'Please input New Password!',
            },
            {
              pattern: /^\S+$/,
              message: 'Password cannot contain whitespace',
            },
            {
              min: 6,
              message: 'Password must have at least 6 characters in length',
            },
            {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).+$/,
              message:
                'Password must contain at least one lowercase, one uppercase letter and one special character',
            },
          ]}
          hasFeedback
          className="formItem"
          inputClassName="inputField"
          type="password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        ></InputC>
        <InputC
          label="Repeat password"
          name="repeat_password"
          rules={[
            {
              required: true,
              message: 'Please input Repeat Password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('new_password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    'The passwords that you entered do not match the new passwords'
                  )
                );
              },
            }),
            {
              pattern: /^\S+$/,
              message: 'Password cannot contain whitespace',
            },
          ]}
          hasFeedback
          className="formItem"
          inputClassName="inputField"
          type="password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        ></InputC>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="changepassword-form-button"
          >
            UPDATE
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Changepassword;
