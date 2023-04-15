import React from 'react';
import {Form, Button, Menu} from 'antd';
import './Changepassword.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InputC } from '../../../Components/Input/Input';
function Changepassword() {
  return (
    <div className="appBg">
      <Form
      layout="vertical"
          name="normal_sigin"
          className="signin-form"
          initialValues={{
            remember: true,
          }}
      >
        <InputC
        label="Current password"
        name="current_password"
            rules={[
              {
                required: true,
                message: 'Please input Current Password!',
              },
            ]}
            className='formItem'
            inputClassName="inputField" type='password'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        ></InputC>
         <InputC
        label="New password"
        name="new_password"
            rules={[
              {
                required: true,
                message: 'Please input New Password!',
              },
            ]}
            className='formItem'
            inputClassName="inputField" type='password'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        ></InputC>
        <InputC
        label="Repeat password"
        name="repeat_password"
            rules={[
              {
                required: true,
                message: 'Please input Repeat Password!',
              },
            ]}
            className='formItem'
            inputClassName="inputField" type='password'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        ></InputC>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="changepassword-form-button"
            >
              update
            </Button>
          </Form.Item>
      </Form>
    </div>
  );
}
export default Changepassword;
