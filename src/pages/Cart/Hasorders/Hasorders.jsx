import { React, useEffect, useState } from 'react';
import { Drawer, Card } from 'antd';
import './Hasorders.css';
import styled from 'styled-components';
import cartIcon from '../Noorder/cart.png';
import Image from './Product B.png';
import close from '../Noorder/Common.png';
import axios from 'axios';
import axiosInstance from './../../../shared/services/http-client';
const Container = styled(Drawer)`
  display: flex;
  flex-direction: row;
  align-items: center;
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
const ProductName = styled.div`
  font-size: 14px;
`;
const ProductPrice = styled.div`
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
const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function HasOrders() {
  // Tạo các state
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(products.map(product => product.id));
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  //Lấy danh sách sản phẩm từ API
  useEffect(() => {
    axiosInstance
      .get('/orders')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  //Cập nhật số lượng sản phẩm
  /*useEffect(() => {
    const updatedProducts = products.filter(
      (product, index) => quantity[index] !== product.attributes.quantity
    );
    updatedProducts.forEach((product, index) => {
      const data = {
        data: {
          quantity: quantity[index],
        },
      };
      axiosInstance
        .put(`/orders/${product.id}`, data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, [quantity]);*/

  //Cập nhật tổng số tiền của các sản phẩm trong giỏ hàng
  useEffect(() => {
    let newTotal = 0;
    products.forEach(product => {
      newTotal += product.attributes.total * product.attributes.quantity;
    });
    setTotal(newTotal);
  }, [products, total]);

  //Hàm xử lý đóng mở giỏ hàng
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //Hàm xử lý khi thanh toán
  const handleCheckOut = total => {
    const data = {
      data: {
        total: total,
        orders: products.map(product => product.id),
      },
    };
    axiosInstance
      .post('/payments', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Hàm xử lý xoá sản phẩm
  const handleDelete = id => {
    axiosInstance
      .delete(`/orders/${id}`)
      .then(response => {
        console.log(response.data);
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Hàm xử lý khi tăng số lượng
  // const quantity = [];
  const handleAddQuantity = id => {
    quantity[id] += 1;
    const data = {
      quantity: quantity[id],
    };
    axiosInstance
      .put(`/orders/${id}`, data)
      .then(response => {
        console.log(response.data);
        // prevQuantity[id] = response.data.quantity;
        setQuantity(quantity[id]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Hàm xử lý khi giảm số lượng
  // const handleSubQuantity = id => {
  //   setQuantity(prevQuantity => {
  //     if (prevQuantity[id] > 1) {
  //       prevQuantity[id] -= 1;
  //       const data = {
  //         data: {
  //           quantity: prevQuantity[id],
  //         },
  //       };
  //       axiosInstance
  //         .put(`/orders/${id}`, data)
  //         .then(response => {
  //           console.log(response.data);
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // };

  //Lấy số lượng sản phẩm trong giỏ hàng
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
                  <ProductPrice>đ{product.attributes.total}</ProductPrice>
                  <ProductSize>
                    Size:{' '}
                    <span style={{ fontWeight: 600 }}>{product.size}</span>
                  </ProductSize>
                  <Quantity>
                    <QuantityButton
                      onClick={
                        () =>
                          console.log(
                            product.id
                          ) /*handleSubQuantity(product.id)*/
                      }
                    >
                      -
                    </QuantityButton>
                    <div>{product.attributes.quantity}</div>
                    <QuantityButton
                      onClick={() => handleAddQuantity(product.id)}
                    >
                      +
                    </QuantityButton>
                  </Quantity>
                </CardInfo>
                <RemoveButton onClick={() => handleDelete(product.id)}>
                  <img src={close} alt="" className="remove" />
                </RemoveButton>
              </CardBody>
            </CardContent>
          ))}
        </ProductList>
        <CheckOut>
          <Total>
            <p>Subtotal: </p>
            <p style={{ fontWeight: 500 }}>đ{total.toLocaleString()}</p>
          </Total>
          <CheckOutButton
            onClick={() =>
              /*console.log(
                  products.map(product => product.id)
                )*/ handleCheckOut(total)
            }
          >
            CHECKOUT
          </CheckOutButton>
        </CheckOut>
      </Container>
    </>
  );
}
