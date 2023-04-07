
import React from 'react';
import './ProductCard.css'
import styled from 'styled-components';

const Card = styled.div`
  width: 256px;
  height: 444px;
  box-sizing: border-box;
  padding: 16px;
  align-items: center;
  &:hover{
    box-shadow: 0px 0px 1px 1px  rgba(72, 72, 72, 0.2);
    cursor: pointer;
  } 
`;
const CardProductImage = styled.img`
   width: 100%;
  height: 320px;
`;
const CardProductBody = styled.div`
   margin-top: 24px;
`;

const ProductCard = () => (
  <>
   <Card>
      <CardProductImage
        src="/image/Product-B.png"
      alt=""
    />
      <CardProductBody >
      <h3>Apolo Running</h3>
    <p><sup>đ</sup>500,000</p>
   </CardProductBody>
  </Card>
  </>
);

export default ProductCard;