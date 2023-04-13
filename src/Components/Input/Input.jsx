import React, { Component } from 'react';
import { Button, Form, Input, Checkbox, Col } from 'antd';
// import './Input.css'

export function InputC({ label, rules, name, className, inputClassName, type }) {
    return (
      <Form.Item label={label} rules={rules} name={name} className={className}>
        <Input className={inputClassName} type={type}/>
      </Form.Item>
    );
  }
