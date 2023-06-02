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
  Quantity,
  QuantityButton,
  QuantityButtonNone,
  CheckOut,
  CheckOutButton,
  Total,
} from './HasOrdersStyle';
import close from '../Noorder/Common.png';
import axiosInstance from './../../../shared/services/http-client';
import { ShoppingCartOutlined } from '@ant-design/icons';
import NoOrder from '../Noorder/Noorder';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQuantity,
  checkoutOrder,
  deleteOrder,
  fetchOrderAction,
  selectOrder,
  subQuantity,
} from '../../../OrderRedux/order';
import swal from 'sweetalert';
export default function HasOrders() {
  // Tạo các state
  // const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const userID = localStorage.getItem('ut');
  const dispatch = useDispatch();
  const { orders } = useSelector(selectOrder);
  // console.log(orders);

  // //Lấy danh sách sản phẩm từ API
  // useEffect(() => {
  //   axiosInstance
  //     .get(`/orders?populate=product&filters[user][id]=${userID}`)
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => console.log(error));
  // }, [products]);
  //Cập nhật tổng số tiền của các sản phẩm trong giỏ hàng
  useEffect(() => {
    let newTotal = 0;
    orders.forEach(order => {
      newTotal +=
        order.attributes.product.data.attributes.price *
        order.attributes.quantity;
    });
    setTotal(newTotal);
  }, [orders]);

  //Hàm xử lý đóng mở giỏ hàng
  const showDrawer = () => {
    setOpen(true);
  };
  // useEffect(() => {
  //   if (hasOrders) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // });
  console.log('Is open: ', open);
  const onClose = () => {
    setOpen(false);
  };

  //Hàm xử lý khi thanh toán
  const handleCheckOut = async total => {
    await dispatch(checkoutOrder({ orders, total, userID }));
    setIsCheckOut(true);
    setOpen(false);
    await swal({
      title: 'Payments success',
      text: 'Thank you for shopping at the website',
      icon: 'success',
      buttons: 'OK',
      // ,
      timer: 3000,
    });
  };

  //Hàm xử lý xoá sản phẩm
  const handleDelete = async id => {
    await dispatch(deleteOrder({ id, userID }));
    if (orders.length === 0) {
      setOpen(true);
    }
  };
  //Hàm xử lý khi tăng số lượng
  const handleAddQuantity = async product => {
    await dispatch(addQuantity({ product, userID }));
    // await dispatch(fetchOrderAction(userID));
  };

  //Hàm xử lý khi giảm số lượng
  const handleSubQuantity = async product => {
    await dispatch(subQuantity({ product, userID }));
  };
  //Lấy số lượng sản phẩm trong giỏ hàng
  const totalProducts = orders.length;
  return (
    <div>
      <div>
        <div onClick={() => showDrawer()}>
          <ShoppingCartOutlined />
          {orders.length > 0 ? <sup>{totalProducts}</sup> : <></>}
        </div>
        <Container
          placement="right"
          onClose={onClose}
          open={open}
          closeIcon={<img src={close} alt="close button" />}
          title={`Total items: ${totalProducts}`}
        >
          <ProductList>
            {orders.map(product => (
              <CardContent
                key={product.id}
                cover={
                  <img
                    src={product.attributes.product.data.attributes.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      padding: 8,
                      borderRadius: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
                    <Quantity>
                      {product.attributes.quantity > 1 ? (
                        <QuantityButton
                          onClick={() => handleSubQuantity(product)}
                        >
                          -
                        </QuantityButton>
                      ) : (
                        <QuantityButtonNone>-</QuantityButtonNone>
                      )}
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
      </div>
    </div>
  );
}
