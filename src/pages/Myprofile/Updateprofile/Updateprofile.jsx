import React from 'react';
import './Updateprofile.css';
import { Layout, Menu} from 'antd';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { InputC } from '../../../components/Input/Input';
import { useState } from 'react';
const { Content, Footer } = Layout;
const Updateprofile = () => {
  return (
    <Layout className="layout">
      <Content
        className="Updateprofile-conttent"
        style={{
          padding: '0 50px',
        }}
      >
        <div className="Updateprofile-nav">
          <Menu mode="horizontal" className=" Updateprofile-nav--left">
            <Menu.Item className="Updateprofile-nav--item" key="myprofile">
              My profile
            </Menu.Item>
            <Menu.Item key="changepassword">Change password</Menu.Item>
          </Menu>
        </div>
 <div className="wrapper-update">
         <Form
          layout="vertical"
          name="normal_update"
          className="update-form"
          initialValues={{
            remember: true,
          }}
        //   onFinish={onFinish}
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
            className='updateFormItem'
            inputClassName="updateInputField" type='text'
          />
          <InputC
            label="Username"
            className="updateFormItem"
            name="updateUsername"
            rules={[
              {
                required: true,
                message: 'Please input Username!',
              },
            ]}
            inputClassName="updateInputField" type='text'
          > 
          </InputC>
          </div>
         <div className="updateRow">
         <InputC
            label="Your name"
            className="updateFormItem"
            name="updateYourname"
            rules={[
              {
                required: true,
                message: 'Please input Your name!',
              },
            ]}
            inputClassName="updateInputField" type='text'
          >
          </InputC>
          <InputC
            label="Phone number"
            className="updateFormItem"
            name="updatePhoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input Phone number!',
              },
            ]}
            inputClassName="updateInputField" type='text'
          >
          </InputC>
         </div>
         <div className="updateAddress">
         <InputC
            label="Address"
            className="updateFormItem"
            name="updateAddress"
            rules={[
              {
                required: true,
                message: 'Please input Address!',
              },
            ]}
            inputClassName="updateInputField" type='text'
          >
          </InputC>
          
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
  );
};

export default Updateprofile;
