import React, { Component } from 'react';
import { Button, Form, Input, Checkbox, Col } from 'antd';
// import './Input.css'

export function InputC({ label, rules, name, className, inputClassName, type, iconRender }) {
  return (
    <Form.Item label={label} rules={rules} name={name} className={className}>
      {type === 'password' ? (
        <Input.Password className={inputClassName} iconRender={iconRender} />
      ) : (
        <Input className={inputClassName} type={type} />
      )}
    </Form.Item>
  );
}