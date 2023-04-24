import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import productApi from '../../API/productApi';

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

const ProductCard = props => {
  const isLoggedIn = localStorage.getItem('at') ? true : false;

  const navigate = useNavigate();
  const handleClickCard = id => {
    navigate(`/product/${id}`);
  };
  const handleAddToCart = async data => {
    const res = await productApi.postAddToCart(data);
    console.log(res.data);
  };
  const handleClikItemCart = (e, id, price) => {
    e.stopPropagation();
    const dataProduct = {
      size: 'M',
      product: id,
      user: 1,
      quantity: 1,
      total: price,
    };
    if (isLoggedIn) {
      //handle add to cart
      handleAddToCart(dataProduct);
      alert('Add to cart');
    } else {
      navigate('/signin');
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
