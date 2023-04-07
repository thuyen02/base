import { React, useState } from 'react';
import { Avatar, List, Drawer, Card, InputNumber } from 'antd';
import styled from 'styled-components';
import cartIcon from '../Noorder/cart.png';
import Image from './Product B.png';
import emptyCart from '../Noorder/cart.png'
const DrawerTag = styled(Drawer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-header-title {
    display: flex;
    justify-content: end;
  }
  .ant-drawer-close {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
  }
  .ant-drawer-close .anticon-close {
    color: #ffffff;
  }
`;
const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 111px 24px;
  height: 90%;
`;
const EmptyNoti = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
const EmptyText = styled.p`
  text-align: center;
  font-size: 12px;
`;
const CheckOutButton = styled.button`
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 16px;
  width: 100%;
`;
const CardContent = styled(Card)`
  display: flex;
  flex-direction: row;
  border-radius: 0;
  padding: 24px;
`
export default function HasOrders() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState()
  return (
    <>
      <img
        src={cartIcon}
        onClick={showDrawer}
        style={{ cursor: 'pointer', width: 30 }}
        />
      <DrawerTag placement="right" onClose={onClose} open={open}>
        <p>Total items: 1</p>
        <CardContent cover={<img src={Image} style={{ width: 140, borderRadius: 0 }} />}>
          <p>Cotton dress</p>
          <p>đ599,000</p>
          <p>Size: XS</p>
          <InputNumber min={1} defaultValue={1}/>
        </CardContent>
        <CardContent cover={<img src={Image} style={{ width: 140, borderRadius: 0 }} />}>
          <p>Cotton dress</p>
          <p>đ599,000</p>
          <p>Size: XS</p>
          <InputNumber min={1} defaultValue={1}/>
        </CardContent>
        <CardContent cover={<img src={Image} style={{ width: 140, borderRadius: 0 }} />}>
          <p>Cotton dress</p>
          <p>đ599,000</p>
          <p>Size: XS</p>
          <InputNumber min={1} defaultValue={1}/>
        </CardContent>
        <p>Subtotal: đ599,000</p>
        <CheckOutButton>CHECKOUT</CheckOutButton>
      </DrawerTag>
    </>
  );
}
