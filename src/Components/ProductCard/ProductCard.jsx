/* eslint-disable no-useless-computed-key */
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import orderApi from '../../API/orderApi';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { fetchOrderAction } from '../../OrderRedux/order';

const IconCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  font-size: 25px;
  z-index: 222;
  position: absolute;
  left: 170px;
  top: 291px;
  display: none;
  &:hover {
    width: 50px;
    height: 50px;
  }
`;
const CardProduct = styled.div`
  margin-top: 20px;
  width: 256px;
  height: 444px;
  box-sizing: border-box;
  padding: 16px;
  align-items: center;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(152, 150, 150, 0.3);
  &:hover {
    box-shadow: 0px 0px 2px 2px rgba(72, 72, 72, 0.2);
    cursor: pointer;
    ${IconCart} {
      display: flex;
    }
  }
`;

const CardProductImage = styled.img`
  width: 100%;
  height: 312px;
  object-fit: cover;
`;
const CardProductBody = styled.div`
  margin-top: 24px;
  width: 100%;
  /* height: 100%; */
  & > h4 {
    margin: 15px 0;
    font-weight: 300px;
  }
  & > p {
    font-size: 18px;
    font-weight: 500px;
    color: #1d1f22;
  }
`;
const notification = {
  title: 'Successful!',
  text: 'Add to cart successful!',
  icon: 'success',
  button: 'OK',
  position: 'top-end',
  width: 400,
  padding: '2em',
  backdrop: true,
  timer: 1000,
};

const ProductCard = props => {
  const isLoggedIn = localStorage.getItem('at') ? true : false;
  const userId = localStorage.getItem('ut');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClickCard = id => {
    navigate(`/product/${id}`);
  };

  const handleClikItemCart = async (e, id, price) => {
    e.stopPropagation();
    const dataInput = {
      quantity: 1,
      product: +id,
      total: +price,
    };
    if (!isLoggedIn) {
      return navigate('/signin');
    } else {
      await getOrderList(id, dataInput);
    }
  };
  const getOrderList = async (productId, dataInput) => {
    const params = {
      populate: 'product',
      ['filters[user][id]']: userId,
    };
    try {
      const res = await orderApi.getOrderList(params);
      const orders = res.data;
      let foundOrder = false;
      orders.forEach(order => {
        const getProductInOrder = order.attributes.product.data
          ? order.attributes.product.data
          : false;

        if (getProductInOrder && getProductInOrder.id === productId) {
          foundOrder = true;
          updateOrder(order, productId);
        }
      });
      if (!foundOrder) {
        if (dataInput === {}) return;
        createOrder(dataInput);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateOrder = async (order, productId) => {
    try {
      const dataRes = order.attributes;
      const orderId = order.id;
      const data = {
        ...dataRes,
        quantity: dataRes.quantity + 1,
        total: dataRes.total + dataRes.total / dataRes.quantity,
      };
      await orderApi.updateOrder(orderId, data);
      swal(notification);
      await dispatch(fetchOrderAction(userId))
    } catch (err) {
      console.log(err);
    }
  };
  const createOrder = async dataInput => {
    try {
      const data = { ...dataInput, user: +userId };

      await orderApi.createOrder(data);
      swal(notification);
      await dispatch(fetchOrderAction(userId));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CardProduct onClick={() => handleClickCard(props.productId)}>
      <CardProductImage src={props.image} alt={props.name} />
      <CardProductBody>
        <h4>{props.name}</h4>
        <p>
          <sup>đ</sup>
          {props.price}
        </p>
        <IconCart
          id="add"
          onClick={e => handleClikItemCart(e, props.productId, props.price)}
        >
          <FiShoppingCart />
        </IconCart>
      </CardProductBody>
    </CardProduct>
  );
};

export default ProductCard;
