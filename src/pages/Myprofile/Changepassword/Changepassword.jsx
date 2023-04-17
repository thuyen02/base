import React from 'react';
import {Form, Button, Menu} from 'antd';
import './Changepassword.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axiosInstance from '../../../shared/services/http-client';
import { InputC } from '../../../Components/Input/Input';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function Changepassword() {
  const onFinish = (values) => {
    const data = {
      currentPassword : values.currentPassword,
      password : values.password,
      passwordConfirmation : values.passwordConfirmation,
    }
    try {
      axiosInstance.post("auth/change-password", data)
      .then(
        swal({
          title: 'Good job!',
          text: 'Changepassword is successful!',
          icon: 'success',
          button: 'OK',
          position: 'top-end',
          width: 400,
          padding: '2em',
          backdrop: true,
          timer: 1000,
        })
      )
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
   <div>
     <div className="Updateprofile-nav">
    <Menu mode="horizontal" className=" Updateprofile-nav--left">
      <Menu.Item className="Updateprofile-nav--item" key="myprofile">
        <Link to='/update-profile'>My profile</Link>
      </Menu.Item>
      <Menu.Item key="changepassword"><Link to="/change-password">Change password</Link></Menu.Item>
    </Menu>
  </div>
    <div className="appBg">
      <Form
      layout="vertical"
          name="normal_sigin"
          className="signup_form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
      >
        <InputC
        label="Current password"
        name="currentPassword"
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
        name="password"
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
        name="passwordConfirmation"
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
   </div>
  );
}
export default Changepassword;
