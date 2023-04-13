import React from 'react';
import { Button } from 'antd';
import './index.css'
export function ButtonC({type, htmlType}) {
  return (
    <Button type ={type} htmlType ={htmlType} className="login-form-button">
      LOGIN
    </Button>
  );
}
