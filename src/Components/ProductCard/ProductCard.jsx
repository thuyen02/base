
import React from 'react';
import styled from 'styled-components';
import {FiShoppingCart } from 'react-icons/fi';

import './ProductCard.css'



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
    z-index:222;
    position: absolute;
    left: 170px;
    top: 310px;
    display: none;
    &:hover{
      width: 50px;
      height: 50px;
    }
`
const CardProduct = styled.div`
  width: 256px;
  height: 444px;
  box-sizing: border-box;
  padding: 16px;
  align-items: center;
  position: relative;
  &:hover{
    box-shadow: 0px 0px 1px 1px  rgba(72, 72, 72, 0.2);
    cursor: pointer;
    ${IconCart}{
      display: flex;
    }
  } 
  
`;

const CardProductImage = styled.img`
   width: 100%;
  height: 320px;
`;
const CardProductBody = styled.div`
   margin-top: 24px;
`;

  // ProductList.prototype = {
  //   productList: PropTypes.array,
  // };
  // ProductList.deflaultProps = {
  //   productList: [],
  // };
  // function ProductList(props) {
  //   const { productList } = props;
  // }

const ProductCard = ({src}) => {
  
  return(
    <CardProduct>
    <CardProductImage
      src={src}
    alt=""
  />
    <CardProductBody >
    <h3>Apolo Running</h3>
    <p><sup>đ</sup>500,000</p>  
    <IconCart><FiShoppingCart/></IconCart>
  </CardProductBody>  
  
</CardProduct>

  );
  }
export default ProductCard;