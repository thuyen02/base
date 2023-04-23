import React, { useRef } from 'react';
import { Form, Button, Layout, Menu } from 'antd';
import './Changepassword.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputC } from '../../../components/Input/Input';
import './Changepassword.css';
import axiosInstance from '../../../shared/services/http-client';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
// import Menu from 'antd'
function Changepassword() {
  const formRef = useRef(null);
  const onFinish = values => {
    const { current_password, new_password, repeat_password } = values;
    const data = {
      currentPassword: current_password,
      password: new_password,
      passwordConfirmation: repeat_password,
    };
    try {
      axiosInstance.post('/auth/change-password', data).then(response => {
        // console.log(response.data.current_password);
        swal({
          title: 'Good job!',
          text: 'Your password has been changed successfully',
          icon: 'success',
          button: 'OK',
          position: 'top-end',
          width: 400,
          padding: '2em',
          backdrop: true,
          // timer: 1000,
        });
        localStorage.setItem('token', response.data);
        formRef.current.resetFields();
      });
    } catch (error) {
      swal({
        title: 'Fail!',
        text: 'Current password you entered is incorrect',
        icon: 'warning',
        button: 'OK',
        position: 'top-end',
        width: 400,
        padding: '2em',
        backdrop: true,
        // timer: 1000,
      });
      console.log(error);
    }
  };
  return (
    <Layout className="change_password">
      <div className="change_password-nav">
        <Menu mode="horizontal" className="my_profile-nav">
          <Menu.Item className="Updateprofile-nav--item" key="myprofile">
            <Link to="/update-profile">My profile</Link>
          </Menu.Item>
          <Menu.Item key="changepassword">
            <Link to="/change-password">Change password</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="change_password-form">
        <Form
          layout="vertical"
          name="normal_sigin"
          onFinish={onFinish}
          ref={formRef}
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
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    !(getFieldValue('current_password') === value)
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'New password can not be same as your current password'
                    )
                  );
                },
              }),
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
    </Layout>
  );
}
export default Changepassword;
