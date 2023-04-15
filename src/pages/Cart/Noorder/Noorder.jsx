import { React, useState } from 'react';
import styled from 'styled-components';
import { Button, Drawer, Space } from 'antd';
import cartIcon from './cart.png';
import emptyCart from './empty cart.png';
import close from './Common.png';
import Header from '../../../components/Header/Header';
const Container = styled(Drawer)`
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
const EmptyButton = styled.button`
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 16px;
  width: 100%;
`;
export default function NoOrder() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <img
        src={cartIcon}
        onClick={showDrawer}
        style={{ cursor: 'pointer', width: 30 }}
      />
      <Container
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<img src={close} />}
      >
        <EmptyContent>
          <img src={emptyCart} alt="" style={{ paddingBottom: 80 }} />
          <EmptyNoti>Your bag is empty</EmptyNoti>
          <EmptyText>
            Looks like you haven’t added any items to the bag yet.
          </EmptyText>
          <EmptyText>Start shopping to fill it in.</EmptyText>
        </EmptyContent>
        <EmptyButton>START SHOPPING</EmptyButton>
      </Container>
    </>
  );
}
