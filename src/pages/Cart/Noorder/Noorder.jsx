import { React, useState } from 'react';
import {
  Container,
  EmptyContent,
  EmptyButton,
  EmptyNoti,
  EmptyText,
} from './NoOrderStyle';
import emptyCart from './empty cart.png';
import close from './Common.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
      <ShoppingCartOutlined onClick={showDrawer} />
      <Container
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<img src={close} alt={close} />}
      >
        <EmptyContent>
          <img src={emptyCart} alt="emptycart" style={{ paddingBottom: 80 }} />
          <EmptyNoti>Your bag is empty</EmptyNoti>
          <EmptyText>
            Looks like you haven’t added any items to the bag yet.
          </EmptyText>
          <EmptyText>Start shopping to fill it in.</EmptyText>
        </EmptyContent>
        <Link to="/category" style={{ color: 'white' }}>
          <EmptyButton onClick={onClose}>START SHOPPING</EmptyButton>
        </Link>
      </Container>
    </>
  );
}
