import React from 'react';
import './Updateprofile.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useState } from 'react';

const { Content, Footer } = Layout;

const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Updateprofile = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = <Form.Item name="prefix" noStyle></Form.Item>;
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

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
        {/* <Breadcrumb className="Updateprofile-breadcrum"
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item className="Updateprofile-breadcrum-firt">
            <a href="#">Myprofile </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="Updateprofile-breadcrum-child">
            <a href="#">ChangePaword</a>
          </Breadcrumb.Item>
        </Breadcrumb> */}
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
          <Form.Item
            label="Full name"
            className="updateFormItem"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input Full name!',
              },
            ]}
          >
            <Input className="updateInputField" />
          </Form.Item>
          <Form.Item
            label="Username"
            className="updateFormItem"
            name="updateUsername"
            rules={[
              {
                required: true,
                message: 'Please input Username!',
              },
            ]}
          >
            <Input type="password" className="updateInputField" />
            
          </Form.Item>
          </div>
         <div className="updateRow">
         <Form.Item
            label="Your name"
            className="updateFormItem"
            name="updatePhoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input Your name!',
              },
            ]}
          >
            <Input className="updateInputField" />
          </Form.Item>
          <Form.Item
            label="Phone number"
            className="updateFormItem"
            name="updatePhoneNumber"
            rules={[
              {
                required: true,
                message: 'Please input Phone number!',
              },
            ]}
          >
            <Input type="password" className="updateInputField" />
            
          </Form.Item>
         </div>
         <div className="updateAddress">
         <Form.Item
            label="Address"
            className="updateFormItem"
            name="updateAddress"
            rules={[
              {
                required: true,
                message: 'Please input Address!',
              },
            ]}
          >
            <Input className="updateInputField" />
          </Form.Item>
          
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
