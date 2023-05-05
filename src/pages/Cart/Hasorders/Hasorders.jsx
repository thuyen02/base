import { React, useEffect, useState } from 'react';
import {
  Container,
  ProductList,
  CardContent,
  CardBody,
  CardInfo,
  RemoveButton,
  ProductName,
  ProductPrice,
  ProductSize,
  Quantity,
  QuantityButton,
  CheckOut,
  CheckOutButton,
  Total,
} from './HasOrdersStyle';
import close from '../Noorder/Common.png';
import axiosInstance from './../../../shared/services/http-client';
import { ShoppingCartOutlined } from '@ant-design/icons';
import NoOrder from '../Noorder/Noorder';
export default function HasOrders() {
  // Tạo các state
  const [products, setProducts] = useState([]);
  // let [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const userID = localStorage.getItem('ut');
  // console.log(userID);

  //Lấy danh sách sản phẩm từ API
  useEffect(() => {
    axiosInstance
      .get(`/orders?populate=product&filters[user][id]=${userID}`)
      .then(response => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  //Cập nhật tổng số tiền của các sản phẩm trong giỏ hàng
  useEffect(() => {
    let newTotal = 0;
    products.forEach(product => {
      newTotal +=
        product.attributes.product.data.attributes.price *
        product.attributes.quantity;
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
        products.forEach(product => {
          axiosInstance.delete(`/orders/${product.id}`).then(res => {
            console.log(res.data);
            setOpen(false);
          });
        });
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
  const handleAddQuantity = async product => {
    try {
      const data = {
        data: {
          quantity: product.attributes.quantity + 1,
        },
      };
      await axiosInstance.put(`/orders/${product.id}`, data).then(response => {
        console.log(response.data.attributes.quantity);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Hàm xử lý khi giảm số lượng
  const handleSubQuantity = async product => {
    try {
      if (product.attributes.quantity > 1) {
        const data = {
          data: {
            quantity: product.attributes.quantity - 1,
          },
        };
        await axiosInstance
          .put(`/orders/${product.id}`, data)
          .then(response => {
            console.log(response.data.attributes.quantity);
            // setQuantity(quantity);
          });
      } else {
        console.log('Số lượng nhỏ hơn 1');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Lấy số lượng sản phẩm trong giỏ hàng
  const totalProducts = products.length;

  return (
    <>
      {totalProducts === 0 ? (
        <NoOrder />
      ) : (
        <>
          <ShoppingCartOutlined onClick={showDrawer} />
          <Container
            placement="right"
            onClose={onClose}
            open={open}
            closeIcon={<img src={close} alt="close button" />}
            title={`Total items: ${totalProducts}`}
          >
            <ProductList>
              {products.map(product => (
                <CardContent
                  key={product.id}
                  cover={
                    <img
                      src={product.attributes.product.data.attributes.image}
                      style={{
                        width: '100%',
                        padding: 8,
                        borderRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      alt=""
                    />
                  }
                >
                  <CardBody>
                    <CardInfo>
                      <ProductName>
                        {product.attributes.product.data.attributes.name}
                      </ProductName>
                      <ProductPrice>
                        <sup style={{ fontSize: 14 }}>đ</sup>
                        {product.attributes.product.data.attributes.price.toLocaleString()}
                      </ProductPrice>
                      {/* <ProductSize>
                        Size:{' '}
                        <span style={{ fontWeight: 600 }}>
                          {product.attributes.product.data.attributes.size}
                        </span>
                      </ProductSize> */}
                      <Quantity>
                        <QuantityButton
                          onClick={() => handleSubQuantity(product)}
                        >
                          -
                        </QuantityButton>
                        <div>{product.attributes.quantity}</div>
                        <QuantityButton
                          onClick={() => handleAddQuantity(product)}
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
                <p style={{ fontWeight: 500 }}>
                  <sup style={{ fontSize: 14 }}>đ</sup>
                  {total.toLocaleString()}
                </p>
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
      )}
    </>
  );
}
