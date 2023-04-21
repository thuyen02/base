import React from 'react';
import './Updateprofile.css';
import { Layout, Menu } from 'antd';
import { Button, Form } from 'antd';
import { InputC } from '../../../Components/Input/Input';
import { useState, useEffect } from 'react';
import axiosInstance from '../../../shared/services/http-client';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

const { Content} = Layout;

const Updateprofile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axiosInstance
      .get('users/me')
      .then(res => {
        setUserData(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onFinish = (values) => {
    axiosInstance
    .put(`users/${userData.id}`, values)
    .then(res => {
      setUserData(res.data);
      swal({
        title: 'Good job!',
        text: 'Update is successful!',
        icon: 'success',
        button: 'OK',
        position: 'top-end',
        width: 400,
        padding: '2em',
        backdrop: true,
        timer: 1000,
      });
      console.log(values);
    })
    .catch(error => {
      console.log(error);
    });
  }
 
 if(userData !== null) {
  return (
    <div>
      <div className="Updateprofile-nav">
    <Menu mode="horizontal" className=" Updateprofile-nav--left">
      <Menu.Item className="Updateprofile-nav--item" key="myprofile">
        My profile
      </Menu.Item>
      <Menu.Item key="changepassword"><Link to="/change-password">Change password</Link></Menu.Item>
    </Menu>
  </div>
    <Layout className="layout">
      <Content
        className="Updateprofile-conttent"
        style={{
          padding: '0 50px',
        }}
      >
        <div className="wrapper-update">
          <Form
            layout="vertical"
            name="normal_update"
            className="update-form"
            initialValues={{
              remember: true,
              fullname: userData?.fullname,
              username: userData?.username,
              email: userData?.email,
              phoneNumber: userData?.phoneNumber,
              address: userData?.address
            }}

              onFinish={onFinish}
          >
            <div className="updateRow">
              <InputC
                label="Full name"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: 'Please input Full name!',
                  },
                ]}
                className="updateFormItem"
                inputClassName="updateInputField"
                type="text"
              />
              <InputC
                label="Username"
                className="updateFormItem"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input Username!',
                  },
                ]}
                inputClassName="updateInputField disableInput"
                type="text"
                disable={true}
              ></InputC>
            </div>
            <div className="updateRow">
              <InputC
                label="Your email"
                className="updateFormItem"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input Your name!',
                  },
                ]}
                inputClassName="updateInputField disableInput"
                type="text"
                disable={true}
              ></InputC>
              <InputC
                label="Phone number"
                className="updateFormItem"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please input Phone number!',
                  },
                ]}
                inputClassName="updateInputField"
                type="text"
              ></InputC>
            </div>
            <div className="updateAddress">
              <InputC
                label="Address"
                className="updateFormItem"
                name="address"
                rules={[
                  {
                    required: true,
                    message: 'Please input Address!',
                  },
                ]}
                inputClassName="updateInputField"
                type="text"
              ></InputC>
            </div>
            <div className="updateBtn">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="update-form-button"
                >
                  update
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
    </div>
  );
 }
};

export default Updateprofile;
