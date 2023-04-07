import React from 'react';
import { Button, Input, Form, Col, Row } from 'antd';
import { Validator } from 'react';
import './Changepassword.css';
function Changepassword() {
  return (
    <Row justify={'center'}>
      <Col xs={24} sm={16} md={12} lg={16}>
        <Form className="form--password__change">
          <Form.Item
            name="old-password"
            rules={[
              { require: true, message: 'Please input old password' },
              {
                pattern: /^\S+$/,
                message: 'Password cannot contain whitespace',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              className="input--password input--password__old"
              placeholder="Current Password *"
            />
          </Form.Item>
          <Form.Item
            name="new-password"
            rules={[
              { required: true, message: 'Please input new password' },
              {
                pattern: /^\S+$/,
                message: 'Password cannot contain whitespace',
              },
              { min: 6, message: 'Password must be at least 6' },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).+$/,
                message:
                  'Password must contain at least one lowercase, one uppercase letter and one special character',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              className="input--password input--password__new"
              placeholder="New Password *"
            />
          </Form.Item>
          <Form.Item
            name="repeat-password"
            dependencies={['repeat_password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new-password') === value) {
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
          >
            <Input.Password
              className="input--password input--password__repeat"
              placeholder="Repeat Password *"
            />
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              UPDATE
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
export default Changepassword;
