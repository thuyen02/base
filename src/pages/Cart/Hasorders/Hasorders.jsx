import { React, useEffect, useState } from 'react';
import { Avatar, List, Drawer, Card, InputNumber } from 'antd';
import './Hasorders.css';
import styled from 'styled-components';
import cartIcon from '../Noorder/cart.png';
import Image from './Product B.png';
import close from '../Noorder/Common.png';
const Container = styled(Drawer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  padding-bottom: 120px;
  .ant-drawer-header {
    border-bottom: none;
  }
  .ant-drawer-body {
    padding: 0;
  }
  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
  }
  .ant-card-body {
    padding: 0;
  }
`;
const ProductList = styled.div`
  padding: 24px;
  overflow: auto;
`;
const CardContent = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-radius: 0;
  border: 0;
  margin-bottom: 24px;
  :hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  .remove {
    display: none;
  }
  :hover .remove {
    display: flex;
    align-items: start;
    cursor: pointer;
    width: 26px;
    height: 26px;
  }
`;
const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 16px;
`;
const RemoveButton = styled.div`
  padding: 8px;
`;
const ProductName = styled.p`
  font-size: 14px;
`;
const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const ProductSize = styled.span`
  font-size: 16px;
`;
const Quantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f2f3;
  width: 108px;
  height: 40px;
  font-size: 18px;
  margin: 42px 0 17px 0;
`;
const QuantityButton = styled.button`
  border: none;
  width: 33%;
  cursor: pointer;
`;
const CheckOut = styled.div`
  padding: 24px;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;
const CheckOutButton = styled.button`
  border-radius: 0;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 16px;
  width: 100%;
`;
const Total = styled.p`
  display: flex;
  justify-content: space-between;
`;
export default function HasOrders() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const addQuantity = index => {
    const addProduct = [...products];
    addProduct[index].quantity += 1;
    setProducts(addProduct);
  };
  const subQuantity = index => {
    const subProduct = [...products];
    if (subProduct[index].quantity > 1) {
      subProduct[index].quantity -= 1;
    }
    setProducts(subProduct);
  };
  const [products, setProducts] = useState([
    {
      name: 'Cotton dress',
      price: '599.000',
      size: 'XS',
      quantity: 1,
    },
    {
      name: 'Cotton dress',
      price: '599.000',
      size: 'XS',
      quantity: 1,
    },
    {
      name: 'Cotton dress',
      price: '599.000',
      size: 'XS',
      quantity: 1,
    },
  ]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0;
    products.forEach(product => {
      newTotal += product.price.replace('.', '') * product.quantity;
    });
    setTotal(newTotal);
  }, [products]);
  const removeItem = index => {
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts.splice(index, 1);
      return newProducts;
    });
    setOpen(true);
  };
  const totalProducts = products.length;
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
        title={`Total items: ${totalProducts}`}
      >
        <ProductList>
          {products.map((product, index) => (
            <CardContent
              key={index}
              cover={
                <img
                  src={Image}
                  style={{ width: '100%', padding: 8, borderRadius: 0 }}
                />
              }
            >
              <CardBody>
                <CardInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>đ{product.price}</ProductPrice>
                  <ProductSize>
                    Size:{' '}
                    <span style={{ fontWeight: 600 }}>{product.size}</span>
                  </ProductSize>
                  <Quantity>
                    <QuantityButton onClick={() => subQuantity(index)}>
                      -
                    </QuantityButton>
                    <div>{product.quantity}</div>
                    <QuantityButton onClick={() => addQuantity(index)}>
                      +
                    </QuantityButton>
                  </Quantity>
                </CardInfo>
                <RemoveButton onClick={() => removeItem(index)}>
                  <img src={close} alt="" className="remove" />
                </RemoveButton>
              </CardBody>
            </CardContent>
          ))}
          {/* <CardContent
            cover={
              <img
                src={Image}
                style={{ width: 140, margin: 0, padding: 8, borderRadius: 0 }}
              />
            }
          >
            <CardBody>
              <CardInfo>
                <ProductName>Cotton dress</ProductName>
                <ProductPrice>đ599,000</ProductPrice>
                <ProductSize>
                  Size: <span style={{ fontWeight: 600 }}>XS</span>
                </ProductSize>
                <Quantity>
                  <QuantityButton onClick={subQuantity}>-</QuantityButton>
                  <div>{quantity}</div>
                  <QuantityButton onClick={addQuantity}>+</QuantityButton>
                </Quantity>
              </CardInfo>
              <RemoveButton>
                <img src={close} alt="" className="remove" />
              </RemoveButton>
            </CardBody>
          </CardContent> */}
        </ProductList>
        <CheckOut>
          <Total>
            <p>Subtotal: </p>
            <p style={{ fontWeight: 500 }}>đ{total.toLocaleString()}</p>
          </Total>
          <CheckOutButton>CHECKOUT</CheckOutButton>
        </CheckOut>
      </Container>
    </>
  );
}
